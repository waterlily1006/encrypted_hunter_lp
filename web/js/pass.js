
$(window).load(function(){

    function Page() {
        $(window).scrollTop(760);
    	this_ = this;
        this.rewards = $(".rewards_list li");
        this.lBtn = $(".btn_l");
        this.rBtn = $(".btn_r");
        this.intro = $(".intro");
        this.perLi = $(".intro li");
        this.closeBtn = $(".close_alert");
        this.alertBox1 = $(".alert_box");
        this.baoXiang = $("#gift");
        this.alertBox2 = $(".gift_code");
        this.closeBtn2 = $(".close_gift");
        
        this.peoBtns = $(".peo_btns li");
        this.introPass = $(".intro_pass li")
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
        this.gameInformation = $(".game-information ");
         
        this.nowIndex = 0;
        this.treeA = $(".qin a");
        //console.log(this.treeA.length)
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
            this.handleInformationClick();
            this.handleTreeClick();

        },
        handleCollapseClick: function(){
            this.collapse.click(function(){
                $(location).attr('href', 'index.html');
            })
            
        },

        handleInformationClick(){
            this.gameInformation.click(function(){
                 $(location).attr('href', 'infor.html');
            })
           
        },
        handleScroll:function(){
            $(window).scroll(function(){
                scrollTop = $(window).scrollTop();
               
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
                console.log(this_.navIndex)
                if(this_.navIndex == 0){
                    console.log(3344)
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
                this_.nav.css("display","none");
                this_.shouSuoBtn.css("display","block");
                
            })
            this.shouSuoBtn.click(function(){
                $(this).css("display","none");
                this_.nav.css("display","block");
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
                $(window).scrollTop(0);
                this_.pageMask.css("display","block");
                this_.alertBox2.css("display","block");
                console.log("hahaha")
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

           
            var a = location.href;
            var b = a.split('?')[1].split('&')
            var headIndex = 0;//headerindex
            var linkIndex = 0;//linkiNdex
            for(var index in b){
                headIndex = Number(b[0].split("=")[1])-1;
                linkIndex = Number(b[1].split("=")[1])-1;
            }
            console.log(headIndex,linkIndex)

            //默认样式设置
            $("#firstpane .menu_body").find("img").attr({src:"imgs/line_nav_ny_hei.png"});
            $("#firstpane p.menu_head").css("padding-top","0"); 
            $("#firstpane p.menu_head").css("padding-bottom","0"); 
            $("#firstpane .menu_body").eq(headIndex).css({display:"block"});
            $("#firstpane p.menu_head").eq(0).css({height:"80px",color:"#682905"});
            $("#firstpane p.menu_head").eq(0).css({backgroundImage:"url(imgs/btn_ny_1_hover.png)"});
            // $("#firstpane .menu_body").eq(0).find("b").addClass('tree_title');
            $("#firstpane .menu_body").eq(headIndex).find("a").eq(linkIndex).css("color","#eca33d");
            //$("#firstpane .menu_body").eq(headIndex).find("a").eq(linkIndex).addClass('tree_title')
            $("#firstpane .menu_body").eq(headIndex).find("a").eq(linkIndex).find("b").addClass('tree_title');
            

                

            $("#firstpane p.menu_head").click(function(){   


                    this_.nowIndex = $(this).index();
                    $(this).find(".sanjiao").attr("src","imgs/img_sanjiao_hover.png");
                    $(this).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
                   

                    $(this).siblings('#firstpane p.menu_head').css("color","#c3a273");
                    $(this).css("color","#682905");
                    
                    $(this).siblings("p.menu_head").css({backgroundImage:"url(imgs/btn_ny_2.png)"});
                    $(this).next("div.menu_body").css({backgroundImage:"url(imgs/btn_ny_3zhankai_bottom.png)"});
                    $(this).siblings().find(".sanjiao").attr("src","imgs/img_sanjiao.png");
                
                    
                    if(this_.nowIndex == 0){
                        $(this).css({backgroundImage:"url(imgs/btn_ny_1_hover.png)"});
                    }else{
                        $("#firstpane p.menu_head").eq(0).css({backgroundImage:"url(imgs/btn_ny_1.png)"});
                        $(this).css({backgroundImage:"url(imgs/btn_ny_2_hover.png)"});
                    }


                    //table 切换逻辑 

                    //每个menu_head的索引
                    var pIndex = this_.nowIndex/2;
                    console.log(pIndex)
                    //为每个li增加cont_active名，然后为相应的兄弟元素去除cont_active名
                    //$(".info_con li.cont_div").eq(pIndex).addClass("cont_active").siblings().removeClass("cont_active");
                    
                    //默认每个内容列表内容为索引为0的  也就是第一个
                    //$(".info_con li.cont_div").eq(pIndex).find("ul").find("li").eq(0).addClass("info_active").siblings().removeClass("info_active");
                   
                    //获取列表中a标签的索引 这个不能放在上个tree函数里面,不然初始化时这个上面那个函数不点击 这个函数点击触发不了

                    $(".qin #firstpane .menu_body a").click(function(){
                        var aIndex = $(this).index()
                        $(".info_con li.cont_div").eq(pIndex).find("ul").find("li").eq(aIndex).addClass("info_active").siblings().removeClass("info_active");
                       
                       
                    });

                    //为每个li下面的起个变量名  容易操作子ul
                     var cont_div_ul = $(".info_con li.cont_div").eq(pIndex);
                });   

                //初始化时点击第一个列表中的a标签
                // $(".qin #firstpane .menu_body a").click(function(){
                //     var aIndex = $(this).index()
                //     $(".info_con li.cont_div ul li").eq(aIndex).addClass("info_active").siblings().removeClass("info_active");
                   

                //      title = $(this).text();
                //      $(".info_title").text(title);

                // });
                 
                 
                 //点击a
                $("#firstpane .menu_body a").click(function(){
                    $(this).css("color","#faaf44");
                    $(this).siblings("a").css("color","#c3a273");
                    $(this).siblings("a").find("b").removeClass('tree_title');
                    //$(this).find("b").addClass('tree_title');
                    console.log($(this).index())
                })  
        },
        handleTreeClick:function(){
            this.treeA.click(function(){
                console.log($(this).index())
            })
            
        },
        //根据在index页面点击跳转到详情页面时改变tree的背景颜色
        // changTreeBackground: function(){
        //     var navigationParam = location.href;
        //     console.log(navigationParam)
        //     var navigationParamArr = navigationParam.split("&");
        //     var navigationName = navigationParamArr[0].split("=")[1];
        //     var navigationIndex = navigationParamArr[1].split("=")[1];
        //     //写六个判断因为你这有六个主导航
        //     if(navigationParam==""){
        //         return false
        //     }else if(navigationName == "about-the-gema"){
        //         //这里通过navigationIndex改变背景颜色
        //     }else if(navigationName == "Character"){

        //     }else if(navigationName == "Character"){

        //     }else if(1){
                
        //     }
        // },

        



    });

    var page = new Page();
    page.init();
    
});


