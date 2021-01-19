import ServicesConst from "@/services/ServicesConst";
import gapi from "./../../services/gapi";

export const namespaced = true;
function GetDefaultState() {
    data = {
        SCOPES: ["https://www.googleapis.com/auth/drive", "profile"],
        CLIENT_ID:
            "909780462877-7uqkksfdop3v16avj4ae077134aluoim.apps.googleusercontent.com",
        FOLDER_NAME: "",
        FOLDER_ID: "root",
        FOLDER_PERMISSION: true,
        FOLDER_LEVEL: 0,
        NO_OF_FILES: 100,
        DRIVE_FILES: [],
        FILE_COUNTER: 0,
        FOLDER_ARRAY: [],
        DELETE_FROM_TRASH: false,
        isGoogleSigned: () => {
            return window.gapi.auth2.getAuthInstance().isSignedIn.get();
        }
    };
}
let state = new GetDefaultState();

state.d;

export const getters = {};

export const mutations = {};

export const actions = {
    async handleClientLoad() {
        //gapi is client library, it used for Load the API client and auth2 library
        await window.gapi.load("client:auth2", this.initClient);
    },
    onload: () => {},
    onreadystatechange: () => {
        return this.readyState === "complete" ?? this.onload;
    },
    //authorize apps
    async initClient() {
        await gapi.client
            .init({
                clientId: CLIENT_ID,
                scope: SCOPES.join(" ")
            })
            .then(o => {
                console.log("o", o);
                console.log(
                    "signed in",
                    window.gapi.auth2.getAuthInstance().isSignedIn.get()
                );
                // Listen for sign-in state changes.
                gapi.auth2
                    .getAuthInstance()
                    .isSignedIn.listen(updateSigninStatus);
                updateSigninStatus(isGoogleSigned());
                // Handle the initial sign-in state.
            })
            .catch(err => {
                console.log("err", err);
            });
    },
    isGoogleSigned() {
        return window.gapi.auth2.getAuthInstance().isSignedIn.get();
    },

    handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
    },

    handleSignoutClick(event) {
        if (confirm("Are you sure you want to logout?")) {
            gapi.auth2.getAuthInstance().signOut();
        }
    }
};

function getDriveFiles() {
    showStatus("Loading Google Drive files...");
    gapi.client.load("drive", "v2", getFiles);
}
function getFiles() {
    var query = "";
    if (ifShowSharedFiles()) {
        $(".button-opt").hide();
        $(".trash-opt").hide();

        if ($("#drive-breadcrumb a").html() == "Share") {
            if ($("#span-navigation").html() == "") {
                $("#drive-breadcrumb a").html("Share");
            } else {
                $(".button-opt").hide();
                $(".trash-opt").hide();
            }
        } else {
            $("#drive-breadcrumb a").html("Share");
        }

        DELETE_FROM_TRASH = false;
        query =
            FOLDER_ID == "root"
                ? "trashed=false and sharedWithMe"
                : "trashed=false and '" + FOLDER_ID + "' in parents";
    } else if (ifShowTrashFiles()) {
        $(".button-opt").hide();
        $(".share-opt").hide();
        DELETE_FROM_TRASH = true;

        if ($("#drive-breadcrumb a").html() == "Trash") {
            if ($("#span-navigation").html() == "") {
                $("#drive-breadcrumb a").html("Trash");
            } else {
                $(".button-opt").hide();
                $(".share-opt").hide();
            }
        } else {
            $("#drive-breadcrumb a").html("Trash");
        }

        query = "trashed=true";
        //query = "starred=true";
        //query = "trashed=true and mimeType='application/vnd.google-apps.folder'";
    } else {
        if ($("#drive-breadcrumb a").html() == "Trash") {
            if ($("#span-navigation").html() == "") {
                $("#drive-breadcrumb a").html("Home");
            }
        } else if ($("#drive-breadcrumb a").html() == "Share") {
            if ($("#span-navigation").html() == "") {
                $("#drive-breadcrumb a").html("Home");
            }
        }

        DELETE_FROM_TRASH = false;
        query = "trashed=false and '" + FOLDER_ID + "' in parents";
        $(".button-opt").show();
        $(".share-opt").show();
        $(".trash-opt").show();
    }

    var request = gapi.client.drive.files.list({
        maxResults: NO_OF_FILES,
        q: query
    });

    request.execute(resp => {
        if (!resp.error) {
            showUserInfo();
            DRIVE_FILES = resp.items;
            buildFiles();
        } else {
            showErrorMessage("Error: " + resp.error.message);
        }
    });
}

