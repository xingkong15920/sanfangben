var userInfo = CmsUtility.getSessionStorageItem('userinfo');
var listArrs = [];
console.log(userInfo)
$('#tijiao').click(function(){
	if($('#old').val() == ''){
		layer.open({
            content: '请输入原始密码',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
		return false;
	}
	
	if($('#new').val() == ''){
		layer.open({
            content: '请输入新密码',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
		return false;
	}
	if($('#new1').val() == ''){
		layer.open({
            content: '请再次输入新密码',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
		return false;
	}
	if($('#new').val() != $('#new1').val()){
		layer.open({
            content: '新密码不一致,请重新输入',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
		return false;
	}
	if($('#old').val() != userInfo.user.pwd){
		layer.open({
            content: '原始密码输入错误',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
		return false;
	}
	CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.updatePwd,
        "req" + "="
         + "{'old':" + strToJson($('#old').val()) + "," 
         + "'new1':" + strToJson($('#new').val()) 
         + "," 
         + "'new2':" + strToJson($('#new1').val()) + ","
         + "'token':" + strToJson(userInfo.user.token) + ","
 
         + "}",
        function(data) {
            layer.open({
            content: '修改成功,请重新登录',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll();
                 CmsUtility.removeSessionStorageItem('userinfo');
                 window.parent.location.href = '../login.html'
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
//getUser();
function getUser() {
    dataPara = "req" + "=" 
    + "{'anjianNum':" + strToJson('') + "," 
    + "'police':" + strToJson('') + "," 
    + "'startTime':" + strToJson('') + "," 
    + "'token':" + strToJson(userInfo.user.token) + "," 
    + "'pageNum':" + strToJson('1') + "," 
    + "'pageSize':" + strToJson('20') 

    + "}";
    CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Anjian.list,
        dataPara,
        function(data) {
            console.log(data)
           	// listArrs = CmsUtility.clearListArr(listArrs);
            // listArrs = CmsUtility.getArrFromJson(data.userList, listArrs);
            
            // pageCount = data.pageCount;
            // count = data.count;
        },
        function(data) {
            // listArrs = CmsUtility.clearListArr(listArrs);
            
            // pageCount = 0;
            // count = 0;
        }
    )

};