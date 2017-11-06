<?php
/**
 * Created by PhpStorm.
 * User: Baihuzi
 * Date: 2017/9/19
 * Time: 09:31
 */
define('GAME_CODE','mtren');
define('GAME_LANG','en');

function is_mobile()
{
    $agent      = strtolower($_SERVER['HTTP_USER_AGENT']);
    $is_pc      = (strpos($agent, 'windows nt')) ? true : false;
    $is_mac     = (strpos($agent, 'mac os')) ? true : false;
    $is_iphone  = (strpos($agent, 'iphone')) ? true : false;
    $is_android = (strpos($agent, 'android')) ? true : false;
    $is_ipad    = (strpos($agent, 'ipad')) ? true : false;
    if ($is_iphone) {
        return true;
    }
    if ($is_android) {
        return true;
    }
    if ($is_ipad) {
        return true;
    }
    if ($is_mac) {
        return false;
    }
    if ($is_pc) {
        return false;
    }
    
    return false;
}

$mb = is_mobile();

if ($mb) {
    $location = "//mtren.oasgames.com/lp/wap/";
    $location = "//mobile.test.oasgames.com/mtren/lp/wap/";
}
else {
    $location = "//mtren.oasgames.com/lp/web/";
    $location = "//mobile.test.oasgames.com/mtren/lp/web/";
}

header("Location:" . $location);
exit;