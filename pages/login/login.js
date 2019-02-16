// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getuserinfo: function (e) {
    console.log(e);
    
    /**
     * 用户授权
     */
    //1.获取微信用户信息
    wx.getUserInfo({
      success:res => {
        //console.log("获取用户信息：",res);
        //用户名
        var username = res.userInfo.nickName;
        console.log("获取用户信息：", username);
        //性别
        var gender = res.userInfo.gender;
        //头像
        var avatarUrl = res.userInfo.avatarUrl;
        app.globalData.avatarUrl = avatarUrl;
        app.globalData.gender=gender;
        app.globalData.username = username;


        //2.向数据库表中插入数据
        wx.request({
          url: 'http://localhost:8080/addUser',
          method: 'post',
          dataType: 'json',
          data: {
            openId: app.globalData.openid,
            name: app.globalData.username,
            gender: app.globalData.gender
          },
          success(result) {
            console.log(result);
            if (result.data) {
              //3.授权成功跳转到首页
              wx.switchTab({
                url: '/pages/home/home',
              })
            } else {
              //授权失败,请稍后重试
            }
          }
        })  
      }
    })
  }
})