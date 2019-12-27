// components/lingan_pic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    atlas_arr: [{ url: "/images/atlas.png", text: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/work1.png", text: "北欧风格好好好啊好啊" }, { url: "/images/work2.png", text: "xxxxx" }, { url: "/images/work3.png", text: "aaaaaaa" }, { url: "/images/work1.png", text: "客厅北欧风格装修灵感图 配色搭配" }, { url: "/images/atlas.png", text:"客厅北欧装修风格装饰搭配"}],
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
  toStyleDetail:function(e){
    console.log(e.currentTarget.dataset.id);
    var that=this;
    var style_id = e.currentTarget.dataset.id;
    console.log(that.data.atlas_arr);
    var newarr = JSON.stringify(that.data.atlas_arr);
wx.navigateTo({
  url: '/pages/styleDetail/index?style_id='+style_id+"&style_arr="+newarr,
})
  }
})