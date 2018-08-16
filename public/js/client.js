//分割字串才不會報錯
var search = window.location.search.split("=");
var driverID = search[1];
//前端資料有變數要在前端做
var fbody = {

  guestKey: "",
  accessKey: "22295671-29eb-40f8-9c50-f8f72529f057",
  userID: "948FFA45935D56E2409A886B4C5618DC79B81CA3",
  orderID: "",
  driverID: driverID,
  limit: 100

}

console.log(fbody);


new Vue({
  el: '#app',
  data() {
    return {
      infodata: {
        data: {
          results: ""
        }
      }
    }
  },
  mounted() {
    axios
      .post('/driverData', fbody)
      .then(data => {
        this.infodata.data.results = data.data.results
        console.log(data);
        1
        this.infodata.data.results.extra = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "b", "c", "a", "b", "c", "a", "b"];
      })
  },
  filters: {
    fDate: (fdate) => {
      var date = new Date(fdate);
      var rightDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
      return rightDate;
    },
    fgender: (fgender) => {
      switch (fgender) {
        case 0:
          　return "未知/保密";
        case 1:
          　　return "男生";
        default:
          　return "女生";
      }
    },
    flan: (flang) => {
      switch (flang) {
        case 1:
          　return "中文";
        case 2:
          　　return "英文";
        case 3:
          　　return "台語";
        case 4:
          　return "日文";
        default:
          return "無"
      }
    }
  }
});
setTimeout(function () {
  $(function () {
    $('#bell').click(function () {
      alert("請先登入再查看")
    });
  });
  $(function () {
    $('#information-profilebtn').click(function () {
      if ($(window).width() < 1200) {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
          scrollTop: 700
        }, 600);
      }
      return false;
    });
  });
  $(function () {
    $('#information-servicebtn').click(function () {
      if ($(window).width() < 1200) {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
          scrollTop: 1000
        }, 600);
      }
      return false;
    });
  });
  $(() => {
    $('#pagetop-btn').click(function () {
      if ($(window).width() < 3000) {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
          scrollTop: 0
        }, 600);
      }
      return false;
    });
  });
}, 3000);