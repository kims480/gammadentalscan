export default function({ $axios, store, redirect }) {
  $axios.onError(error => {
    if (error.message == "Network Error") {
      store.dispatch("validation/setErrors", {
        message: error.message,

        error: error.message
      });
    } else {
      if (error.response.status === 422) {
        console.log(error.response);
        store.dispatch("validation/setErrors", error.response.data);
      } else if (error.response.status === 401) {
        console.log(error.response);
        store.dispatch("validation/setErrors", error.response.data.error);
      } else if (error.response.status === 400) {
        store.dispatch("validation/setErrors", {
          message: error.response.data.message,
          username: error.response.data.username,
          password: error.response.data.password,
          error: error.response.data
        });
      } /* else if (error.response.status === 404) {
        store.dispatch("validation/setErrors", {
          message: error.response.data.message,
          error: error.response.data
        });
        return redirect("/error/404");
      } */ else {
        console.log(error.message);
      }
    }
    return Promise.reject(error);
  });
  $axios.onRequest(config => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    store.dispatch("validation/clearErrors");
  });
}
