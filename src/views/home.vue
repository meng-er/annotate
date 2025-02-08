<script setup lang="ts">
import { ref, onMounted } from "vue";

// defineProps<{ msg: string }>();
const uploadDom = ref();

const pdf2base64 = () => {
  uploadDom.value?.addEventListener("change", function (event: any) {
    // console.log(event);
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64String = e.target?.result;
        // document.getElementById("base64Output").textContent = base64String;
        console.log(base64String); // 输出到控制台
      };
      reader.readAsDataURL(file); // 读取文件并转换为 Base64
    }
  });
};
onMounted(() => {
  pdf2base64();
});
</script>

<template>
  <input type="file" accept=".pdf" ref="uploadDom" />
  <div id="base64Output"></div>
</template>

<style lang="scss" scoped></style>
