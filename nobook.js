/*
 * NB实验室
 * 解锁会员
 * 
[rewrite_local]
^https?:\/\/www\.nobook\.com\/passport\/v5\/login\/(check|phone) url script-response-body https://raw.githubusercontent.com/cgwfnh/Rewrite/main/nobook.js
^https?:\/\/storage\-backend\.nobook\.com\/passport\/v5\/login\/(check|phone) url script-response-body https://raw.githubusercontent.com/cgwfnh/Rewrite/main/nobook.js
[mitm]
hostname = www.nobook.com, storage-backend.nobook.com
*/

// 核心功能：修改响应JSON，解锁会员
(() => {
  const response = JSON.parse($response.body);
  console.log(JSON.stringify(response));
  // 递归遍历对象，修改会员相关字段
  function modifyFields(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        modifyFields(obj[key]); // 递归处理嵌套对象
      } else {
        // 匹配关键字段并修改
        switch (key) {
          case 'isVip':
          case 'vipStatus':
          case 'expireTime':
          case 'vip':
          case 'vip_endtime':
            obj[key] = 1; // 设置为激活状态
            break;
          case 'validity':
          case 'school_vip_endtime':
            obj[key] = 9999999999999; // 设置超长有效期
            break;
          case 'phone_check':
          case 'role':
            obj[key] = 0;     // 使用vip药品时，不检查登录状态。
            break;
        }
      }
    }
  }
  
  modifyFields(response); // 执行修改
  console.log(JSON.stringify(response));
  $done({ body: JSON.stringify(response) }); // 返回修改后的响应
})();
