<template>
  <div>
    {{ $route.params }}
  </div>
</template>

<script>
export default {
  middleware: "doctor",
  layout: "doctor"
};
</script>

<style lang="scss" scoped></style>
