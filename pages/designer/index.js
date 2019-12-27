// pages/designer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "找设计师",
      " color": false
    },
    design_arr:[{
      url: "/images/designer_img.png", 
      name: "梁景华",
       experice:"10年设计经验",
      position:"高级室内设计总监",
      img1:"/images/work1.png",
      img2:"/images/work2.png",
      img3:"/images/work3.png",
      add: "+关注"
    }, {
        url: "/images/work2.png",
        name: "梁景光",
        experice: "5年设计经验",
        position: "中级室内设计",
        img1: "/images/work1.png",
        img2: "/images/work2.png",
        img3: "/images/work3.png",
        add: "+关注"
      }],
      arr:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.clearStorageSync();
   
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
  toDetail:function(e){
   var str = e.currentTarget.dataset.id;
   var that=this;
      console.log(that.data.design_arr);
    var arr = JSON.stringify(that.data.design_arr);
    console.log(e);
    wx.navigateTo({
      url: "/pages/designer_detail/index?indexuser_id=" + str + "&arr1=" + arr
      // url: '../test/test?str=' + str,
    })
  },

  toGuanzhu:function(e){
    var str = e.currentTarget.dataset.id;
    var that = this;
    var data = that.data.design_arr;
    data[str].add="已关注";
    var arr2 = wx.getStorageSync("guanzhu");
    if(arr2){
      arr2.push(that.data.design_arr[str]);
    }
    else{
      var arr2=[];
      arr2.push(that.data.design_arr[str]);
    }
  
    this.setData({
      arr:arr2,
      design_arr:data
    });
    console.log(that.data.design_arr[str]);
    wx.setStorageSync("guanzhu", that.data.arr);
    console.log(that.data.arr)
 
  }
})