/*
 * NB实验室
 * 解锁会员
 * 
[rewrite_local]
^https?:\/\/app-v3(-qn)?\.nobook\.com\/app-resource\/.*\/.*\/4759.js url script-response-body https://raw.githubusercontent.com/cgwfnh/Rewrite/main/nb4759.js
[mitm]
hostname = *.nobook.com
*/

// 核心功能：修改响应JSON，解锁会员
(() => {
  function modify(response) {
  if (typeof response === 'string') {
      return response.replace(/isVip:\w/gi, 'isVip:true');
  }
  return response;
}

$done({ body: modify($response.body) }); // 返回修改后的响应
})();