function showUserInfo() {
    var request = gapi.client.drive.about.get();

    request.execute(resp => {
        if (!resp.error) {
            $("#drive-info").show();
            $("#span-name").html(resp.name);
            $("#span-totalQuota").html(formatBytes(resp.quotaBytesTotal));
            $("#span-usedQuota").html(formatBytes(resp.quotaBytesUsed));
        } else {
            showErrorMessage("Error: " + resp.error.message);
        }
    });
}

function buildFiles() {
    var fText = "";
    if (DRIVE_FILES.length > 0) {
        for (var i = 0; i < DRIVE_FILES.length; i++) {
            DRIVE_FILES[i].textContentURL = "";
            DRIVE_FILES[i].level = (parseInt(FOLDER_LEVEL) + 1).toString();
            DRIVE_FILES[i].parentID =
                DRIVE_FILES[i].parents.length > 0
                    ? DRIVE_FILES[i].parents[0].id
                    : "";
            DRIVE_FILES[i].thumbnailLink = DRIVE_FILES[i].thumbnailLink || "";
            DRIVE_FILES[i].fileType =
                DRIVE_FILES[i].fileExtension == null ? "folder" : "file";
            DRIVE_FILES[i].permissionRole = DRIVE_FILES[i].userPermission.role;
            DRIVE_FILES[i].hasPermission =
                DRIVE_FILES[i].permissionRole == "owner" ||
                DRIVE_FILES[i].permissionRole == "writer";

            if (DRIVE_FILES[i]["exportLinks"] != null) {
                DRIVE_FILES[i].fileType = "file";
                DRIVE_FILES[i].textContentURL =
                    DRIVE_FILES[i]["exportLinks"]["text/plain"];
            }
            var textTitle =
                DRIVE_FILES[i].fileType != "file"
                    ? "Browse " + DRIVE_FILES[i].title
                    : DRIVE_FILES[i].title;

            fText += "<div class='" + DRIVE_FILES[i].fileType + "-box'>";
            if (DRIVE_FILES[i].fileType != "file") {
                fText +=
                    "<div class='folder-icon' data-file-counter='" +
                    i +
                    "' data-level='" +
                    DRIVE_FILES[i].level +
                    "' data-parent='" +
                    DRIVE_FILES[i].parentID +
                    "' data-size='" +
                    DRIVE_FILES[i].fileSize +
                    "' data-id='" +
                    DRIVE_FILES[i].id +
                    "' title='" +
                    textTitle +
                    "' data-name='" +
                    DRIVE_FILES[i].title +
                    "' data-has-permission='" +
                    DRIVE_FILES[i].hasPermission +
                    "'><div class='image-preview'><img src='../../Images/folder.png'/></div></div>";
            } else {
                if (DRIVE_FILES[i].thumbnailLink) {
                    fText +=
                        "<div class='image-icon' data-file-counter='" +
                        i +
                        "' ><div class='image-preview'><a href='" +
                        DRIVE_FILES[i].thumbnailLink.replace("s220", "s800") +
                        "' data-lightbox='image-" +
                        i +
                        "'><img src='" +
                        DRIVE_FILES[i].thumbnailLink +
                        "'/></a></div></div>";
                } else {
                    if (
                        DRIVE_FILES[i].fileExtension == "txt" ||
                        DRIVE_FILES[i].fileExtension == "xls" ||
                        DRIVE_FILES[i].fileExtension == "xlsx" ||
                        DRIVE_FILES[i].fileExtension == "pdf" ||
                        DRIVE_FILES[i].fileExtension == "ppt" ||
                        DRIVE_FILES[i].fileExtension == "pptx" ||
                        DRIVE_FILES[i].fileExtension == "csv" ||
                        DRIVE_FILES[i].fileExtension == "doc" ||
                        DRIVE_FILES[i].fileExtension == "docx"
                    ) {
                        fText +=
                            "<div class='file-icon' data-file-counter='" +
                            i +
                            "' ><div class='image-preview'><img src='../Images/" +
                            DRIVE_FILES[i].fileExtension +
                            "-icon.png" +
                            "'/></div></div>";
                    } else {
                        fText +=
                            "<div class='file-icon' data-file-counter='" +
                            i +
                            "' ><div class='image-preview'><img src='../Images/undefined-icon.png" +
                            "'/></div></div>";
                    }
                }
            }
            fText +=
                "<div class='item-title'>" + DRIVE_FILES[i].title + "</div>";

            //button actions
            fText += "<div class='button-box'>";

            if (DRIVE_FILES[i].fileType != "folder") {
                fText +=
                    "<v-icon>mdi-forward</v-icon><span class='glyphicon glyphicon-download-alt button-download' title='Download' data-id='" +
                    DRIVE_FILES[i].id +
                    "' data-file-counter='" +
                    i +
                    "'></span>";
            }

            fText +=
                "<v-icon color='black'>mdi-forward</v-icon><span class='glyphicon glyphicon-info-sign button-info' title='Info' data-id='" +
                DRIVE_FILES[i].id +
                "' data-file-counter='" +
                i +
                "'></span>";

            if (DRIVE_FILES[i].hasPermission) {
                if (DRIVE_FILES[i].labels.trashed) {
                    if (DRIVE_FILES[i].permissionRole == "owner") {
                        fText +=
                            "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" +
                            DRIVE_FILES[i].id +
                            "'></span>";
                    } else if (DRIVE_FILES[i].fileType != "folder") {
                        fText +=
                            "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" +
                            DRIVE_FILES[i].id +
                            "'></span>";
                    }
                    fText +=
                        "<span class='glyphicon glyphicon-retweet button-restore' title='Restore' data-id='" +
                        DRIVE_FILES[i].id +
                        "'></span>";
                } else {
                    if (DRIVE_FILES[i].permissionRole == "owner") {
                        fText +=
                            "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" +
                            DRIVE_FILES[i].id +
                            "'></span>";
                    } else if (DRIVE_FILES[i].fileType != "folder") {
                        fText +=
                            "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" +
                            DRIVE_FILES[i].id +
                            "'></span>";
                    }
                }
            }

            fText += "</div>";
            //closing div
            fText += "</div>";
        }
    } else {
        fText = "Empty";
    }
    hideStatus();
    $("#drive-content").html(fText);
    initDriveButtons();
    hideLoading();
}

