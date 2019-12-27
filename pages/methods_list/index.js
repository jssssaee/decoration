// pages/methods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'return': '1',
      "title": "21 "
    },
    hot_arr: [{ url: "/images/work1.png", title1: "厨房的防水你做了吗？5招 教你怎么做！", title2: "厨房", icon1: "/images/collect.png", icon2: "/images/watch.png" },
    { url: "/images/work2.png", title1: "小户型儿童房怎么设计？流 行的榻榻米合适吗？", title2: "卧室", icon1: "/images/collect.png", icon2: "/images/watch.png" }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var parameter=this.data.parameter;
    console.log(parameter);
parameter.title=options.title;
this.setData({
parameter:parameter
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
  toMethod_detail:function(e){
    var detail_id =e.currentTarget.dataset.id;
    var arr = this.data.hot_arr;
    var arr1=JSON.stringify(arr);
    console.log(arr);
  wx.navigateTo({
    url:'/pages/methods_detail/index?detail_id='+detail_id+"&arr="+arr1,
  })
  }
})