// pages/goods_cate/goods_cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
show1:true,
show2:false,
show3:false,
    parameter: {
      'navbar': '1',
      'return': '0',
      "title":"装修案例",
     " color":false
    },
    detail_arr:[
      { url: "/images/case_detail.png", intro1: "空间布局大改造，90平怎么打造三室一厅？", intro2:"北欧风格 | 成都 | 三居室 | 90m²"},
      { url: "/images/case_detail.png", intro1: "简洁+色彩  打造最美时尚设计", intro2:"北欧风格 | 成都 | 三居室 | 90m²" }
    ],
    detail_arr2: [
      { url: "/images/atlas.png", intro1: "11布局大改造，90平怎么打造三室一厅？", intro2: "北欧风格 | 成都 | 三居室 | 90m²" },
      { url: "/images/atlas.png", intro1: "简洁+色彩  打造最美时尚设计", intro2: "北欧风格 | 成都 | 三居室 | 90m²" }
    ],
    detail_arr3: [
      { url: "/images/style3.png", intro1: "空间布局大改造，90平怎么打造三室一厅？", intro2: "北欧风格 | 成都 | 三居室 | 90m²" },
      { url: "/images/style3.png", intro1: "简洁+色彩  打造最美时尚设计", intro2: "北欧风格 | 成都 | 三居室 | 90m²" }
    ]

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
console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
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

change_show1:function(){
  var that=this;
 that.setData({
   id:1,
show1:true,
show2:false,
   show3: false
 });
  console.log(this.data)
},
  change_show2: function () {
    var that = this;
    that.setData({
      id:2,
      show2: true,
      show1:false,
      show3:false
    });
    console.log(this.data)
  },
  change_show3: function () {
    var that = this;
    that.setData({
      id:3,
      show3: true,
      show1: false,
      show2: false
    });
    console.log(this.data)
  },
  toCase_detail:function(e){
    var str = e.currentTarget.dataset.id;
var that=this;
console.log(that.data.detail_arr);
    var arr = JSON.stringify(that.data.detail_arr);
wx.navigateTo({
  url: '/pages/caseDetail/index?case_id='+ str+"&arr1="+arr,
})
  },
  toCase_detail2:function(e){
    var str = e.currentTarget.dataset.id;
    var that = this;
    console.log(that.data.detail_arr);
    var arr = JSON.stringify(that.data.detail_arr2);
    wx.navigateTo({
      url: '/pages/caseDetail/index?case_id='+str+"&arr1="+arr,
    })
  },

  toCase_detail3: function (e) {
    var str = e.currentTarget.dataset.id;
    var that = this;
    console.log(that.data.detail_arr);
    var arr = JSON.stringify(that.data.detail_arr3);
    wx.navigateTo({
      url: '/pages/caseDetail/index?case_id=' + str + "&arr1=" + arr,
    })
  },

})