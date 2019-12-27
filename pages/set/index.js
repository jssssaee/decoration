// pages/set/index.js

import util from '../../utils/util.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      "title": "设置",
    },
    userInfo:{ nickname:"小水"}
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
  getUserInfo: function () {
    var that = this;
    getUserInfo().then(res => {
      // that.setData({ userInfo: res.data, switchUserInfo: res.data.switchUserInfo || [] });
      // for (let i = 0; i < that.data.switchUserInfo.length; i++) {
      //   if (that.data.switchUserInfo[i].uid === that.data.userInfo.uid) {
      //     that.setData({ userIndex: i });
      //   }
      // }

      console.log(res)
    });
  },
})