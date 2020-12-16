<template>
    <div class="breadcrumb">
        <slot name="header">
            <h1 class="mr-2">{{ mainSection }}</h1>

            <template v-if="MainPage == null"> </template>
            <template v-else>
                <ul>
                    <li><router-link to=""> {{ MainPage }}</router-link></li>
                    <li v-if="!SubPage == null">{{ SubPage }}</li>
                </ul>
            </template>
        </slot>
    </div>
        <!-- <div class="breadcrumb">
            <slot name="header">
                <h5><i class="i-Folder"></i> {{ mainSection }}</h5>

                <template v-if="MainPage == null"> </template>
                <template v-else>
                    <ul>
                        <li>
                            <h5>
                                <i class="i-Arrow-Right-2"></i>
                                <router-link to=""> {{ MainPage }}</router-link>
                            </h5>
                        </li>
                        <li v-if="!SubPage == null">
                            <h5>{{ SubPage }}</h5>
                        </li>
                    </ul>
                </template>
            </slot>
        </div>
        <div class="separator-breadcrumb border-top"></div>
 -->
</template>
<script>
export default {
    props: ["mainSection", "MainPage", "SubPage"]
};
</script>
