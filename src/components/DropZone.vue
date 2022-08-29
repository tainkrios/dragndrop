<template>
  <div
    class="w-96 h-48 flex flex-col justify-center items-center gap-4 border-primary bg-white transition-all duration-300 dropzone"
    @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="toggleActive"
    :class="{'active-dropzone' : active}">
    <span>Drag or Drop File</span>
    <span>OR</span>
    <label class="px-2 py-3 text-white bg-primary transition-all duration-300 squircle" for="dropzone">Select File</label>
    <input class="hidden dropzoneFile" type="file" id="dropzone">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref(false)

const toggleActive = () => {
  active.value = !active.value
}
</script>

<style scoped>



.dropzone {

  background: paint(squircle);
  --squircle-fill: #fff;
  --squircle-radius: 80px;
  --squircle-smooth: 1;
}
.active-dropzone {
  color: #fff;
  background: paint(squircle);
  --squircle-fill: #41b883;
}

.active-dropzone label {
  background-color: #fff;
  color: #41b883;
}

.squircle {
    mask: paint(squircle);
  }
</style>