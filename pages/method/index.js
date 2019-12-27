// pages/method/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "装修攻略 ",
      " color": false
    },
    method_arr:[
      {url:"/images/method1.png",title:"入户"},
      { url: "/images/method2.png", title: "厨房" },
      { url: "/images/method3.png", title: "餐厅" },
      { url: "/images/method4.png", title: "客厅" },
      { url: "/images/method5.png", title: "厕所" },
      { url: "/images/method6.png", title: "浴室" },
      { url: "/images/method7.png", title: "卧室" },
      { url: "/images/method8.png", title: "阳台" },
    ],
    hot_arr: [{ url: "/images/work1.png", title1: "厨房的防水你做了吗？5招 教你怎么做！", title2: "厨房", icon1: "/images/collect.png", icon2: "/images/watch.png" }, 
      { url: "/images/work2.png", title1: "小户型儿童房怎么设计？流 行的榻榻米合适吗？", title2: "卧室", icon1: "/images/collect.png", icon2: "/images/watch.png" }
    
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
  toMethods_list:function(e){
    console.log(e);
    var that=this;
    var arr=that.data.method_arr;
    var method_id = e.currentTarget.dataset.id;
    var title = arr[method_id].title;
    console.log(title);
    wx.navigateTo({
      url:  "/pages/methods_list/index?id="+method_id+"&title="+title,
    })
  }
})