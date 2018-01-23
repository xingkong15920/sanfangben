$(document).ready(function() {

    // setInterval(function() {
    //     $('#one1').attr('onclick', "setTab('one',1)")
    //     $('#one2').attr('onclick', "setTab('one',2)")
    //     $('#one3').attr('onclick', "setTab('one',3)")
    //     $('#one4').attr('onclick', "setTab('one',4)")
    //     $('#one5').attr('onclick', "setTab('one',5)")
    //     $("#one1,#one2,#one3,#one4,#one5,#one6,#one7,#one8,#one9,#one10").click(function() {
    //         $("#con_one_0").css("display", "none")
    //     })
    //     $("#one0").click(function() {
    //         $("#con_one_0").css("display", "block")
    //     })
    // }, 1000)




    $('.medo1 dd').click(function() {
        var i = $(this).index(); //下标第一种写法
        //var i = $('tit').index(this);//下标第二种写法
        $(this).addClass('off').siblings().removeClass('off');
        $('.meduo1 .right-content').eq(i).show().siblings().hide();
    });
    $('.medo6 dd').click(function() {
        var i = $(this).index(); //下标第一种写法
        $(this).addClass('off').siblings().removeClass('off');
        $('.meduo6 .right-content').eq(i).show().siblings().hide();
    });
    $('.medo8 dd').click(function() {
        var i = $(this).index(); //下标第一种写法
        $(this).addClass('off').siblings().removeClass('off');
        $('.meduo8 .right-content').eq(i).show().siblings().hide();
    });
    $('.medo10 dd').click(function() {
        var i = $(this).index(); //下标第一种写法
        $(this).addClass('off').siblings().removeClass('off');
        $('.meduo10 .right-content').eq(i).show().siblings().hide();
    });
    $('.medo2 dd').click(function() {
        var i = $(this).index(); //下标第一种写法
        $(this).addClass('off').siblings().removeClass('off');
        $('.meduo2 .right-content').eq(i).show().siblings().hide();
    });

    $(".nav li").click(function() {
        var i = $(this).index(); //下标第一种写法
        $(this).children().addClass('selected1')
        $(this).siblings().children().removeClass('selected1');
    });
});
var userInfo = CmsUtility.getSessionStorageItem('userinfo');
console.log(userInfo);
$('#username').html(userInfo.user.userName);
$('#rolename').html(userInfo.roleName);
$('#logout').click(function() {
    if (userInfo == '') {
        window.location.href = 'login.html';
    }
    CmsUtility.removeSessionStorageItem('userinfo');
    window.location.href = 'login.html';
})
