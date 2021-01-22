import VueNotifications from "vue-notifications";
export default {
    notifications: {
        showError: {
            title: "Oops!",
            message:
                "Something's wrong with, please check your internet and try again.",
            type: VueNotifications.types.error
        },
        showSuccess: {
            type: VueNotifications.types.success,
            title: "Success!",
            message: "Action successful"
        }
    }
};
