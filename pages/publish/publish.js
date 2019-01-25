// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    array:[
      {id:1001,name:'寻物启事'},
      {id:1002,name:'寻人启事'},
      {id:1003,name:"寻宠启事"},
      {id:1004,name:"失物招领"}
    ],
    date:'2019-01-01',
    region: ['广东省', '广州市', '海珠区']
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
   * 提交表单事件
   */
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  /**
   * 重置表单事件
   */
  formReset() {
    console.log('form发生了reset事件')
  },
  /**
   * 启事类型选择器
   */
  bindchangestyle:function(e){
    this.setData({
      index: e.detail.value
    });
  },
  /**
   * 时间选择器 
   */
  bindchangedate:function(e){
    this.setData({
      date: e.detail.value
    });
  },
  /**
   * 省市区选择器
   */
  bindchangeregion:function(e){
    this.setData({
      region:e.detail.value
    });
  },
  /**
   * 具体地点
   */
  bindbluraddress:function(e){
    console.log(e.detail.value);
  }
})