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
  const response = JSON.parse($response.body);
  //console.log(JSON.stringify(response));
  // 修改isVip
  function modifyVip(obj) {
    response.replace(/isVip:\w/g, 'isVip:true');
    }
  }
  
  modifyVip(response); // 执行修改
  //console.log(JSON.stringify(response));
  $done({ body: JSON.stringify(response) }); // 返回修改后的响应
})();
