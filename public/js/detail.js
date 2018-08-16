new Vue({
  el: '#driverinformation-1',
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
      .get('/driverList')
      .then(data => {
        this.infodata.data.results = data.data.results
        console.log(data);
      })
  },
  methods: {
    go: (driverID) => {
      // window.location.href = ("https://driverweb.herokuapp.com/" + "?id=" +driverID);
      window.location.href = ("http://localhost:8080/html/driverweb.html" + "?id=" + driverID);
    }
  }
});
new Vue({
  el: '#driverinformation-rwd',
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
      .get('/driverList')
      .then(data => {
        this.infodata.data.results = data.data.results1
        console.log(data);
      })
  },
  methods: {
    go: (driverID) => {
      // window.location.href = ("https://driverweb.herokuapp.com/" + "?id=" +driverID);
      window.location.href = ("http://localhost:8080/html/driverweb.html" + "?id=" + driverID);
    }
  }
});

function menuwidth(x) {
  if (x.matches) { // If media query matches
    $('#menu').attr('class', 'd-flex no-gutters');
  } else {
    $('#menu').attr('class', 'd-flex justify-content-around no-gutters');
  }
}

var x = window.matchMedia("(max-width: 576px)")
menuwidth(x) // Call listener function at run time
x.addListener(menuwidth) // Attach listener function on state changes

function sticker(y) {
  if (y.matches) { // If media query matches
    $('#sticker1').attr('class', 'col-12 num carousel-item active');
    $('#sticker2').attr('class', 'col-12 num carousel-item');
    $('#sticker3').attr('class', 'col-12 num carousel-item');
    $('#sticker4').attr('class', 'col-12 num carousel-item');
    $('#driverinformation-1').attr('class', 'justify-content-start no-gutters');
  } else {
    $('#sticker1').attr('class', 'col-3 num');
    $('#sticker2').attr('class', 'col-3 num');
    $('#sticker3').attr('class', 'col-3 num');
    $('#sticker4').attr('class', 'col-3 num');
    $('#driverinformation-1').attr('class', 'd-flex justify-content-start no-gutters');
  }
}
var y = window.matchMedia("(max-width: 746px)")
sticker(y) // Call listener function at run time
y.addListener(sticker) // Attach listener function on state changes
$(function () {
  $('#bell').click(function () {
    alert("請先登入再查看")
  });
});
$(function () {
  $('#pagetop-button').click(function () {
    if ($(window).width() < 3000) {
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: 0
      }, 600);
    }
    return false;
  });
});
$(function () {
  $("#carouselControl").swipe({
    swipeStatus: swipe,
    allowPageScroll: "auto"
  });

  function swipe(event, phase, direction, distance) {
    if (direction == 'left') {
      document.getElementById('gesture-left').click();
    } else if (direction == 'right') {
      document.getElementById('gesture-right').click();
    }
  }
});
$(function () {
  $("#carouselExampleControls1").swipe({
    swipeStatus: swipe,
    allowPageScroll: "auto"
  });

  function swipe(event, phase, direction, distance) {
    if (direction == 'left') {
      document.getElementById('carousel-button2').click();
    } else if (direction == 'right') {
      document.getElementById('carousel-button1').click();
    }
  }
});