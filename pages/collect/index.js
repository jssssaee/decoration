// pages/ collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "收藏"
    },
show1:true,
show2:false,
show3:false,
show4:false,
key:"1",
    collect_arr:[{url:"/images/work1.png"},
      { url: "/images/work2.png" },
      { url: "/images/work3.png" },
      { url: "/images/work1.png" }
    
    
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


  change1: function () {
    this.setData({
      show1: true,
      show2: false,
      show3:false,
      show4:false
    })
  },
  change2:function(){
   this.setData({
  show2:true,
  show1:false,
  show3: false,
   show4: false
    })
  },
  change3: function () {
    this.setData({
      show3: true,
      show1: false,
      show2: false,
      show4: false
    })
  },
  change4: function () {
    this.setData({
      show4: true,
      show1: false,
      show2: false,
      show3: false
    })
  },

})