// pages/guanzhu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "关注 ",
      " color": false
    },
    guanzhu_arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
//     console.log(JSON.parse(options.arr1));
//     var arr2 = JSON.parse(options.arr1);
//     console.log(options.guanzhu_id);
//     console.log(arr2);
//     var arr = this.data.guanzhu_arr;
//     console.log(arr);
//     console.log(arr2[options.guanzhu_id]);
//  arr.push(
//       arr2[options.guanzhu_id]
//     ),
//     this.setData({
//       guanzhu_arr:arr
//     })
//     wx.getStorage({
//       key:" guanzhu_arr",
//    data: that.data.guanzhu_arr,
//     })

    var data = wx.getStorageSync("guanzhu");
    var that=this;
    console.log(data);
    that.setData({
      guanzhu_arr:data
    })
    console.log(that.data.guanzhu_arr)
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