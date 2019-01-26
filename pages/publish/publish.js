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
    region: ['上海市', '上海市', '闸北区'],
    address:'',
    detaildesc:'',
    imgs:[]
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
  formSubmit:function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //标题
    var title = e.detail.value.title;
    //启事类型
    var itemtypeid = this.data.array[this.data.index].id;
    //物品种类
    var category = e.detail.value.category;
    //发布人
    var username = e.detail.value.username;
    //遗失日期
    var losetime = e.detail.value.losetime;
    //选择地区
    var province = e.detail.value.province;
    //具体地点
    var address = this.data.address;
    //失物详情
    var detaildesc = this.data.detaildesc;
    //图片
    var imgs = this.data.imgs;
    //构造请求参数
    var params={};
    params.title = title;
    params.itemtypeid = itemtypeid;
    params.category = category;
    params.username = username;
    params.losetime = losetime;
    params.province = province;
    params.address = address;
    params.detaildesc = detaildesc;
    params.imgs = imgs;
    console.log(params);

  },
  /**
   * 重置表单事件
   */
  formReset:function() {
    this.setData({
      index:0,
      region: ['上海市', '上海市', '闸北区'],
      address: '',
      detaildesc: '',
      imgs: []
    });
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
    this.setData({
      address: e.detail.value
    });
  },
  /**
   * 失物详情
   */
  bindblurdetail:function(e){
    this.setData({
      detaildesc: e.detail.value
    });
  },
  /**
   * 选择图片
   */
  chooseImage:function(e){
    var that = this;
    wx.chooseImage({
      count:3,
      sourceType: ['album', 'camera'],
      success: function(res) {
        //显示图片
        that.setData({
          imgs: res.tempFilePaths
        });
      },
    })
  }
})