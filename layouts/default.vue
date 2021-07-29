<template>
  <div class="layout-default">
    <v-header />
    <div class="layout-default-main">
      <Nuxt />
      <v-footer />
    </div>
    <VBackTop />
  </div>
</template>

<style scoped lang="less">
.layout-default{
  /*height: 100vh;*/
 /* &-main{
    height: calc(~"100% - 64px");
    overflow-y: auto;
  }*/
}

</style>