//Initialize the click button for each individual drive file/folder
//this need to be recalled everytime the Google Drive data is generated
function initDriveButtons() {
    //Initiate the delete button click
    $(".button-delete").unbind("click");
    $(".button-delete").click(() => {
        var c = confirm("Are you sure to delete this?");
        if (c) {
            showLoading();
            showStatus("Deleting file in progress...");

            if (DELETE_FROM_TRASH) {
                showStatus("Deleting file for forever...");
                var request = gapi.client.drive.files.delete({
                    fileId: $(this).attr("data-id")
                });

                request.execute(resp => {
                    hideStatus();
                    if (resp.error) {
                        showErrorMessage("Error: " + resp.error.message);
                    }
                    getDriveFiles();
                });
            } else {
                showStatus("Moving file into the trash...");
                var request = gapi.client.drive.files.trash({
                    fileId: $(this).attr("data-id")
                });

                request.execute(resp => {
                    hideStatus();
                    if (resp.error) {
                        showErrorMessage("Error: " + resp.error.message);
                    }
                    getDriveFiles();
                });
            }
        }
    });

    //Initiate the Restore button click
    $(".button-restore").unbind("click");
    $(".button-restore").click(() => {
        showLoading();
        showStatus("Restoring file in progress...");
        var request = gapi.client.drive.files.untrash({
            fileId: $(this).attr("data-id")
        });

        request.execute(resp => {
            hideStatus();
            if (resp.error) {
                showErrorMessage("Error: " + resp.error.message);
            }
            getDriveFiles();
        });
    });

    //Initiate the download button
    $(".button-download").unbind("click");
    $(".button-download").click(() => {
        showLoading();
        showStatus("Downloading file in progress...");
        FILE_COUNTER = $(this).attr("data-file-counter");
        setTimeout(function() {
            //If there is a text version, we get this version instead.
            if (DRIVE_FILES[FILE_COUNTER].webContentLink == null) {
                window.open(
                    DRIVE_FILES[FILE_COUNTER]["exportLinks"]["text/plain"]
                );
            } else {
                window.open(DRIVE_FILES[FILE_COUNTER].webContentLink);
            }
            hideLoading();
            hideStatus();
        }, 1000);
    });

    $(".button-info").unbind("click");
    $(".button-info").click(() => {
        FILE_COUNTER = $(this).attr("data-file-counter");

        $("#box-info").show();
        if (DRIVE_FILES[FILE_COUNTER] != null) {
            var createdDate = new Date(DRIVE_FILES[FILE_COUNTER].createdDate);
            var modifiedDate = new Date(DRIVE_FILES[FILE_COUNTER].modifiedDate);
            $("#spanCreatedDate").html(
                createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt")
            );
            $("#spanModifiedDate").html(
                modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt")
            );
            $("#spanOwner").html(
                DRIVE_FILES[FILE_COUNTER].owners[0].displayName.length > 0
                    ? DRIVE_FILES[FILE_COUNTER].owners[0].displayName
                    : ""
            );
            $("#spanTitle").html(DRIVE_FILES[FILE_COUNTER].title);
            $("#spanSize").html(
                DRIVE_FILES[FILE_COUNTER].fileSize == null
                    ? "N/A"
                    : formatBytes(DRIVE_FILES[FILE_COUNTER].fileSize)
            );
            $("#spanExtension").html(
                DRIVE_FILES[FILE_COUNTER].fileExtension == null
                    ? "N/A"
                    : DRIVE_FILES[FILE_COUNTER].fileExtension
            );
        }
    });

    //Initiate the click folder browse icon
    $(".folder-icon").unbind("click");
    $(".folder-icon").click(() => {
        if (DELETE_FROM_TRASH) {
            alert(
                "This folder is in your trash, To view this folder, you will need to restore it from your trash."
            );
        } else {
            //Browse folders only when folders are not in trash
            browseFolder($(this), 0);
        }
    });

    $(".file-icon,.image-icon").unbind("click");
    $(".file-icon,.image-icon").click(() => {
        FILE_COUNTER = $(this).attr("data-file-counter");

        $("#spanCreatedDate").html("");
        $("#spanModifiedDate").html("");
        $("#spanOwner").html("");
        $("#spanTitle").html("");
        $("#spanSize").html("");
        $("#spanExtension").html("");

        if (DRIVE_FILES[FILE_COUNTER] != null) {
            var createdDate = new Date(DRIVE_FILES[FILE_COUNTER].createdDate);
            var modifiedDate = new Date(DRIVE_FILES[FILE_COUNTER].modifiedDate);
            $("#spanCreatedDate").html(
                createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt")
            );
            $("#spanModifiedDate").html(
                modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt")
            );
            $("#spanOwner").html(
                DRIVE_FILES[FILE_COUNTER].owners[0].displayName.length > 0
                    ? DRIVE_FILES[FILE_COUNTER].owners[0].displayName
                    : ""
            );
            $("#spanTitle").html(DRIVE_FILES[FILE_COUNTER].title);
            $("#spanSize").html(
                DRIVE_FILES[FILE_COUNTER].fileSize == null
                    ? "N/A"
                    : formatBytes(DRIVE_FILES[FILE_COUNTER].fileSize)
            );
            $("#spanExtension").html(DRIVE_FILES[FILE_COUNTER].fileExtension);
        }
    });

    //Initiate the breadcrumb navigation link click
    $("#drive-breadcrumb a").unbind("click");
    $("#drive-breadcrumb a").click(() => {
        browseFolder($(this), 1);
    });
}

