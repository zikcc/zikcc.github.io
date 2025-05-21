// function updateImageSrc() {
//     var imgElement = document.getElementById('post-top-bg');
//     if (imgElement) {
//         imgElement.src = 'https://zikcc.oss-cn-beijing.aliyuncs.com/img/transparent.png'; // 替换为新的图片 URL
//     } else {
//         console.warn('当前页面没有 ID 为 "post-top-bg" 的 <img> 元素');
//     }
// }

// // 页面加载完成后执行一次
// document.addEventListener('DOMContentLoaded', updateImageSrc);

// $(document).on('pjax:success', function(event) {
//     // 在页面加载完成后更新图片
//     updateImageSrc();
// });
// // 监听路径变化
// window.addEventListener('hashchange', updateImageSrc);
// window.addEventListener('popstate', updateImageSrc);



// ==================== 图片加载监听模块 ====================
class ResourceLoader {
    constructor() {
      this.swiperLoaded = false;
      this.initListeners();
    }
  
    // 初始化全局事件监听
    initListeners() {
      // 统一事件触发入口
      const loadEvents = ['DOMContentLoaded', 'pjax:success', 'hashchange', 'popstate'];
      loadEvents.forEach(event => {
        document.addEventListener(event, () => this.handlePageUpdate());
      });
    }
  
    // 页面更新处理
    handlePageUpdate() {
      this.updateImage();
    }
  
    // 图片更新逻辑
    updateImage() {
      const imgElement = document.getElementById('post-top-bg');
      if (!imgElement) {
        console.warn('未找到 #post-top-bg 元素');
        return;
      }
      
      // 使用 WebP 格式优化加载
      imgElement.src = 'https://zikcc.oss-cn-beijing.aliyuncs.com/img/transparent.webp';
      
      // 添加加载失败回退
    //   imgElement.onerror = () => {
    //     imgElement.src = '/local-fallback.png';
    //   }
    }
  
    
  }
  
  // 启动加载器
  new ResourceLoader();