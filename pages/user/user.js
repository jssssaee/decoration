// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '0',
      "title": "个人中心",
      " color": false
    },
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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
  toSet:function(){
    wx.navigateTo({
      url: '/pages/set/index',
    })
  },
  toSubscribe:function(){
    wx.navigateTo({
      url: '/pages/subscribe/index',
    })
  },
  toCompany:function(){
    wx.navigateTo({
      url: "/pages/company/index",
    })
  },
  toCollect:function(){
    wx.navigateTo({
      url:"/pages/collect/index",
    })
  },
  toGuanzhu:function(){
    wx.navigateTo({
      url: "/pages/guanzhu/index",
    })
  }
})