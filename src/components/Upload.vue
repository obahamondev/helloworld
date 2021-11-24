<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone"
  >
    <span class="dnd">Drag and Drop File</span>
    <span>OR</span>
    <label for="dropzoneFile">Select File</label>
    <input type="file" id="dropzoneFile" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.dropzone {
  color: #0ff;
  width: 36rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 7px dashed #0ff;
  font-weight: bold;
  background-color: #322;
  transition: 0.3s ease all;
  vertical-align: middle;
  margin-top: 6rem;
  width: 82%;
  margin-left: auto;
  border-radius: 25px;
}
label {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 16px;
  border: 3px solid #007fff;
  background-color: #0ff;
  color: white !important;
  transition: 0.3s ease all;
  cursor: pointer;
}
label:hover {
  color: #0ff;
  border: 3px solid #0ff;
  background-color: #007fff;
  transform: scale(1.25);
  transition: 0.3s ease all;
}
input {
  display: None;
}
.dnd:hover {
  color: #0ff;
  transform: scale(1.25);
  cursor: pointer;
}
.active-dropzone {
  color: #0ff;
  border-color: #0ff;
  background-color: #007fff;
}
label {
  background-color: #777;
  color: #007fff;
}
.column {
  display: border-box !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
