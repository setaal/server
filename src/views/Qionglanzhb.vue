<template>
  <div>
    <!-- 头部区域 -->
    <header>
      <div class="server-icon"></div>
      <h1>秋岚整合包下载</h1>
      <p class="subtitle">这里可以添加副标题内容</p>
    </header>
    <!-- 整合包区域 -->
    <div class="modpack-box">
      <!-- 此处添加整合包下载相关内容 -->
    </div>
  </div>
</template>

<script setup>
// 可添加组件逻辑
</script>

<style scoped>
/* 引入原有样式 */
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  background: rgba(20, 25, 40, 0.95);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  border: 2px solid rgba(76, 175, 80, 0.4);
  position: relative;
  z-index: 1;
  padding: 30px;
}

.navbar {
  background: linear-gradient(90deg, #0d1525, #1a2a4a, #0d1525);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #4caf50;
  border-radius: 12px 12px 0 0;
  margin: -30px -30px 30px -30px;
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

header {
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}

.server-icon {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #2c3e50, #4a235a);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #4caf50;
  box-shadow: 0 0 30px rgba(76, 175, 80, 0.7);
  position: relative;
  z-index: 2;
  overflow: hidden;
  animation: pulse 3s infinite;
}

.server-icon::before {
  content: "秋";
  font-size: 80px;
  font-weight: bold;
  color: #4caf50;
  text-shadow: 0 0 15px rgba(76, 175, 80, 0.8);
}

.server-icon::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: conic-gradient(
    transparent,
    rgba(76, 175, 80, 0.3),
    transparent
  );
  animation: rotate 6s linear infinite;
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 15px;
  color: #4caf50;
  text-shadow: 0 0 15px rgba(76, 175, 80, 0.6);
  position: relative;
  z-index: 2;
}

.subtitle {
  font-size: 1.4rem;
  color: #a0aec0;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.modpack-box {
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.2), rgba(52, 152, 219, 0.2));
  border: 2px solid #4caf50;
  border-radius: 12px;
  padding: 40px;
  margin: 30px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.modpack-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><rect width="20" height="20" fill="none" stroke="rgba(76,175,80,0.3)" stroke-width="1"/></svg>');
  opacity: 0.3;
}
</style>