<script setup lang="ts">
import { ref, type Ref } from 'vue'

interface MenuItem {
  id: string
  title: string
  subMenuItems?: MenuItem[]
}

// 目录
const menuItems = ref<Array<MenuItem>>([
  { id: 'introduction', title: '1. 引言' },
  {
    id: 'overview',
    title: '2. 软件概述',
    subMenuItems: [
      { id: 'intro', title: '2.1 软件简介' },
      { id: 'requirements', title: '2.2 系统需求' },
      { id: 'architecture', title: '2.3 软件架构' }
    ]
  },
  { id: 'features', title: '3. 功能说明' },
  { id: 'troubleshooting', title: '4. 故障排除' },
  { id: 'appendix', title: '5. 附录' }
])

// 选中的section
const activeMenu = ref('introduction')

// 为每个内容区域创建ref
// 1. 引言
const introduction = ref<HTMLElement | null>(null)
// 2. 软件概述
const overview = ref<HTMLElement | null>(null)
// 2.1 软件简介
const intro = ref<HTMLElement | null>(null)
// 2.2 系统需求
const requirements = ref<HTMLElement | null>(null)
// 2. 3 软件架构
const architecture = ref<HTMLElement | null>(null)
// 3. 功能说明
const features = ref<HTMLElement | null>(null)
// 4. 故障排查
const troubleshooting = ref<HTMLElement | null>(null)
// 5. 附录
const appendix = ref<HTMLElement | null>(null)

const sectionRefsMap = new Map<string, Ref<HTMLElement | null>>([
  ['introduction', introduction],
  ['overview', overview],
  ['intro', intro],
  ['requirements', requirements],
  ['architecture', architecture],
  ['features', features],
  ['troubleshooting', troubleshooting],
  ['appendix', appendix]
])

