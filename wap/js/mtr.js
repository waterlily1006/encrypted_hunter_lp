function showLoading(){}
function hiedLoading(){}

var Mtr = {
    user_gift_codes: {},
    user_info: {},
    user: {},
    login: function (callbackFun) {
        if (typeof(callbackFun) != 'undefined') {
            callbackFun();
        }
    },
    getInviteGiftCode: function (callbackFun) {
        $.ajax({
            async: true,
            type: "post",
            dataType: "json",
            data: {'user_id': user_id},
            url: "/?a=mtr&m=getLpGiftCode",
            beforeSend: function () {
                showLoading()
            },
            success: function (res) {
                hiedLoading()
                if (res.status == "success") {
                    Mtr.setUserGiftCodes(res.code)
                    if (typeof(callbackFun) != 'undefined') {
                        callbackFun();
                    }
                }else{
                    alert('code shortage');
                }
            },
            error: function () {
                console.log('user login error')
            }
        })
    },
    share: function (callbackFun) {
        var userShare = function () {
            fb_share['link'] = link;
            FB.ui(fb_share, function (response) {
                console.log("---Share CallBack---")
                console.log(response);
                console.log("---Share CallBack---")
                if (response && !response.error_message) {
                    if (typeof(callbackFun) != 'undefined') {
                        callbackFun();
                    }
                } else {
                    console.log('Error while posting.');
                }
            });
        }
        userShare()
    },
    loadUser: function (callbackFun) {
        var osa_user = $.cookie("oas_user");
        if (osa_user) {
            check_user_login(callbackFun)
        }
    },
    loadMtrFb: function (appid) {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        FB.init({
            appId: appid,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.10'
        });
    },
    setUserGiftCodes: function (user_gift_code) {
        Mtr.user_gift_codes[0] = user_gift_code
    },
    setUserInfo: function (user_info) {
        Mtr.user_info = user_info
    },
    setUser: function (user) {
        Mtr.user = user
    },

}
function check_user_login(callbackFun) {
    if (user_id != '') {
        if (typeof(callbackFun) != 'undefined') {
            callbackFun();
        }
        return;
    }
    var osa_user = $.cookie("oas_user");
    if (osa_user == null) {
        OAS_GAMES_JS.facebook.login({'fail': 'Fail to connect with Facebook'}, function (val) {
            user_id = val.id;
            Mtr.login(callbackFun)
        });
    }
    else {
        $.ajax({
            async: false,
            type: "get",
            dataType: "jsonp",
            data: '',
            jsonp: 'callback',
            url: "//passport.oasgames.com/?m=getLoginUser&oas_user=" + osa_user,
            timeout: "5",
            success: function (res) {
                user_id = res.val.id;
                Mtr.login(callbackFun)
            },
            error: function () {
                OAS_GAMES_JS.facebook.login({'fail': 'Fail to connect with Facebook'});
            }
        })
    }
}

