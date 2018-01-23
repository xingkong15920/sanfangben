var CmsConfig = {

    ServiceUrl: {
         ApiRootUrl: 'http://192.168.1.115:8080/RTAEDS/',
        //ApiRootUrl:'http://192.168.1.116:8080/IkkyuChegjtrack1/'
        //ApiRootUrl:'http://222.223.190.185:8088/RTAEDS/'
        // imgUrl:imgAdd
    },
    addressUrl: {
        Login: {
            // 获取验证码
            createCode: "login/createCode",
            // 登录
            login: "login/login",
        },

        Plat: {
            // 修改密码
            updatePwd: "plat/updatePwd",
            // 修改用户信息
            updateUser: "plat/updateUser",
            // 管理员列表
            userList: "plat/userList",
            // 部门列表
            departmentList: "plat/departmentList",
            // 查看用户信息
            userInfo:"plat/userInfo",
            // 添加用户
            addUser:"plat/addUser",
            // 添加部门
            addDepartment:"plat/addDepartment",
            // 修改部门
            updateDepartMent:"plat/updateDepartMent",
            // 部门信息
            departmentInfo:"plat/departmentInfo",
            // 角色列表
            roleList:"plat/roleList",
            // 添加角色
            addRole:"plat/addRole",
            //修改角色
            updateRole:"plat/updateRole",
            //添加权限
            addTree:"plat/tree",
            //权限树列表
            tree:"tree/tree",
            //添加权限树的项
            addTrees:"tree/addTree",
            //删除权限
            delTree:"tree/delTree",
            //修改权限
            updatePermission:"tree/updatePermission"
        },
        Anjian: {
            //案件列表
            list:"anjian/list"
        },
        Writ:{
            //查看案件登记信息
            getAnjian:"writ/getAnjian",
            //查看检验鉴定
            jianyanjd:"writ/jianyanjd",
            //询问笔录
            xunwenbl:"writ/xunwenbl",
            //尸体处理
            corpse:"writ/corpse",
            //返还物品
            reGoods:"writ/reGoods",
            //放车单
            reCar:"writ/reCar",
            //其他资料
            otherDatum:"writ/otherDatum",
            //公开记录
            openRecords:"writ/openRecords",
            //调查报告
            serveyReport:"writ/serveyReport",
            //工作记录
            workRecords:"writ/workRecords",
            //认定审核
            rendingsh:"writ/rendingsh",
            //责任认定
            zerenrd:"writ/zerenrd",
            //责任认定的送达回执,
            reReceipt:"writ/reReceipt",
            //调节申请
            tiaojiesq:"writ/tiaojiesq",
            //调节记录
            tjRecords:"writ/tjRecords",
            //调节完毕
            tjEnd:"writ/tjEnd",
            //调节未完成
            tjCompensate:"writ/tjCompensate",
            //复核申请
            ajUploading:"writ/ajUploading",
            //受理复核
            ajReview:"writ/ajReview",
            //不予受理
            unReview:"writ/unReview",
            //案件复核的评论
            reviewResult:"writ/reviewResult",
            //案件复核中的送达回执
            reReview:"writ/reReview",
            //违法处罚
            weifacf:"writ/weifacf",
            //勘察笔录
            kanchaBl:"wirt/kanchaBl",
            //扣押物品
            detainGoods:"writ/detainGoods",
            //强措凭证
            qiangcuo:"writ/qiangcuo",
            //遗落物品
            ylGoods:"wirt/ylGoods"
            
        }
        // Shop: {
        //     View: "business/queryBusiness",
        //     Add: "platOrder/queryPlatRepair",
        //     Edit: "platOrder/fetchRepair",
        //     ShopList: "business/businessList",
        //     Unlock: 'business/unlock',
        //     Online: 'business/online',
        //     addShop: 'business/addBusiness',
        //     Comment: 'comment/comments',
        //     factoryApplyDel:"factoryApply/factoryApplyDel"
        // },
        // Report:
        // {
        //     View: "facManageMoneyReport/queryMoneyReport",
        //     Driver:"driverManage/getDriverIncome"
        // },
        // User: {
        //     UserDetail: "platUser/queryOneUser",
        //     UserList: "platUser/queryAllUser"
        // },
        // Finance: {
        //     WithdrawDetail: "platFinance/queryOneWithdraw",
        //     withdrawPrcess: "platFinance/withdrawPrcess"
        // },
        // Driver: {
        //     DriverDetail: "driverManage/queryDriver",
        //     DriverList: "driverManage/driverList",
        //     DriverFreeze: "driverManage/driverFreeze",
        //     DriverAdd: "driverManage/addDriver",
        //     DriverDrivingList: "driverManage/queryDesignatedRecord",
        //     DriverAccountList: "driverManage/driverAccountList",
        //     driverOrderInfo:"driverManage/driverOrderInfo",
        //     driverApplyDel:"driver/driverApplyDel"
        // },
        // Withdrow: {
        //     WithdrowList: "platFinance/queryAllWithdraw"
        // },
        // facmaintain:{
        //     grouplist:"facmaintain/grouplist",
        //     PriceGroupList:"facmaintain/PriceGroupList",
        //     copy:"facmaintain/copy"
        // },
        // Userinfo: {
        //     userAdd:"sys/register",
        //     checkfac:"sys/checkfac",  
        //     userlist: "sys/userlist",
        //     delete:"sys/delete",
        //     getfacadmin:"sys/getfacadmin",
        //     edit:"sys/edit"
        // },
        // sys:{
        //     adminlist:"sys/adminlist",
        //     getadmin:"sys/getadmin",
        //     feedback:"feedback/list"
        // },
        // shopRecharge:{
        //     addprice:"shopRecharge/shopRecharge"
        // },
        // Comment:{
        //    commentList:'business/businessReviewList',
        //    commentDel:"business/commentDel",
        //    commentDetail:"business/commentDetails"
        // }
    }

};