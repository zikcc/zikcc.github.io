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



  /**
 * 今日诗词V2 JS-SDK 1.2.2
 * 今日诗词API 是一个可以免费调用的诗词接口：https://www.jinrishici.com
 */
!function(e){var n,t={},o="jinrishici-token";function i(){return document.getElementById("jinrishici-sentence")||0!=document.getElementsByClassName("jinrishici-sentence").length}function c(){t.load(function(e){var n=document.getElementById("jinrishici-sentence"),t=document.getElementsByClassName("jinrishici-sentence");if(n&&(n.innerText=e.data.content),0!==t.length)for(var o=0;o<t.length;o++)t[o].innerText=e.data.content})}function r(e,n){var t=new XMLHttpRequest;t.open("get",n),t.withCredentials=!0,t.send(),t.onreadystatechange=function(n){if(4===t.readyState){var o=JSON.parse(t.responseText);"success"===o.status?e(o):console.error("今日诗词API加载失败，错误原因："+o.errMessage)}}}t.load=function(n){return e.localStorage&&e.localStorage.getItem(o)?function(e,n){return r(e,"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token="+encodeURIComponent(n))}(n,e.localStorage.getItem(o)):function(n){return r(function(t){e.localStorage.setItem(o,t.token),n(t)},"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")}(n)},e.jinrishici=t,i()?c():(n=function(){i()&&c()},"loading"!=document.readyState?n():document.addEventListener?document.addEventListener("DOMContentLoaded",n):document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&n()}))}(window);