// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   * current ： 
   * 0->寻人启事
   * 1->寻物启事
   * 2->寻宠启事
   * 3->失物招领
   */
  data: {
    current:0,
    windowHeight:0,
    windowWidth:0,
    page: {
      "hasnext": true,
      "pageno": 1,
      "pagesize": 20,
      "items": [
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取系统高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight:res.windowHeight-45,
          windowWidth:res.windowWidth
        });
      },
    });
    //获取数据列表 第一页 每页显示十个项目
    

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
    var that = this;
    
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    var current = that.data.current;

    switch(current){
      case 0:
        // 寻物启事xw
        console.log("0",current);
        
        break;
      case 1:
        //寻人
        console.log("1",current);
        
        break;
      case 2:
        //寻宠
        console.log("2",current);
        
        break;
      case 3:
        //失物招领
        console.log("3",current);
       
        break;
      default:
        console.log("current不存在",current);
    }
    // 显示加载图标
    wx.showLoading({
      title: '加载下一页'
    });
    // 图标延时
    setTimeout(function () {
      wx.hideLoading()
    }, 2000);
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
    var that = this;
    //获取选项卡点击事件触发后传送过来的参数
    var nav = e.currentTarget.dataset.current;
    //将参数赋值给前端选项卡控制样式显示
    that.setData({
      current:nav
    });
  },
  /**
   * 左右滑动滑块触发事件
   */
  bindchange:function(e){
    var that = this;
    var current = e.detail.current;

    switch (current) {
      case 0:
        // 寻物启事
        console.log("0", current);

        break;
      case 1:
        //寻人
        console.log("1", current);

        break;
      case 2:
        //寻宠
        console.log("2", current);

        break;
      case 3:
        //失物招领
        console.log("3", current);

        break;
      default:
        console.log("current不存在", current);
    }


    this.setData({
      current: e.detail.current
    });
  }

})