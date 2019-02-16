//app.js
App({
  onLaunch: function () {
      var that = this;
      //获取openid
      wx.login({
        success(e){
          //console.log(e.code);
          wx.request({
            url: 'http://localhost:8080/sessionTcode',
            method:'get',
            dataType:'json',
            data:{'code':e.code},
            success(result){
              //console.log(result);
              that.globalData.openid = result.data.openid;
              //跳转到授权页面进行第一次授权
              if(!result.data.isLogin){
                wx.reLaunch({
                  url: '/pages/login/login'
                })
              }
            }
          })
        }
      });
  },
  globalData: {
    userInfo: null,
    openid: '123456789'
  }
})