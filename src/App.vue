<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
  id: string
  title: string
  content: string[]
}

const selectedItem = ref<string>('kspd-app')

const menuItems: MenuItem[] = [
  {
    id: 'kspd-app',
    title: 'KSPD APP 使用说明',
    content: [
      '1. 登录1234',
      '• 打开KSPD APP',
      '• 输入用户名和密码',
      '• 点击登录按钮',
      '• 验证身份信息',
      '',
      '2. 配置网络',
      '• 进入设置页面',
      '• 选择网络配置',
      '• 输入服务器地址',
      '• 设置端口号',
      '• 测试连接',
      '',
      '3. 数据同步',
      '• 确保网络连接正常',
      '• 点击同步按钮',
      '• 等待数据传输完成',
      '• 检查同步状态'
    ]
  },
  {
    id: 'kspd-pc',
    title: 'KSPD PC软件说明',
    content: [
      '1. 登录4321',
      '• 启动KSPD PC软件',
      '• 在登录界面输入账号密码',
      '• 选择服务器地址',
      '• 点击登录进入系统',
      '',
      '2. 配置网络',
      '• 打开系统设置',
      '• 进入网络配置模块',
      '• 配置IP地址和端口',
      '• 设置代理服务器（如需要）',
      '• 保存配置并重启软件',
      '',
      '3. 系统管理',
      '• 用户权限管理',
      '• 数据备份与恢复',
      '• 系统日志查看',
      '• 性能监控设置'
    ]
  }
]

const selectItem = (itemId: string) => {
  selectedItem.value = itemId
}

const getCurrentItem = () => {
  return menuItems.find(item => item.id === selectedItem.value) || menuItems[0]
}
</script>

<template>
  <div class="app-container">
    <header class="header">
      <h1>医智储产品说明书</h1>
    </header>
    
    <div class="main-content">
      <!-- 左侧产品列表目录 -->
      <aside class="sidebar">
        <h2>产品目录</h2>
        <ul class="menu-list">
          <li 
            v-for="item in menuItems" 
            :key="item.id"
            :class="{ active: selectedItem === item.id }"
            @click="selectItem(item.id)"
            class="menu-item"
          >
            {{ item.title }}
          </li>
        </ul>
      </aside>
      
      <!-- 右侧内容显示区域 -->
      <main class="content">
        <div class="content-header">
          <h2>{{ getCurrentItem().title }}</h2>
        </div>
        <div class="content-body">
          <div 
            v-for="(line, index) in getCurrentItem().content" 
            :key="index"
            class="content-line"
          >
            {{ line }}
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.main-content {
  display: flex;
  min-height: calc(100vh - 80px);
}

.sidebar {
  width: 300px;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  padding: 2rem 0;
  box-shadow: 2px 0 4px rgba(0,0,0,0.05);
}

.sidebar h2 {
  margin: 0 0 1.5rem 0;
  padding: 0 2rem;
  color: #34495e;
  font-size: 1.2rem;
  font-weight: 600;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  color: #555;
  font-weight: 500;
}

.menu-item:hover {
  background-color: #f8f9fa;
  color: #2c3e50;
}

.menu-item.active {
  background-color: #e3f2fd;
  color: #1976d2;
  border-left-color: #1976d2;
}

.content {
  flex: 1;
  background-color: white;
  margin: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.content-header {
  background-color: #1976d2;
  color: white;
  padding: 1.5rem 2rem;
}

.content-header h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.content-body {
  padding: 2rem;
  line-height: 1.8;
}

.content-line {
  margin-bottom: 0.25rem;
  color: #333;
}

.content-line:empty {
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .content {
    margin: 1rem;
  }
}
</style>
