const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    array:[],
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
    var that = this;
    //获取启事类型列表
    wx.request({
      url: 'http://localhost:8080/queryItemTypelist',
      method:'GET',
      dataType:'json',
      success:function(e){
        that.setData({
          array: e.data,
          openid: app.globalData.openid
        });
      }
    })
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
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //标题
    var title = e.detail.value.title;
    //启事类型
    var itemtypeid = this.data.array[this.data.index].id;
    //物品种类
    var category = e.detail.value.category;
    //发布人
    var provider = e.detail.value.username;
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
    //获取转换之后的图片
    var imglist = this.data.imglist;
    //openid
    var openid = this.data.openid;
    //构造请求参数
    var params={};
    params.title = title;
    params.itemtypeid = itemtypeid;
    params.category = category;
    params.username = provider;
    params.losetime = losetime;
    params.province = province;
    params.address = address;
    params.detaildesc = detaildesc;
    params.imgs = imgs;
    params.imglist = imglist;
    params.openid = openid;

    //console.log(params);
    wx.request({
      url: 'http://localhost:8080/publishItem',
      method:'post',
      dataType:'json',
      data:params,
      success(e){
        console.log(e);
        if(e.data=='ok'){
            //跳转到列表
            wx.switchTab({
              url: '/pages/home/home',
            })
        }else{
          //不跳转直接提示发布失败
        }
      }
    })
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
      imgs: [],
      imglist:[]
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
    var imglist=[];
    wx.chooseImage({
      count:3,
      sourceType: ['album', 'camera'],
      success: function(res) {
        //上传图片
        for (var i = 0; i < res.tempFilePaths.length;i++){
          wx.uploadFile({
            url: 'http://localhost:8080/uploadImages',
            filePath: res.tempFilePaths[i],
            name: 'file',
            success(rs) {
              console.log(rs.data);
              imglist.push(rs.data);
            }
          })
        }
       
        //显示图片
        that.setData({
          imgs: res.tempFilePaths,
          imglist: imglist
        });
      },
    })
  },
  /**
   * 删除图片
   */
  deleteimage:function(e){
    var that = this;
    //console.log(e);
    wx.showModal({
      title: '删除图片',
      content: '是否删除?',
      success:function(res){
        if (res.confirm){
          //获取删除图片的数组下标
          var idx = e.currentTarget.dataset.idx;
          var imgs = that.data.imgs;
          imgs.splice(idx,1);
          that.setData({
            imgs:imgs
          });
        }
      }
    })
  }
})