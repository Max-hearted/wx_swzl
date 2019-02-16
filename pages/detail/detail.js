// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   * collection:是否收藏
   */
  data: {
    collection:false,
    result: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;

    wx.request({
      url: 'http://localhost:8080/queryItemByItemId',
      dataType:'json',
      method:'get',
      data:{'itemId':options.id},
      success(e){
        console.log(e.data);
        that.setData({
          result: e.data
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
   * 删除
   */
  deleteitem:function(e){
    console.log("删除项目的id是: ",e.currentTarget.dataset.itemid);
    wx.showModal({
      title: '',
      content: '是否删除',
      success(res){
        if (res.confirm){
          console.log("确定");
          //调用后台逻辑删除项目 ... ...
          wx.request({
            url: 'http://localhost:8080/deleteItem',
            method:'get',
            dataType:'json',
            data:{
              'itemId': e.currentTarget.dataset.itemid
            },
            success(result){
              console.log(result);
            }
          })
          

          //跳转tabBar页面
          wx.switchTab({
            url: '/pages/home/home',
          });
        }else if(res.cancel){
          console.log("取消");
          return;
        }else{
          return;
        }
      }
    })
  },
  /**
   * 更新
   */
  updateitem:function(e){
    console.log("更新项目的id是: ", e.currentTarget.dataset.itemid);
    //跳转到更新页面
    wx.navigateTo({
      url: '/pages/updateitem/updateitem?id=' + e.currentTarget.dataset.itemid,
    })
  }
})