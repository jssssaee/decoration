//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    list_arr: [{ url: "/images/style.png", introduce: "装修风格"},
      { url: "/images/design.png", introduce: "找设计师" },
      { url: "/images/method.png", introduce: "装修攻略" },
      { url: "/images/picture.png", introduce: "灵感图集" },
      { url: "/images/case-list.png", introduce: "装修案例" },
    ],
//     image_url:[
//       "/images/style.png",
// "/images/design.png",
//       "/images/method.png",
//       "/images/picture.png",
//       "/images/case-list.png",
//     ],
//     main_introduce:[
//     "装修风格","找设计师","装修攻略","灵感图集","装修案例"
//     ],
    picture_list:[
      "/images/pic1.png", "/images/pic2.png",
      "/images/pic3.png"
    ],
    stylearr:[
     { url:"/images/style1.png",id:0}, {url:"/images/style2.png",id:1},
   {  url: "/images/style3.png",id:2}
    
    ],
    atlas_arr: ["/images/atlas.png", "/images/atlas.png", "/images/atlas.png", "/images/atlas.png", "/images/atlas.png", "/images/atlas.png"],
        parameter:{
      'navbar':'0',
      'return':'0'
    },
    bastBanner:[1,2,3]
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
        selected: 0
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
  
to_style:function(e){
  // console.log(e),
  if(e.currentTarget.dataset.id==0){
    wx.navigateTo({
      url: "/pages/decoration_style/index",
    })
  };
  if (e.currentTarget.dataset.id == 1) {
    wx.navigateTo({
      url: "/pages/designer/index",
    })
  };
  if (e.currentTarget.dataset.id == 2) {
    wx.navigateTo({
      url: "/pages/method/index",
    })
  };
  if (e.currentTarget.dataset.id == 3) {
    wx.navigateTo({
      url: "/pages/inspiration/index",
    })
  };
  if (e.currentTarget.dataset.id == 4) {
    console.log(22);
    wx.switchTab({
      url: "/pages/goods_cate/goods_cate",
    })
  }


},
  toQuote:function(e){
    console.log(e);
    if (e.currentTarget.dataset.id == 0) {
      wx.navigateTo({
        url: "/pages/quote/index",
      })
    };
    if (e.currentTarget.dataset.id == 2) {
      wx.navigateTo({
        url: "/pages/house_style/index",
      })
    };
  },
  
 


})