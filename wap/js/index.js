
window.addEventListener('orientationchange', function(event){
    if ( window.orientation == 180 || window.orientation==0 ) {
    }
    if( window.orientation == 90 || window.orientation == -90 ) {
        alert("Please check this page vertically");
    }
});


console.log($("#frame").width(),$("#frame").height())


//获取屏幕的宽度和高度
 width = $(window).width();
 height = $(window).height();


 $("#shade").css({
     "backgroundColor":"#000",
     "opacity":1
 })

 $(".iframe").attr({
   "width":width+"",
   "height":height+""
 })


//改变视频窗口大小
   $("#frame").height(height+ "");
   $("#frame").width(width+ "");
   console.log($("#frame").width(),$("#frame").height())




// 刷新页面
$(window).resize(function(event) {
    window.location.reload();               
});

//主页轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});




//点击宝箱
$('.gift_box').click(function(){
    check_user_login(function () {
        Mtr.getInviteGiftCode(function(){
            $(".gift-code").text(Mtr.user_gift_codes[0])
            $("#received").show();
            $("#shade").show();
            $("#shade").css({
                "backgroundColor":"#000",
                "opacity":0.5
            });
            $("#shade-box2").show();
            document.getElementsByClassName("close_img2")[0].onclick = function() {
            $("#shade").hide();
            $("#shade-box2").hide();
            }
        })
    })
})

$('.share-btn').click(function(){
    check_user_login(function () {
        Mtr.share(function(){
        })
    })
})



//rewards点击
var _reward = document.getElementsByClassName("reward");
var obj = [
    "url(imgs/img_1yuyuehaoli_hover.png) no-repeat",
    "url(imgs/img_2quanfuhaoli_hover.png) no-repeat",
    "url(imgs/img_3kaifuhaoli_hover.png) no-repeat",
    "url(imgs/img_4chengzhanglibao_hover.png) no-repeat",
    "url(imgs/img_5qiandaohaoli_hover.png) no-repeat",
    "url(imgs/img_6shouchonglibao_hover.png) no-repeat",
    "url(imgs/img_7shenqi_hover.png) no-repeat",
    "url(imgs/img_8diyiwuer_hover.png) no-repeat"
]

var oldBack = [
    "url(imgs/img_1yuyuehaoli.png) no-repeat",
    "url(imgs/img_2quanfuhaoli.png) no-repeat",
    "url(imgs/img_3kaifuhaoli.png) no-repeat",
    "url(imgs/img_4chengzhanglibao.png) no-repeat",
    "url(imgs/img_5qiandaohaoli.png) no-repeat",
    "url(imgs/img_6shouchonglibao.png) no-repeat",
    "url(imgs/img_7shenqi.png) no-repeat",
    "url(imgs/img_8diyiwuer.png) no-repeat"
]

for (var i = 0; i < _reward.length; i++) {
    _reward[i].onclick = function() {
        rewardIndex = $(this).index();
        changeShadeBox3(rewardIndex);
    }
}


//touch reward
$(".reward").on("touchstart", function (e) {
    activeNum = $(this).index();
    $(this).css({
        "background":obj[activeNum],
        "backgroundSize":"100% auto"
    });


    $(this).on("touchend", function (e) {
        $(this).css({
            "background":oldBack[activeNum],
            "backgroundSize":"100% auto"
        });
    });
});
    

function changeShadeBox3(rewardIndex){
     
        $(".reward").eq(rewardIndex).css({
            "background-image": obj[$(this).index()],
            "background-repeat": "no-repeat",
            "background-position": "0 0"
        })
        $("#shade").show();

        $(".rewards").eq(rewardIndex).show();
        $("#shade-box3").css("display","block");
        $(".fontstyle").find("li").css("display","none");
        $(".fontstyle").find("li").eq(rewardIndex).css("display","block");

        switch(rewardIndex){
            case 0:
                $(".box3-title").text("LIKES Giftpack");
                break;
            case 1:
                 $(".box3-title").text("Server-wide Reward");
                 break;
            case 2:
                 $(".box3-title").text("New Server Giftpack");
                 break;
            case 3:
                 $(".box3-title").text("Growth Giftpack");
                 break;
            case 4:
                 $(".box3-title").text("Login Reward");
                 break;
            case 5:
                 $(".box3-title").text("First Recharge Giftpack");
                  break;
            case 6:
                 $(".box3-title").text("chong zhi song hao li");
                 break;
            case 7:
                 $(".box3-title").text("Unique");
                 break;
        }
}


$("#tankuang1").click(function(){
       rewardIndex --;
       if(rewardIndex < 0){
            rewardIndex = 0;
       }
      changeShadeBox3(rewardIndex);
})

$("#tankuang2").click(function(){
      rewardIndex ++;
      if(rewardIndex > 7){
        rewardIndex = 7;
      }
      changeShadeBox3(rewardIndex);
})



$(".close_img3").click(function(){
    $("#shade-box3").css("display","none");
    $("#shade").hide();
})


//角色切换
var _bigjiaose = document.getElementsByClassName("bigjiaose");
var _xiaojiaose = document.getElementsByClassName("xiaojiaose");
var baobox100 = document.getElementsByClassName("baobox100");

var role = $(".xiaojiaose");
role.click(function(){
    //alert($(this).index());
    newSrc = "imgs/img_rw"+ ($(this).index()+1) + "_little_hover.png";
    
    console.log(newSrc )
    for(var i = 0 ; i < role.length; i ++){
        oldSrc = "imgs/img_rw"+ (i+1) + "_little.png";
        role.eq(i).attr("src",oldSrc);
    }
    role.eq($(this).index()).attr("src",newSrc);
    
})



for (var k = 0; k < _xiaojiaose.length; k++) {
    _xiaojiaose[k].onclick = function() {
        $(".bigjiaose").eq($(this).index()).show().siblings().hide()
        $("#left_img").show()
        $(".baobox100").eq($(this).index()).show().siblings().hide()

    }
}

//copy
$(document).ready(function() {
    var targetText = $("#copy-span").text();
    var clipboard = new Clipboard('#copy-button');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        e.clearSelection();
    });
});


//infomation
$(".information_btn").click(function(){
    $(this).css({
        "background":"url(imgs/btn_gonglue_hover.png) no-repeat center",
        "background-size":"contain",
        "color":"#6b2705"
     });
    $(this).siblings(".information_btn").css({
         "background":"url(imgs/btn_gonglue.png) no-repeat center",
        "background-size":"contain",
        "color":"#6e5b3a"
     });
     nowIndex = ($(this).index());

     $(".information_box").eq(nowIndex).show();
     $(".information_box").eq(nowIndex).siblings(".information_box").hide();
})

//点击视频按钮
 $(".img_vedio").click(function(event) {
     $("#shade").show();
     $("#shade").css({
         "backgroundColor":"#000",
         "opacity":0.5
     });
     $("#video_window").show();
     $(".window ").show();
 });

 //关闭视频
 $(".window_close").click(function(){
    $("#shade").hide();  
    $("#video_window").hide();
    $(".window").hide();
    
    //停止播放
     $('frame').attr('src','https://www.youtube.com/embed/xJXuA5ixH6Q?rel=0');
 });


 
    
 






