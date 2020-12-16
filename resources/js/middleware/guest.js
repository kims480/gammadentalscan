import { parseJSON } from "jquery";

export default function({ store, route, redirect, $auth }) {
  // console.log("iam guest middleware");
  //console.log("LoggedIn" + store.state);
  //console.log(store.state);
  // console.log(store.getters["users/loggedIn"]);
  /* if (!store.getters["users/loggedIn"]) {
    return redirect("/auth/login");
  } */
  /*   let userRoles = store.state.auth.user.role.role;
  // let roles = JSON.parse(store.state.auth.user.role).role;
  console.log(
    roles.filter(role => {
      return role == "super_admin";
    })
  );
  if (
    UserRoles.filter(role => {
      return role == "super_admin";
    }).length == 0
  ) */
  if ($auth.loggedIn) {
    // return route.push("/");
    // console.log($auth.user);
    //console.log($auth.hasScope("admin"));
    return redirect("/");
    //console.log("Iam not admin");
  } else{
    console.log('not loggedIn')
  }
}