//browse folder
function browseFolder(obj, flag) {
    FOLDER_ID = $(obj).attr("data-id");
    FOLDER_NAME = $(obj).attr("data-name");
    FOLDER_LEVEL = parseInt($(obj).attr("data-level"));
    FOLDER_PERMISSION = $(obj).attr("data-has-permission");
    //-------------------------------------------------------------
    //Clear all before Insert
    $("#spanCreatedDate").html("");
    $("#spanModifiedDate").html("");
    $("#spanOwner").html("");
    $("#spanTitle").html("");
    $("#spanSize").html("");
    $("#spanExtension").html("");

    if (flag == 0) {
        FILE_COUNTER = $(obj).attr("data-file-counter");

        if (DRIVE_FILES[FILE_COUNTER] != null) {
            var createdDate = new Date(DRIVE_FILES[FILE_COUNTER].createdDate);
            var modifiedDate = new Date(DRIVE_FILES[FILE_COUNTER].modifiedDate);
            $("#spanCreatedDate").html(
                createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt")
            );
            $("#spanModifiedDate").html(
                modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt")
            );
            $("#spanOwner").html(
                DRIVE_FILES[FILE_COUNTER].owners[0].displayName.length > 0
                    ? DRIVE_FILES[FILE_COUNTER].owners[0].displayName
                    : ""
            );
            $("#spanTitle").html(DRIVE_FILES[FILE_COUNTER].title);
            $("#spanSize").html(
                DRIVE_FILES[FILE_COUNTER].fileSize == null
                    ? "N/A"
                    : formatBytes(DRIVE_FILES[FILE_COUNTER].fileSize)
            );
            $("#spanExtension").html(DRIVE_FILES[FILE_COUNTER].fileExtension);
        }
    } else {
        var spanCreatedDate = $(obj).attr("spanCreatedDate");
        var spanModifiedDate = $(obj).attr("spanModifiedDate");
        var spanOwner = $(obj).attr("spanOwner");
        var spanTitle = $(obj).attr("spanTitle");
        var spanSize = $(obj).attr("spanSize");
        var spanExtension = $(obj).attr("spanExtension");

        $("#spanCreatedDate").html(spanCreatedDate);
        $("#spanModifiedDate").html(spanModifiedDate);
        $("#spanOwner").html(spanOwner);
        $("#spanTitle").html(spanTitle);
        $("#spanSize").html(spanSize);
        $("#spanExtension").html(spanExtension);
    }
    //-----------------------------------------------------------------------------------------------------------
    if (typeof FOLDER_NAME === "undefined") {
        FOLDER_NAME = "";
        FOLDER_ID = "root";
        FOLDER_LEVEL = 0;
        FOLDER_PERMISSION = true;
        FOLDER_ARRAY = [];
        $("#box-info").css("display", "none");
    } else {
        if (FOLDER_LEVEL == FOLDER_ARRAY.length && FOLDER_LEVEL > 0) {
            //do nothing
        } else if (FOLDER_LEVEL < FOLDER_ARRAY.length) {
            var tmpArray = cloneObject(FOLDER_ARRAY);
            FOLDER_ARRAY = [];

            for (var i = 0; i < tmpArray.length; i++) {
                FOLDER_ARRAY.push(tmpArray[i]);
                if (tmpArray[i].Level >= FOLDER_LEVEL) {
                    break;
                }
            }
        } else {
            //breadcrumb navigation data insert
            var fd = {
                Name: FOLDER_NAME,
                ID: FOLDER_ID,
                Level: FOLDER_LEVEL,
                Permission: FOLDER_PERMISSION,

                Title: $("#spanTitle").html(),
                CreatedDate: $("#spanCreatedDate").html(),
                ModifiedDate: $("#spanModifiedDate").html(),
                Owner: $("#spanOwner").html(),
                Size: $("#spanSize").html(),
                Extension: $("#spanExtension").html()
            };
            FOLDER_ARRAY.push(fd);
        }
    }

    var sbNav = "";
    for (var i = 0; i < FOLDER_ARRAY.length; i++) {
        sbNav += "<span class='breadcrumb-arrow'></span>";
        sbNav +=
            "<span class='folder-name'><a  spanCreatedDate='" +
            FOLDER_ARRAY[i].CreatedDate +
            "' spanModifiedDate='" +
            FOLDER_ARRAY[i].ModifiedDate +
            "' spanOwner='" +
            FOLDER_ARRAY[i].Owner +
            "' spanSize='" +
            FOLDER_ARRAY[i].Size +
            "' spanExtension='" +
            FOLDER_ARRAY[i].Extension +
            "' spanTitle='" +
            FOLDER_ARRAY[i].Title +
            "' data-id='" +
            FOLDER_ARRAY[i].ID +
            "' data-level='" +
            FOLDER_ARRAY[i].Level +
            "' data-name='" +
            FOLDER_ARRAY[i].Name +
            "' data-has-permission='" +
            FOLDER_PERMISSION +
            "'>" +
            FOLDER_ARRAY[i].Name +
            "</a></span>";
    }
    $("#span-navigation").html(sbNav.toString());

    showLoading();
    showStatus("Loading Google Drive files...");
    getDriveFiles();
}

// to clone an object
function cloneObject(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    var temp = obj.constructor();
    for (var key in obj) {
        temp[key] = cloneObject(obj[key]);
    }
    return temp;
}

//show whether the display mode is share files or not
function ifShowSharedFiles() {
    return $("#button-share.flash").length > 0 ? true : false;
}

function ifShowTrashFiles() {
    return $("#button-trash.flash").length > 0 ? true : false;
}

// to return bytes into different string data format
function formatBytes(bytes) {
    if (bytes < 1024) return bytes + " Bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
    else return (bytes / 1073741824).toFixed(3) + " GB";
}
