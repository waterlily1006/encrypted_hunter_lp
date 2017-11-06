/**
 * Created by
 */
$(window).load(function(){
   

    function Page() {
    	this_ = this;
        this.rewards = $(".rewards_list li");
        this.lBtn = $(".btn_l");
        this.rBtn = $(".btn_r");
        this.intro = $(".intro");
        this.perLi = $(".intro li");
        this.closeBtn = $(".close_alert");
        this.alertBox1 = $(".alert_box");
        this.baoXiang = $("#gift");
        this.baoXiangImg = $(".baoxiang");
        this.alertBox2 = $(".gift_code");
        this.closeBtn2 = $(".close_gift");
        
        this.peoBtns = $(".peo_btns li");
        this.introPass = $(".intro_pass li");
        this.introBigImg = $(".intro_r");
        this.pageMask = $("#page_mask");

        this.rewardsNum = 0;
        this.totalWidth = this.intro.width();
        this.perWidth = this.perLi.width();
        this.initialNum = 0;
        this.imgIndex = 0;
        this.SwiperIndex = 0;
        this.navIndex = 0;

        this.copyBtn = $(".copy_btn");
        this.copyCont = $(".copy_cont");


        this.swiper = $(".b_box li");
        this.swiperBtn = $(".circle_btns li");
        this.bImg = $(".b_box");
        
        this.nav = $(".louti_nav");
        this.navBtn = $(".nav_list li");
        this.closeNavBtn = $(".close_nav");
        this.shouSuoBtn = $(".shou_btn");

        
        this.contDiv = $(".cont_div");
        this.infoPass = $(".info_pass");

        this.collapse = $(".collapse");
        this.blankboard = $(".blankboard");
         
        this.nowIndex = 0;
        this.treeA = $(".qin a");

        this.vedioKuang = $(".vedio_outer");
        this.vedioBtn = $(".vedio_inner");
        this.playBox = $(".play_box");
        this.deg = 0;
        this.windowClose = $(".window_close");

        this.informationBtn = $(".gaming li");
    }

    $.extend(Page.prototype, {

        init: function() {
            this.handleClickRewards();
            this.handleSwiperLeft();
            this.handleSwiperRight();
            this.handleCloseAlert();
            this.handleClickBaoXiang();
            this.handleClickPeo();
            // this.handleClickCopy();
            this.handleImgSwiper();
            this.autoplay();
            this.handleMouseEnter();
            this.handleNav();
            this.closeNav();
            this.tree();
            this.handleScroll();
            this.handleCollapseClick();
            //this.handleInformationClick();
            this.handleTreeClick();

            this.rotate();
            this.playVedio();
            this.closeVedio();

            this.informationBtnClick();
        },

        rotate:function(){  

            clearInterval(this.rotateTimer);
            this.rotateTimer  = setInterval(function(){
                this_.deg+=0.3;
                this_.jiaodu = "rotate("+ this_.deg +"deg)";
                this_.rotate();
            },2)
            this.vedioKuang.css("transform",this_.jiaodu); 

        },

        informationBtnClick:function(){
            this.informationBtn.click(function(){
                informationIndex = $(this).index();
 
                if(informationIndex == 0){
                    $(this).addClass("infor1_active");
                    this_.informationBtn.eq(1).removeClass("infor2_active");
                    this_.blankboard.eq(1).css("display","none");
                    this_.blankboard.eq(0).css("display","block");
                }
                if(informationIndex == 1){
                    $(this).addClass("infor2_active");
                    this_.informationBtn.eq(0).removeClass('infor1_active');
                    this_.blankboard.eq(0).css("display","none");
                    this_.blankboard.eq(1).css("display","block");
                }
            })  
        },
        playVedio:function(){
            this.vedioBtn.click(function(){
                this_.pageMask.css("display","block");
                this_.playBox.css("display","block");
            })
        },

        closeVedio:function(){
            this.windowClose.click(function(){
                this_.pageMask.css("display","none");
                this_.playBox.css("display","none");
                $('.video_window iframe').attr('src','https://www.youtube.com/embed/xJXuA5ixH6Q?rel=0');
            })
        },
        handleCollapseClick: function(){
            this.collapse.click(function(){
                $(location).attr('href', 'index.html');

            })
            
        },

        handleInformationClick(){
            this.blankboard.click(function(){
                 $(location).attr({'href':'pass.html'});
            })
           
        },
        handleScroll:function(){
            $(window).scroll(function(){
                scrollTop = $(window).scrollTop();
                if(scrollTop >= 0){
                   this.navIndex = 0;
                }
                if(scrollTop >=490){
                     this.navIndex = 1;
                 }
                 if(scrollTop >= 1220){
                     this.navIndex = 2;
                 }
                 if(scrollTop >=2160){
                    this.navIndex = 3;
                 }
                 if(scrollTop >= 3182){
                    this.navIndex = 4;
                 }
   
                for(var i = 0 ; i < this_.navBtn.length; i++){
                    this_.navBtn.eq(i).removeClass('nav_active');
                }
                this_.navBtn.eq(this.navIndex).addClass('nav_active');

            })
        },
        autoplay:function(){
            this.timer = setInterval(function(){
                this_.SwiperIndex ++;
                swiperIndex = this_.SwiperIndex % 4;

                perWidth = this_.swiper.width();
                left = perWidth * swiperIndex;
                this_.bImg.css("left",- left + "px");
                for(var i = 0 ; i < this_.swiperBtn.length; i++){
                    this_.swiperBtn.eq(i).find("a").removeClass('active');
                }

                this_.swiperBtn.eq(swiperIndex).find("a").addClass('active');

            },2000);
        },
        // swiper:function(){

        // },
        handleNav: function(){

            this.navBtn.click(function(event) {
                for(var i = 0 ; i < this_.navBtn.length; i++){
                    this_.navBtn.eq(i).removeClass('nav_active');
                }
                $(this).addClass("nav_active");

                this_.navIndex = $(this).index();

                if(this_.navIndex == 0){
                    $(window).scrollTop(0);
                }
                if(this_.navIndex == 1){
                    $(window).scrollTop(790);
                }
                if(this_.navIndex == 2){
                    $(window).scrollTop(1540);
                }
                if(this_.navIndex == 3){
                    $(window).scrollTop(2480);
                }
                if(this_.navIndex == 4){
                    $(window).scrollTop(3466);
                }


            });
        },

        closeNav:function(){
            this.closeNavBtn.click(function(){
                this_.nav.animate({right:'-450px'}).fadeOut("fast");
                this_.shouSuoBtn.animate({right:'0px'}).fadeIn("slow");
            })
            this.shouSuoBtn.click(function(){
                this_.nav.animate({right:'0px'}).fadeIn("slow");
                this_.shouSuoBtn.animate({right:'-100px'}).fadeOut("fast");

            })
        },
        
        handleImgSwiper:function(){
             this.swiperBtn.click(function(){
                this_.SwiperIndex = $(this).index();
                perWidth = this_.swiper.width();
                left = perWidth * this_.SwiperIndex;
                this_.bImg.css("left",- left + "px");
                for(var i = 0 ; i < this_.swiperBtn.length; i++){
                    this_.swiperBtn.eq(i).find("a").removeClass('active');
                }
                $(this).find("a").addClass('active');
             })
        },
        handleMouseEnter: function(){
            this.bImg.mouseenter(function(event) {
                console.log(33)
                clearInterval(this_.timer);
            });
             this.bImg.mouseleave(function(event) {     
                this_.autoplay();
            });
        },
        handleClickRewards: function() {
            this.rewards.click(function(){
                this_.rewardsNum = $(this).index();
                this_.initialNum = this_.rewardsNum;
                this_.handleChangeSwiper();
                this_.alertBox1.css("display","block");
                $(window).scrollTop(0);
                this_.pageMask.css("display","block");
            })  
        },

        handleSwiperLeft: function() {

            this.rBtn.click(function(){
                if(this_.initialNum < 7){
                    this_.initialNum ++;
                    this_.handleChangeSwiper();    
                }   
            })
        },
        handleSwiperRight: function() {
            this.lBtn.click(function(){
                if(this_.initialNum > 0){
                    this_.initialNum --;
                    this_.handleChangeSwiper();    
                }   
            })
        },
        handleChangeSwiper:function(){
            left = this_.perWidth * this_.initialNum;
            this_.intro.css("left", "-" + left +"px");

            switch(this_.initialNum){
                case 0: 
                    $(".alert_title").find("span").text("LIKES Giftpack");
                    break;
                case 1:
                     $(".alert_title").find("span").text("Server-wide Reward");
                     break;
                case 2:
                     $(".alert_title").find("span").text("New Server Giftpack");
                     break;
                case 3:
                     $(".alert_title").find("span").text("Growth Giftpack");
                     break;
                case 4:
                     $(".alert_title").find("span").text("Login Reward");
                     break;
                case 5:
                     $(".alert_title").find("span").text("First Recharge Giftpack");
                      break;
                case 6:
                     $(".alert_title").find("span").text("Cumlative Recharge Reward");
                     break;
                case 7:
                     $(".alert_title").find("span").text("Unique");
                     break;
            }

        },

        handleCloseAlert:function(){
            this.closeBtn.click(function(){
                this_.alertBox1.css("display","none");
                this_.pageMask.css("display","none");
            });

            this.closeBtn2.click(function(){
                this_.alertBox2.css("display","none");
                this_.pageMask.css("display","none");
            })
        },

        handleClickBaoXiang: function(){
            this.baoXiang.click(function(){
                check_user_login(function () {
                    Mtr.getInviteGiftCode(function () {
                        $(".gift-code").text(Mtr.user_gift_codes[0])
                        $(window).scrollTop(0);
                        this_.pageMask.css("display","block");
                        this_.alertBox2.css("display","block");
                        console.log("hahaha")
                        $(".baoxiang").next(".finish").show();
                    })
                })
            })     
        },

        handleClickPeo: function(){
            this.peoNum = this.peoBtns.length;
            this.peoBtns.eq(0).find("a").css('background',"url(imgs/img_rw1_little_hover.png) no-repeat 0 0");
            
            this.peoBtns.click(function(){
                this_.imgIndex = $(this).index();
                for(var i = 0; i < this_.peoNum; i ++){
                    this_.background = "url(imgs/img_rw" + (i+1)+ "_little.png) no-repeat 0 0";
                    this_.peoBtns.eq(i).find("a").css('background',this_.background);
                    this_.introPass.eq(i).css("display","none");
                }
                this_.background = "url(imgs/img_rw" + (this_.imgIndex+1)+ "_little_hover.png) no-repeat 0 0";
                this_.bigBackground = "url(imgs/img_rw" + (this_.imgIndex+1)+ ".png) no-repeat 0 0";
               
                $(this).find("a").css('background',this_.background);
                this_.introBigImg.css("background",this_.bigBackground);
                this_.introPass.eq(this_.imgIndex).css("display","block");
            })  
        },

        handleClickCopy:function(){
            var clipboard = new Clipboard('.copy_btn');
                targetText  = this_.copyCont.text();
                clipboard.on('success', function(e) {
                    alert("复制成功");
                    e.clearSelection();
                });

        },
        tree:function(){
                $("#firstpane p.menu_head").css("padding-top","0"); 
                $("#firstpane p.menu_head").css("padding-bottom","0"); 
                $("#firstpane p.menu_head").eq(6).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");

                // $("#firstpane p.menu_head").eq(0).css({backgroundImage:"url(imgs/btn_ny_1_hover.png)"});
                $("#firstpane p.menu_head").eq(0).css({
                    display:"block",
                    height:"80px",
                    backgroundImage:"url(imgs/btn_ny_1_hover.png)",
                    color:"#6b2705"
                });


                $("#firstpane p.menu_head").click(function(){   
                  
                    $(this).css({color:"#6b2705"});
                    console.log("111")
                    this_.nowIndex = $(this).index();
                    console.log(this_.nowIndex/2)

                    //点击头部menu
                    // for(var i = 0 ; i < this_.contDiv.length; i ++){
                    //     this_.contDiv.eq(i).removeClass('active_kuai');
                    //     this_.contDiv.eq(i).removeClass('active_duan');
                    //     this_.contDiv.eq(i).css('display',"none");
                    // }
                    // this_.contDiv.eq(this_.nowIndex/2).css("display","block");
                    // this_.contDiv.eq(this_.nowIndex/2).addClass('active_kuai');
                    // this_.infoPass.eq(0).addClass('active_duan');

                    $(this).find("img").attr("src","imgs/img_sanjiao_hover.png");
                    //$(this).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
                
                    
                    $(this).siblings().css({backgroundImage:"url(imgs/btn_ny_2.png)"});
                    $(this).next("div.menu_body").css({backgroundImage:"url(imgs/btn_ny_3zhankai_bottom.png)"});
                    $(this).siblings().find("img").attr("src","imgs/img_sanjiao.png");
                
                    
                    if(this_.nowIndex == 0){
                        $(this).css({backgroundImage:"url(imgs/btn_ny_1_hover.png)"});

                    }else{
                        $("#firstpane p.menu_head").eq(0).css({backgroundImage:"url(imgs/btn_ny_1.png)"});
                        $(this).css({backgroundImage:"url(imgs/btn_ny_2_hover.png)"});
                    }
                    
                });   

                $(".menu_body").find("a").click(function(){
                    alert(1)
                    this_.infoPass.siblings("a").css("display","none");
                    this_.infoPass.eq($(this).index()).addClass('active_duan');
                    
                    
                })  
        },

        handleTreeClick:function(){
            this.treeA.click(function(){
                // console.log($(this).index()+this_.nowIndex)
            })
            
        }

    });

    var page = new Page();
    page.init();



    $('.share-btn').click(function(){
        check_user_login(function () {
            Mtr.share(function(){
            })
        })
    })
});


