$(document).ready(function() {
    //console.log(CmsConfig.addressUrl.Login.createCode)

})

function strToJson(str) {
    return "'" + str + "'";
}

function subBtn() {
    CmsUtility.postAjaxCall(
            CmsConfig.addressUrl.Login.login,
            "req" + "=" + "{'userName':" + strToJson($('#username').val()) + "," + "'pwd':" + strToJson($('#password').val()) + "," + "'code':" + strToJson($('#yanzhengma').val())

            + "}",
            function(data) {
                console.log(data)
                    //console.log(data.responseText);
                CmsUtility.setSessionStorageItem('userinfo', data)
                window.location.href = '01-1index.html'
            },
            function(data) {
                layer.open({
                    content: data.message,
                    btn: '确定',
                    shadeClose: false,
                    yes: function() {
                        layer.closeAll()
                    }
                })
                console.log('error')
                    //alert(data.message)
                    // console.log(data)
            }
        )
        // $.ajax({
        //     url: "http://192.168.0.102:8080/RTAEDS/login/login",
        //     type: "POST",
        //     data: "req" + "="
        //      + "{'userName':" + strToJson($('#username').val()) + "," 
        //      + "'pwd':" + strToJson($('#password').val()) 
        //      //+ "," 
        //      //+ "'code':" + strToJson($('#yanzhengma').val())

    //      + "}",
    //     dataType: 'text',
    //     async: false,
    //     success: function(data, textStatus) {
    //         console.log(textStatus);
    //         alert("success");
    //     },
    //     error: function(errorMsg) {

    //         console.log(errorMsg);
    //     }
    // });

}
var onOffKey = true;
$(document).keypress(function(e) {
    console.log(e.which,onOffKey)
    // 回车键事件  
    if (e.which == 13) {
        if (onOffKey == true) {
            $('#btn').click();
            onOffKey = false
        } else {
            layer.closeAll();
            onOffKey = true
        }

    }
});
