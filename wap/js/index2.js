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
document.getElementById('gift_box').onclick = function() {
        $("#received").show();
        $("#shade").show();
        $("#shade-box2").show();
        document.getElementsByClassName("close_img2")[0].onclick = function() {
            $("#shade").hide();
            $("#shade-box2").hide();
        }
    }
//rewards点击
var _reward = document.getElementsByClassName("reward");
var obj = [
    "url(./imgs/img_1yuyuehaoli_hover.png)",
    "url(./imgs/img_2quanfuhaoli_hover.png)",
    "url(./imgs/img_3kaifuhaoli_hover.png)",
    "url(./imgs/img_4chengzhanglibao_hover.png)",
    "url(./imgs/img_5qiandaohaoli_hover.png)",
    "url(./imgs/img_6shouchonglibao_hover.png)",
    "url(./imgs/img_7shenqi_hover.png)",
    "url(./imgs/img_8diyiwuer_hover.png)"
]




for (var i = 0; i < _reward.length; i++) {
    _reward[i].onclick = function() {
        
        rewardIndex = $(this).index();
        changeShadeBox3(rewardIndex);
       
    }
}

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
}


$("#tankuang1").click(function(){
       console.log("like")
       rewardIndex --;
       if(rewardIndex < 0){
            rewardIndex = 0;
       }
      changeShadeBox3(rewardIndex);
})

$("#tankuang2").click(function(){
      console.log("dislike");
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