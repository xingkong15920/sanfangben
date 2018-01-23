var userInfo = CmsUtility.getSessionStorageItem('userinfo');
console.log(userInfo);
$('#dengluzhanghao').html(userInfo.user.account);
$('#realname').val(userInfo.user.userName);
$('#idnum').val(userInfo.user.policeNum);
$('#idnum2').val(userInfo.user.sfzmhm);
$('#tel').val(userInfo.user.phone);
$('#tijiao').click(function(){
	if($('#realname').val() == ''){
        layer.open({
            content: '真实姓名不得为空',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#idnum').val() == ''){
        layer.open({
            content: '证件号码不得为空',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#idnum2').val() == ''){
        layer.open({
            content: '身份证号不得为空',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#tel').val() == ''){
        layer.open({
            content: '电话号码不得为空',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    var data = userInfo.user;
    data.userName = $('#realname').val();
    data.policeNum = $('#idnum').val();
    data.sfzmhm = $('#idnum2').val();
    data.phone = $('#tel').val();
    var dataItem = "req" + "=" + "{'user':" + JSON.stringify(data)+ "," +"'token':"+ strToJson(userInfo.user.token) +"}"
	CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.updateUser,
        dataItem,
        function(data) {
            console.log(data)
            layer.open({
            content: '信息修改成功',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                  layer.closeAll();
                 // CmsUtility.removeSessionStorageItem('userinfo');
                 // window.parent.location.href = '../login.html'
            }
        })
            //console.log(data.responseText);
        },
        function(data) {
            alert(data.message)
            console.log('error')
            //alert(data.message)
            // console.log(data)
        }
    )
})
function strToJson(str) {
    return "'" + str + "'";
}