<template>
  <div>
    <!-- 头部区域 -->
    <header>
      <div class="header-overlay"></div>
      <div class="server-icon"></div>
      <h1>服务器公告 - 秋岚服务器</h1>
      <p class="subtitle">这里可以添加副标题内容</p>
      <div class="minecraft-brand">Minecraft 1.21 Fabric</div>
    </header>
    <!-- 内容区域，可继续添加原有页面剩余内容 -->
    <div class="content">
      <!-- 此处添加公告内容 -->
    </div>
  </div>
</template>

<script setup>
// 可添加组件逻辑
</script>

<style scoped>
/* 引入原有样式 */
header {
  background: linear-gradient(90deg, #0d1525, #1a2a4a, #0d1525);
  padding: 40px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(45deg, rgba(76, 175, 80, 0.1) 0%, transparent 50%);
  opacity: 0.5;
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

.minecraft-brand {
  display: inline-block;
  background: linear-gradient(135deg, #4caf50, #3498db);
  color: #1a1f2d;
  padding: 8px 24px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 15px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
}
</style>