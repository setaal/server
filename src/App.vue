<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="logo">
        <div class="logo-icon"></div>
        <div class="logo-text">秋岚服务器</div>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/gonggao" class="nav-link">服务器公告</router-link>
        <router-link to="/qionglanzhb" class="nav-link">秋岚整合包下载</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
/* 这里可以添加全局样式，也可以引入原有CSS */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

body {
  background: linear-gradient(135deg, #0c1a2a, #1a2a40, #0d1525);
  color: #e0e0e0;
  min-height: 100vh;
  padding: 0;
  position: relative;
  overflow-x: hidden;
  background-image:
    radial-gradient(circle at 10% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 15%),
    radial-gradient(circle at 90% 80%, rgba(52, 152, 219, 0.05) 0%, transparent 15%);
}

.navbar {
  background: linear-gradient(90deg, #0d1525, #1a2a4a, #0d1525);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #4caf50;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2c3e50, #4a235a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #4caf50;
  box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
}

.logo-icon::before {
  content: "秋";
  font-size: 30px;
  font-weight: bold;
  color: #4caf50;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #4caf50;
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.6);
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 8px 15px;
  border-radius: 30px;
  transition: all 0.3s;
}

.nav-links a:hover {
  color: #4caf50;
  background: rgba(76, 175, 80, 0.1);
}

.nav-links a.active {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}
</style>