<template>
  <div class="db-container">
    <div class="main-page"></div>
    <h1>Welcome to the dashboard</h1>
  </div>
</template>
<script>
export default {
  middleware: "guest",
  head() {
    return {
      title: "Dashboard",
      meta: [
        {
          hid: "Main page for Gamma Dental Scan Radiology",
          name: "Main page for Gamma Dental Scan Radiology",
          content: "Main page for Gamma Dental Scan Radiology"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
/*
.main-page {
  background: linear-gradient(10deg, rgb(54, 26, 81), rgb(169, 124, 212)) 0% 0%
      100% no-repeat -150px cover,
    rgb(169, 124, 212);
}

.main-page {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  max-width: 1368px;
  z-index: -1;
}
*/
.db-container {
  background: white;
  border: 1px whitesmoke solid;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 0;
  height: 78vh;
}
</style>
