// pages/myitem/myitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        "id": 1001,
        "title": "学府路丢失银白色笔记本电脑一台",
        "user": {
          "id": 2001,
          "name": "李雷",
          "email": "hd1611756908@163.com"
        },
        "category": "电脑",
        "itemtype": {
          "id": 4001,
          "name": "寻物启事"
        },
        "province": "哈尔滨市-南岗区",
        "address": "黑龙江省哈尔滨市南岗区学府路550号哈尔滨理工大学一号楼3层301",
        "createtime": "2018-12-12 22:22:22",
        "losetime": "2018-12-12",
        "imgs": ["https://img.alicdn.com/imgextra/i2/773923628/O1CN014Iksgf1cffOvVHWVP_!!773923628.jpg", "https://img.alicdn.com/imgextra/i4/773923628/O1CN011cffNakLNEENTAW_!!773923628.jpg",
          "https://img.alicdn.com/imgextra/i2/773923628/O1CN011cffOMOJ9OHUzGT_!!773923628.jpg"
        ],
        "detaildesc": "在女人街kfc到成龙影院中间丢失2000年1月16日男性身份证一张，没有其他附加品，身份证为320121开头，本人为应届高考生希望能快点拿到，可支付一定酬劳"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("我的启事列表",options);
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

  }
})