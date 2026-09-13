<script setup lang="ts">
useHead({
  title: '控制台'
});
</script>

<template>
  <div class="dashboard-page">
    <h1>控制台首页</h1>
    <p>
      使用 admin 布局的页面示例 -
      <code>/dashboard</code>
      (见
      <code>src/layouts/admin.vue</code>
      )
    </p>
    <Link to="/">← 返回首页</Link>
  </div>
</template>
