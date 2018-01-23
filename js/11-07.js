
var userInfo = CmsUtility.getSessionStorageItem('userinfo');
var listArrs = [];
getUser();
function getUser() {
    // dataPara = "req" + "=" + "{'department':" + strToJson('null') + "," + "'text':" + strToJson('null') + "," + "'pageNum':" + strToJson('1') + "," + "'pageSize':" + strToJson('10') 

    //         + "}";
    CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.departmentList,
        ' ' ,
        function(data) {
            console.log(data)
           	listArrs = CmsUtility.clearListArr(listArrs);
            listArrs = CmsUtility.getArrFromJson(data.list, listArrs);
            
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

$('#tianjiaBtn').click(function(){
    console.log('111')
    $('#tianjia').show()
})
$('#close1,#close2').click(function(){
    console.log('222')
    $('#tianjia').hide()
})
$('#close3').click(function(){
    if($('#t1').val() == ''){
        layer.open({
            content: '请填写部门名称',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#t2').val() == ''){
        layer.open({
            content: '请填写所属省',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    if($('#t3').val() == ''){
        layer.open({
            content: '请填写所属市',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                 layer.closeAll()
            }
        })
        return false;
    }
    var a = new Object();
    a.name = $('#t1').val();
    a.province = $('#t1').val()
    a.city = $('#t1').val()
    var dataItem = "req" + "=" + "{'dp':" + JSON.stringify(a) + "," +"'token':"+ strToJson(userInfo.user.token)  +"}";
    CmsUtility.postAjaxCall(
        CmsConfig.addressUrl.Plat.addDepartment,
        dataItem,
        function(data) {
            console.log(data)
            layer.open({
            content: '部门添加成功',
            btn: '确定',
            shadeClose: false,
             yes:function(){
                  layer.closeAll();
                  $('#tianjia').hide();
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