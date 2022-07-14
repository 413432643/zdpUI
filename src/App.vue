<template>
  <div>
    <z-button @click="Message({message:'message'})">message</z-button>
    <z-button @click="Message({type:'success',message:'success'})">success</z-button>
    <z-button @click="Message({type:'warning',message:'warning'})">warning</z-button>
    <z-button @click="Message({type:'error',message:'error'})">error</z-button>
  </div>
</template>

<script setup lang="ts">
import zButton from "../components/button/index.vue";
import Message from "../components/message/index.js";

</script>
 
<style lang="scss" scoped></style>
