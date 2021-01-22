var file = [];
/*/*
import { rangesIntersect } from './../../../vendor/almasaeed2010/adminlte/plugins/fullcalendar/main.d';
import { RetryHandler } from './upload';
 * Helper for implementing retries with backoff. Initial retry
 * delay is 1 second, increasing by 2x (+jitter) for subsequent retries
 *
 * @constructor
 */
/**
 * Helper for implementing retries with backoff. Initial retry
 * delay is 1 second, increasing by 2x (+jitter) for subsequent retries
 *
 * @constructor
 */
class RetryHandler {
    constructor() {
        this.interval = 1000; // Start at one second
        this.maxInterval = 60 * 1000; // Don't wait longer than a minute
    }
    /**
     * Invoke the function after waiting
     *
     * @param {function} fn Function to invoke
     */
    retry(fn) {
        setTimeout(fn, this.interval);
        this.interval = this.nextInterval_();
    }
    /**
     * Reset the counter (e.g. after successful request.)
     */
    reset() {
        this.interval = 1000;
    }
    /**
     * Calculate the next wait time.
     * @return {number} Next wait interval, in milliseconds
     *
     * @private
     */
    nextInterval_() {
        var interval = this.interval * 2 + this.getRandomInt_(0, 1000);
        return Math.min(interval, this.maxInterval);
    }
    /**
     * Get a random int in the range of min to max. Used to add jitter to wait times.
     *
     * @param {number} min Lower bounds
     * @param {number} max Upper bounds
     * @private
     */
    getRandomInt_(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

/**
 * Helper class for resumable uploads using XHR/CORS. Can upload any Blob-like item, whether
 * files or in-memory constructs.
 *
 * @example
 * var content = new Blob(["Hello world"], {"type": "text/plain"});
 * var uploader = new MediaUploader({
 *   file: content,
 *   token: accessToken,
 *   onComplete: function(data) { ... }
 *   onError: function(data) { ... }
 * });
 * uploader.upload();
 *
 * @constructor
 * @param {object} options Hash of options
 * @param {string} options.token Access token
 * @param {blob} options.file Blob-like item to upload
 * @param {string} [options.fileId] ID of file if replacing
 * @param {object} [options.params] Additional query parameters
 * @param {string} [options.contentType] Content-type, if overriding the type of the blob.
 * @param {object} [options.metadata] File metadata
 * @param {function} [options.onComplete] Callback for when upload is complete
 * @param {function} [options.onProgress] Callback for status for the in-progress upload
 * @param {function} [options.onError] Callback if upload fails
 */
class MediaUploader {
    constructor(options) {
        var noop = function() {};
        this.file = options.file;
        this.contentType =
            options.contentType || this.file.type || "application/octet-stream";
        this.metadata = options.metadata || {
            title: this.file.name,
            mimeType: this.contentType
        };
        this.token = options.token;
        this.onComplete = options.onComplete || noop;
        this.onProgress = options.onProgress || noop;
        this.onError = options.onError || noop;
        this.offset = options.offset || 0;
        this.chunkSize = options.chunkSize || 1024 * 1024;
        this.retryHandler = new RetryHandler();

        this.url = options.url;
        if (!this.url) {
            var params = options.params || {};
            params.uploadType = "resumable";
            this.url = this.buildUrl_(options.fileId, params, options.baseUrl);
        }
        this.httpMethod = options.fileId ? "PUT" : "POST";
    }
    /**
     * Initiate the upload.
     */
    upload() {
        var self = this;
        var xhr = new XMLHttpRequest();

        xhr.open(this.httpMethod, this.url, true);
        xhr.setRequestHeader("Authorization", "Bearer " + this.token);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Upload-Content-Length", this.file.size);
        xhr.setRequestHeader("X-Upload-Content-Type", this.contentType);

        xhr.onload = function(e) {
            if (e.target.status < 400) {
                var location = e.target.getResponseHeader("Location");
                this.url = location;
                this.sendFile_();
            } else {
                this.onUploadError_(e);
                self;
            }
        }.bind(this);
        xhr.onerror = this.onUploadError_.bind(this);
        xhr.send(JSON.stringify(this.metadata));
    }
    /**
     * Send the actual file content.
     *
     * @private
     */
    sendFile_() {
        var content = this.file;
        var end = this.file.size;

        if (this.offset || this.chunkSize) {
            // Only bother to slice the file if we're either resuming or uploading in chunks
            if (this.chunkSize) {
                end = Math.min(this.offset + this.chunkSize, this.file.size);
            }
            content = content.slice(this.offset, end);
        }

        var xhr = new XMLHttpRequest();
        xhr.open("PUT", this.url, true);
        xhr.setRequestHeader("Content-Type", this.contentType);
        xhr.setRequestHeader(
            "Content-Range",
            "bytes " + this.offset + "-" + (end - 1) + "/" + this.file.size
        );
        xhr.setRequestHeader("X-Upload-Content-Type", this.file.type);
        if (xhr.upload) {
            xhr.upload.addEventListener("progress", this.onProgress);
        }
        xhr.onload = this.onContentUploadSuccess_.bind(this);
        xhr.onerror = this.onContentUploadError_.bind(this);
        xhr.send(content);
    }
    /**
     * Query for the state of the file for resumption.
     *
     * @private
     */
    resume_() {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", this.url, true);
        xhr.setRequestHeader("Content-Range", "bytes */" + this.file.size);
        xhr.setRequestHeader("X-Upload-Content-Type", this.file.type);
        if (xhr.upload) {
            xhr.upload.addEventListener("progress", this.onProgress);
        }
        xhr.onload = this.onContentUploadSuccess_.bind(this);
        xhr.onerror = this.onContentUploadError_.bind(this);
        xhr.send();
    }
    /**
     * Extract the last saved range if available in the request.
     *
     * @param {XMLHttpRequest} xhr Request object
     */
    extractRange_(xhr) {
        var range = xhr.getResponseHeader("Range");
        if (range) {
            this.offset = parseInt(range.match(/\d+/g).pop(), 10) + 1;
        }
    }
    /**
     * Handle successful responses for uploads. Depending on the context,
     * may continue with uploading the next chunk of the file or, if complete,
     * invokes the caller's callback.
     *
     * @private
     * @param {object} e XHR event
     */
    onContentUploadSuccess_(e) {
        if (e.target.status == 200 || e.target.status == 201) {
            this.onComplete(e.target.response);
        } else if (e.target.status == 308) {
            this.extractRange_(e.target);
            this.retryHandler.reset();
            this.sendFile_();
        }
    }
    /**
     * Handles errors for uploads. Either retries or aborts depending
     * on the error.
     *
     * @private
     * @param {object} e XHR event
     */
    onContentUploadError_(e) {
        if (e.target.status && e.target.status < 500) {
            this.onError(e.target.response);
        } else {
            this.retryHandler.retry(this.resume_.bind(this));
        }
    }
    /**
     * Handles errors for the initial request.
     *
     * @private
     * @param {object} e XHR event
     */
    onUploadError_(e) {
        this.onError(e.target.response); // TODO - Retries for initial upload
    }
    /**
     * Construct a query string from a hash/object
     *
     * @private
     * @param {object} [params] Key/value pairs for query string
     * @return {string} query string
     */
    buildQuery_(params) {
        params = params || {};
        return Object.keys(params)
            .map(function(key) {
                return (
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(params[key])
                );
            })
            .join("&");
    }
    /**
     * Build the drive upload URL
     *
     * @private
     * @param {string} [id] File ID if replacing
     * @param {object} [params] Query parameters
     * @return {string} URL
     */
    buildUrl_(id, params, baseUrl) {
        var url =
            baseUrl || "https://www.googleapis.com/upload/drive/v2/files/";
        if (id) {
            url += id;
        }
        var query = this.buildQuery_(params);
        if (query) {
            url += "?" + query;
        }
        return url;
    }
}
/* function process(){
    for (var j = 0; j <file.length; j++) {
        var blob = file[j];

        const BYTES_PER_CHUNK = 1024 * 1024;
        // 1MB chunk sizes.
        const SIZE = blob.size;

        var start = 0;
        var end = BYTES_PER_CHUNK;

        while (start < SIZE) {

         if ('mozSlice' in blob) {
          var chunk = blob.mozSlice(start, end);
         } else {
          var chunk = blob.webkitSlice(start, end);
         }

         upload(chunk);

         start = end;
         end = start + BYTES_PER_CHUNK;
        }
        p = ( j = file.length - 1) ? true : false;
        self.postMessage(blob.name + " Uploaded Succesfully");
       }

} */
var options = {};

self.onmessage = function(e) {
    options = {
        file: null,
        token: gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getAuthResponse().access_token,
        metadata: e.data.metadata,
        onError: function(response) {
            self.postMessage({ response, message: "onError" });
        },
        onComplete: function(response) {
            console.log("inside Mediauploader OnComplete");
            var errorResponse = JSON.parse(response);
            if (errorResponse.message != null) {
                console.log("inside Mediauploader OnComplete Error");

                self.postMessage({ response, message: "onError" });
            } else {
                console.log("inside Mediauploader OnComplete Done");
            }

            //  _this.showUploadProgress=false
            self.postMessage({ response, message: "onComplete" });
        },
        onProgress: function(event) {
            // console.log('inside Mediauploader OnComplete on Progress')
            self.postMessage({ event, message: "onProgress" });
        },
        params: {
            convert: false,
            ocr: false
        }
    };
    for (var j = 0; j < e.data.file.length; j++) file.push(e.data.file[j]);

    //  if (p) {
    //   process(){
    for (var i = 0; i < file.length; i++) {
        options.file = e.data.file[i];
        option.metadata.title = this.file[i].name;
        option.metadata.mimeType = file[i].type || "application/octet-stream";

        //if user upload an empty content, create a temp blob with a space content on it.
        if (file[i].size <= 0) {
            var emptyContent = " ";
            options.file = new Blob([emptyContent], {
                type: file[i].type || "application/octet-stream"
            });
        }
        var uploader = new MediaUploader(options);
        uploader.upload();
    }
    //  }
};