// 滚动到指定区域
const scrollTo = (id: string) => {
  console.log('id: ', id)
  const element = sectionRefsMap.get(id)?.value
  if (element) {
    activeMenu.value = id
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 监听滚动事件，更新当前激活的菜单项
// 这个滚动需要优化的
// const handleScroll = () => {
//   const scrollPosition = window.scrollY + 100
//   // 遍历Map
//   for (const [id, ref] of sectionRefsMap) {
//     const element = ref.value
//     if (element) {
//       const offsetTop = element.offsetTop
//       const height = element.offsetHeight

//       if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
//         activeMenu.value = id
//         console.log('activateMenu: ', activeMenu.value)
//         break
//       }
//     }
//   }
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll)
// })
</script>

<template>
  <div class="container">
    <!-- 左侧目录 -->
    <div class="sidebar">
      <h2>文档目录</h2>
      <div v-for="(item, index) in menuItems" :key="index" class="menu-item">
        <div
          :class="['menu-item-title', { active: activeMenu === item.id }]"
          @click="scrollTo(item.id)"
        >
          {{ item.title }}
        </div>

        <div v-if="item.subMenuItems" class="sub-menu">
          <div v-for="(subItem, subIndex) in item.subMenuItems" :key="'sub-' + subIndex">
            <div
              :class="['menu-item-title', { active: activeMenu === subItem.id }]"
              @click.stop="scrollTo(subItem.id)"
            >
              {{ subItem.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧内容 -->
    <div class="content">
      <section id="introduction" ref="introduction" class="section">
        <h2>1. 引言</h2>
        <p>
          物资管理系统是一种用于帮助企业或组织有效管理其物资资源的软件系统。它通过数字化的方式对物资的采购、存储、分配、使用和报废等全生命周期进行跟踪和管理
          。
        </p>
      </section>

      <section id="overview" ref="overview" class="section">
        <h2>2. 软件概述</h2>
        <p>本节将介绍软件的基本信息，包括软件简介、系统需求和软件架构。</p>

        <h3 id="intro" ref="intro">2.1 软件简介</h3>
        <p>物资管理系统是一种数字化管理仓库的系统。</p>
        <p>
          物资管理系统包括首页概览、收获&打印、物料管理、库位管理、RFID管理、智能终端管理、库存管理、院内作业、盘点管理、养护管理和需求管理等模块。
        </p>

        <h3 id="requirements" ref="requirements">2.2 系统需求</h3>
        <p>物资管理系统可以在以下环境中运行：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- window10或者更高版本</p>

        <h3 id="architecture" ref="architecture">2.3 软件架构</h3>
        <p>物资管理系统是一款桌面应用，架构主要包括：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- .NET桌面软件</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- ASP .NET Core提供后端接口</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- MYSQL作为后端数据库</p>
      </section>

      <section id="features" ref="features" class="section">
        <h2>3. 功能说明</h2>
        <p>系统由多个功能模块组成，本节将仔细介绍系统的各个模块。</p>
        <h3>3.1 概况</h3>
        <img src="@/images/lena.bmp" alt="文件缺失" width="300" height="300" />
        <h3>3.2 收货&打印</h3>
        <h3>3.3 物料管理</h3>
        <h3>3.4 库位管理</h3>
        <h3>3.5 RFID管理</h3>
        <h3>3.6 智能终端管理</h3>
        <h3>3.7 库存管理</h3>
        <h3>3.8 院内作业</h3>
        <h3>3.9 盘点管理</h3>
        <h3>3.10 养护管理</h3>
        <h3>3. 11 需求管理</h3>
        <h3>3. 12退出系统</h3>
      </section>

      <section id="troubleshooting" ref="troubleshooting" class="section">
        <h2>4. 故障排除</h2>
        <p>在使用物资管理系统过程中，可能会遇到一些常见问题：</p>
      </section>

      <section id="appendix" ref="appendix" class="section">
        <h2>5. 附录</h2>
        <p>附录部分包含一些环境配置信息：</p>
        <h3>5.1 .NET8.0环境下载</h3>
        <p>
          <a
            href="https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-aspnetcore-8.0.20-windows-hosting-bundle-installer"
            target="_blank"
            >&nbsp;&nbsp;&nbsp;&nbsp;- ASP .NET Core运行时</a
          >
        </p>
        <p>
          <a
            href="https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.20-windows-x64-installer"
            target="_blank"
            >&nbsp;&nbsp;&nbsp;&nbsp;- .NET 桌面运行时</a
          >
        </p>
        <p>
          <a
            href="https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-8.0.20-windows-x64-installer"
            target="_blank"
            >&nbsp;&nbsp;&nbsp;&nbsp;- .NET 运行时</a
          >
        </p>
        <h3>5.2 COM口连接环境下载</h3>
        <p>
          <a href="https://www.hioki.cn/home/support/softfiledown/dowlaodid/96.html" target="_blank"
            >&nbsp;&nbsp;&nbsp;&nbsp;- USB驱动程序</a
          >
        </p>
        <h3>5.3 斑马打印机环境下载</h3>
        <p>
          <a
            href="http://www.zebraservice.cn/resource/softs/zd105127605-certified.exe"
            target="_blank"
            >&nbsp;&nbsp;&nbsp;&nbsp;- Windows 打印机驱动程序v10</a
          >
        </p>
        <p>
          <a
            href="https://www.zebra.cn/cn/zh/support-downloads/mp-resource/content/servlet/supportdownload/downloadManager?dlp=/content/dam/support-dam/en/driver/unrestricted/0002/zsu-1191326.exe&c=cn&l=zh&pagePath=/content/zebra1/cn/zh/support-downloads/software/printer-software/printer-setup-utilities"
            target="_blank"
            >&nbsp;&nbsp;&nbsp;&nbsp;- 打印机设置实用工具Zebra Setup Utilities</a
          >
        </p>
      </section>
    </div>
  </div>

  <div class="back-to-top" @click="scrollToTop">↑</div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

a {
  text-decoration: none;
  &:hover {
    color: blue;
  }
}

.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 30px;
}

.sidebar {
  flex: 0 0 280px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 20px;

  h2 {
    color: #2c3e50;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 2px solid #eaeaea;
  }
}

.menu-item {
  margin: 6px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  .menu-item-title {
    padding: 10px 15px;
    margin: 6px 0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f5ff;
      color: #3498db;
    }

    &.active {
      background-color: #3498db;
      color: white;
      font-weight: 500;
    }
  }
  .sub-menu {
    margin: 0 0 0 30px;
  }
}

.content {
  flex: 1;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 30px;
}

.section {
  margin-bottom: 40px;
  scroll-margin-top: 20px;

  h2 {
    color: #2c3e50;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 2px solid #3498db;
  }

  h3 {
    color: #3498db;
    margin: 20px 0 15px;
  }

  h4 {
    color: #5d6d7e;
    margin: 18px 0 12px;
  }

  p {
    margin-bottom: 15px;
    color: #555;
  }
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #3498db;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #2980b9;
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    position: relative;
    top: 0;
    width: 100%;
  }
}
</style>
