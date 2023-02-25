var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".main-content");

$(".login-section .item h6 .fa-angle-up").hide();

menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

if($(window).width() <= 578){
  $(".main-content").removeClass("active-cont");
  $("#sidebar").removeClass("active-nav");

  $("#chart").width($(window).width()-40);
  $("#ring_chart").width($(window).width()-40);
}else{
  $(".main-content").addClass("active-cont");
  $("#sidebar").addClass("active-nav");

  $("#chart").width($(".main-content").width()/3-80);
  $("#ring_chart").width($(".main-content").width()/3-80);
}


$(".notification-section .item").on('click',function() {
  $(".login-section .item ul").css("display", "none");
  $(".notification-section .item ul").toggle();

  //$(this).find('ul').toggle();
});


$(".login-section .item").on('click',function() {
  $(".login-section .item ul").toggle();
  $(".notification-section .item ul").css("display", "none");

  $(".login-section .item h6 .arrow").toggleClass("active");

  //$(this).find('ul').toggle();
});


console.log()


//Echart smooth

var dom = document.getElementById("chart");
var myChart = echarts.init(dom);
var app = {};
//option = null;

option = {
    responsive: true,
    aspectRatio:4,
    title: {
       
    },
    
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {},
    series: [
      {
        data: [10456, 45522, 28455, 45523, 4519,14549],
        type: 'line',
        areaStyle: {
          color: '#B5B3FB'  
        },
        smooth: true
      },
      {
        data: [25455, 14455, 23455, 34545, 14540,54546],
        type: 'line',
        smooth: true,
        areaStyle: {
          color: '#B0EAFF',
          opacity: 0.5
        }
      }
    ]
  };

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


//Ring Chart

var dom_ring = document.getElementById("ring_chart");
var ringChart = echarts.init(dom_ring);
var app = {};
//option = null;

option = {
    title: {
      text: 'Sales',
      left: 'center',
      top: 'center'
    },
    legend: {
      // Try 'horizontal'
      orient: 'horizontal',
      left: 'center',
      top: 'bottom'
    },
    series: [
      {
        type: 'pie',
        data: [
          { value: 335, name: 'France' },
          { value: 234, name: 'Italy' },
          { value: 1548, name: 'Japan' },
          { value: 1233, name: 'Canada' }
        ],
        radius: ['40%', '70%']
      }
    ]
};

if (option && typeof option === "object") {
    ringChart.setOption(option, true);
}
