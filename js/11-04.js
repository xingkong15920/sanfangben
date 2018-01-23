var userInfo = CmsUtility.getSessionStorageItem('userinfo');
var listArrs = [];
getUser();
function getUser() {
    dataPara = "req" + "=" + "{'department':" + strToJson('null') + "," + "'text':" + strToJson('null') + "," + "'pageNum':" + strToJson('1') + "," + "'pageSize':" + strToJson('10') 

            + "}";
    CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.userList,
        dataPara,
        function(data) {
            console.log(data)
           	listArrs = CmsUtility.clearListArr(listArrs);
            listArrs = CmsUtility.getArrFromJson(data.userList, listArrs);
            
            // pageCount = data.pageCount;
            // count = data.count;
        },
        function(data) {
            listArrs = CmsUtility.clearListArr(listArrs);
            
            // pageCount = 0;
            // count = 0;
        }
    )

};
getQuanxian(); 
function getQuanxian() {
    // dataPara = "req" + "=" 
    // + "{'department':" + strToJson('null') + "," 
    // + "'text':" + strToJson('null') + "," 
    // + "'pageNum':" + strToJson('1') + "," 
    // + "'pageSize':" + strToJson('10') 

    //         + "}";
    CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.tree,
        '',
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
var listBox = new Vue({
        el: '#listBox',
        data: {
            items: listArrs,
        },
        methods: {
            //点击发送ajax处理详情页面
            getId: function(id, name) {
                return parent.addTab(name, 'shopedit.html?v=' + id);
            }
        }
    })
$('#close3').click(function(){
	if($('#text1').val() == ''){
        layer.open({
            content: '请填写用户账号',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#text2').val() == ''){
        layer.open({
            content: '请填写用户密码',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#text3').val() == ''){
        layer.open({
            content: '请填写用户姓名',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#text1').val() == ''){
        layer.open({
            content: '请填写用户手机号',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#text1').val() == ''){
        layer.open({
            content: '请填写用户身份证号',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#text1').val() == ''){
        layer.open({
            content: '请填写用户警号',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    var aData = "req" + "=" + "{'token':" + strToJson(userInfo.user.token) + ","
    + "'user':" + "{" 
    + "'account':" + strToJson($('#text1').val()) + ","
    + "'pwd':" + strToJson($('#text2').val()) + ","
    + "'phone':" + strToJson($('#text3').val()) + ","
    + "'userName':" + strToJson($('#text4').val()) + ","
    + "'sfzmhm':" + strToJson($('#text5').val()) + ","
    + "'policeNum':" + strToJson($('#text5').val()) + ","
    +"'state':" + strToJson('3')
    + "}"+ "}";
	CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.addUser,
        aData,
        function(data) {
            console.log(data)
            layer.open({
            content: '添加成功',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                  layer.closeAll();
                  getUser();
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