<template>
  <div>
{{ $route.params }}
{{ $route.query }}

  </div>
</template>

<script>
export default {
  layout: "doctor",
  middleware: "doctor"
};
</script>

<style lang="scss" scoped>
</style>
