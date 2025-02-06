<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>抱歉，您访问的页面不存在</p>
      <button @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = (): any => {
  router.push("/");
};
</script>

<style scoped lang="scss">
.not-found {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;

  .content {
    text-align: center;
    padding: 2rem;

    h1 {
      font-size: 8rem;
      font-weight: bold;
      color: #343a40;
      margin: 0;
      line-height: 1;
    }

    h2 {
      font-size: 2rem;
      color: #495057;
      margin: 1rem 0;
    }

    p {
      color: #6c757d;
      margin-bottom: 2rem;
    }

    button {
      padding: 0.8rem 2rem;
      font-size: 1rem;
      color: white;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}
</style>
