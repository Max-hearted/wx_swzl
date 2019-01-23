// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0
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
  /**
   * 点击顶部选项卡事件
   */
  click_nav:function(e){
    //获取选项卡点击事件触发后传送过来的参数
    var nav = e.currentTarget.dataset.current;
    //将参数赋值给前端选项卡控制样式显示
    this.setData({
      current:nav
    });
  },
  /**
   * 左右滑动滑块触发事件
   */
  bindchange:function(e){
    this.setData({
      current: e.detail.current
    });
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh:function(){
    console.log("下拉刷新");
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  }
})