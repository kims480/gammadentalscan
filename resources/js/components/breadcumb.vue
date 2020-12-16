<template>
  <div>
    <div class="breadcrumb">
      <slot name="header">
        <h3>
          <i class="i-Folder"></i> {{ section }}
          <i class="i-Arrow-Right-2"></i>
        </h3>

        <h3>{{ page }}</h3>
        <ul>
          <li>
            <h5>
              <nuxt-link to=""> {{ folder }}</nuxt-link>
            </h5>
          </li>
          <li>
            <h5><i :class="icon"></i>{{ page }}</h5>
          </li>
        </ul>
      </slot>
    </div>
    <div class="separator-breadcrumb border-top"></div>
  </div>
</template>
<script>
export default {
  props: ["section", "page", "folder", "icon"]
};
</script>
