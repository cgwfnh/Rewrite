/*************************************

项目名称：Goodnotes6
下载地址：https://t.cn/A6K6ZSZS
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/isi\..*\.g.*\.(com\..*|com)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/cgwfnh/Rewrite/main/goodnotes6.js
^https:\/\/isi\..*\.g.*\.(com\..*|com)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/cgwfnh/Rewrite/main/goodnotes6.js
^https:\/\/api*\.g.*\.(com\..*|com)\/accounts\/whoami\/?(.*?)*$ url script-response-body https://raw.githubusercontent.com/cgwfnh/Rewrite/main/goodnotes6.js

[mitm]
hostname = isi.*.g*.com*, api*.goodnotes.com

*************************************/


const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const namea = "apple_access";
const nameb = "crossplatform_access";
const jsid = "com.goodnotes.gn6_one_time_unlock_3999";
const maxfile = "freemium_max_documents_gnc";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  data = {
 "Author": "chxm1023",
 "Telegram": "https://t.me/chxm1023",
 "warning": "仅供学习，禁止转载或售卖",
 "purchase_date": "2024-09-09T09:09:09Z"
 };
  chxm1024.subscriber.subscriptions[jsid] = {
 "Author": "chxm1023",
 "Telegram": "https://t.me/chxm1023",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2024-09-09T09:09:09Z",
 "purchase_date": "2024-09-09T09:09:09Z",
 "store": "app_store",
 "ownership_type": "PURCHASED"
 };
  chxm1024.subscriber.entitlements[namea] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[nameb] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[namea].product_identifier = (jsid);
  chxm1024.subscriber.entitlements[nameb].product_identifier = (jsid);
} else if (chxm1024 && chxm1024.identity) {
  chxm1024.identity.metadata_public[maxfile] = JSON.parse(JSON.stringfy(65535));
}
chxm1023.body = JSON.stringify(chxm1024);
$done(chxm1023);
