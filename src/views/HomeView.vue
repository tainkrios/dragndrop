<script setup lang="ts">
import { ref } from "vue";
import DropZone from "../components/DropZone.vue";

let dropzoneFile = ref('')

const drop = (e: { dataTransfer: { files: string[]; }; }) => {
  dropzoneFile.value = e.dataTransfer.files[0]
}

const selectedFile = () => {
  dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
}
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center bg-gray-200">
    <h1 class="text-4xl mb-8">Drop Zone</h1>
    <DropZone @drop.prevent="drop" @change="selectedFile" />
    <span class="mt-8">File: {{ dropzoneFile.name }}</span>
  </div>
</template>
