// components/navbar/index.js
var app = getApp();
Component({
  properties: {
    parameter: {
      type: Object,
      value: {
      
      },
    },
   
  },
  data: {
    navH: ""
  },
  attached: function () {
    this.setData({
      navH: app.globalData.navHeight
    });
    console.log(app.globalData.navHeight)
  },
  methods: {
    return: function () {
      wx.navigateBack();
    }

  }
})