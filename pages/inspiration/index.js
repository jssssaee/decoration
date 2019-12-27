// pages/inspiration/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "灵感图集 ",
      " color": false
    },
    atlas_arr: [{ url: "/images/atlas.png", title: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/atlas.png", title: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/atlas.png", title: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/atlas.png", title: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/atlas.png", title: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/atlas.png", title: "客厅北欧风格装修灵感图 配色搭配"}
    
    ],
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
  toInspirate_Detail:function(e){
  console.log(e);
    var id = e.currentTarget.dataset.id;
    var title=this.data.atlas_arr[id].title;
wx.navigateTo({
  url: "/pages/inspirate_detail/index?title="+title,
})
  }
})