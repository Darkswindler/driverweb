const express = require('express');
var request = require('request'); // 後端request 模組 記得npm install 
const app = express();

console.log('Server-side code running');

// 預設靜態生成資料夾 public 記得放你的 css 與 圖片 這樣才能在local:8080/public 找的到
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(process.env.PORT || 8080, () => {
  console.log('listening on 8080');
});
//用json的形式包裝防止走失
app.use(require("body-parser").json());

// serve the homepage 預設主頁面為 index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/driverlist.html');
});

// 後端接收前端  POST 的 接口  拿前端資料做壞事的地方!!!!
app.post('/clicked', (req, res) => {
  const click = {
    clickTime: new Date()
  };
  res.send(click);
});

// 後端進行資料處理 (向伺服器要資料) GET 接口
app.post('/driverData', (req, res) => {
  console.log(req.body);

  request.post("https://api-dev.bluenet-ride.com/v2_0/passenger/order/request/detail", {
      headers: {
        'Content-Type': ' application/json'
      },
      //後端不能處理前端的變數
      json: req.body
    },
    (error, response, body) => {
      console.log("driverData-response-statusCode", response.statusCode);
      if (error) {
        console.log('Error while sending message' + error);
        return;
      }
      if (response.statusCode !== 200) {
        console.log('Error status code while sending message' + body.errMsgs);
        return;
      }
      console.log('Send registerPost succeeded');
      res.send(body);
    })

});

app.get('/driverList', (req, res) => {

  request.post("https://api-dev.bluenet-ride.com/v2_0/driver/hero/list", {
      headers: {
        'Content-Type': ' application/json'
      },
      json: {
        "guestKey": "",
        "accessKey": "22295671-29eb-40f8-9c50-f8f72529f057",
        "userID": "948FFA45935D56E2409A886B4C5618DC79B81CA3",
        "lastDriverID": "",
        "limit": "20"
      }
    },
    (error, response, body) => {
      console.log("driverData-response-statusCode", response.statusCode);
      if (error) {
        console.log('Error while sending message' + error);
        return;
      }
      if (response.statusCode !== 200) {
        console.log('Error status code while sending message' + body.errMsgs);
        return;
      }
      console.log('Send registerPost succeeded');
      res.send(body);
    })

});