/*************************************

项目名称：vidhub
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/cgwfnh/Rewrite/main/vidhub.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/

var response = JSON.parse($response.body);

if (response.data && response.data.hasOwnProperty("IsOneTimePayment")) {
  response.data["IsOneTimePayment"] = true; // 修改支付状态
}

$done({ body: JSON.stringify(response) });
