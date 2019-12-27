// pages/methods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "21 "
    },
    obj:{},
    main:"    一个90平米的三室一厅,在人们的印象中是非常紧促的,室内怎样布局,各功用区是怎样分布的,这些都会影响后期的装修作用,甚者影响人们的生活习惯。购买之前,业主最好详细分析户型图,揣摩各功用区的合理性,并对后期的安顿有所规划才好。尤其是在没有餐厅的条件下,怎样才干奇妙运用空间,合理安排餐区。一起看看90平米三室一厅户型图解析,希望给你有所启发。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var arr=JSON.parse(options.arr);
    var obj = arr[options.detail_id];
    console.log(obj);
    var parameter=this.data.parameter;
    parameter.title=obj.title1;
   this.setData({
     obj:obj,
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

  }
})