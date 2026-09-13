<script setup lang="ts">
import { Icon } from '@iconify/vue';

useHead({
  title: 'ubean App',
  meta: [{ name: 'description', content: 'ubean 应用模板' }]
});
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>🌱 ubean App</h1>
      <Icon icon="lucide:sprout" />
      <p class="subtitle">基于 ubean 的全栈应用模板</p>
    </section>

    <section class="test-grid">
      <div class="test-card">
        <h3>📄 页面路由</h3>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于页面</Link></li>
          <li><Link to="/dashboard">控制台(admin 布局)</Link></li>
          <li><Link to="/islands-test">Islands 架构</Link></li>
        </ul>
      </div>

      <div class="test-card">
        <h3>🔌 API 路由</h3>
        <ul>
          <li><a href="/api/hello" target="_blank">GET /api/hello</a></li>
          <li><a href="/api/users" target="_blank">GET /api/users</a></li>
          <li><a href="/api/users/1" target="_blank">GET /api/users/[id]</a></li>
        </ul>
      </div>

      <div class="test-card">
        <h3>📝 文件路由</h3>
        <ul>
          <li><Link to="/blog/hello">Catch-all 路由 /blog/hello</Link></li>
        </ul>
      </div>

      <div class="test-card">
        <h3>🌍 i18n 国际化</h3>
        <ul>
          <li>English</li>
          <li>简体中文</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 860px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 2.5rem 0;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.hero svg {
  width: 2rem;
  height: 2rem;
}

.subtitle {
  color: gray;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  padding-bottom: 2rem;
}

.test-card {
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: 12px;
  padding: 1.1rem 1.2rem;
}

.test-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
}

.test-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-size: 0.9rem;
}

.test-card a {
  color: #42b883;
  text-decoration: none;
}

.test-card a:hover {
  text-decoration: underline;
}
</style>
