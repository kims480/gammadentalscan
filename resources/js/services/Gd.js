class Gd {
    SCOPES = ["https://www.googleapis.com/auth/drive", "profile"];
    CLIENT_ID =
        "909780462877-7uqkksfdop3v16avj4ae077134aluoim.apps.googleusercontent.com";
    FOLDER_NAME = "";
    FOLDER_ID = "root";
    FOLDER_PERMISSION = true;
    FOLDER_LEVEL = 0;
    NO_OF_FILES = 100;
    DRIVE_FILES = [];
    FILE_COUNTER = 0;
    FOLDER_ARRAY = [];
    DELETE_FROM_TRASH = false;
    constructor() {}
    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            $("#drive-box").show();
            $("#login-box").hide();
            showLoading();
            getDriveFiles();
        } else {
            $("#login-box").show();
            $("#drive-box").hide();
        }
        return;
    }
    isGoogleSigned() {
        return window.gapi.auth2.getAuthInstance().isSignedIn.get();
    }
}
