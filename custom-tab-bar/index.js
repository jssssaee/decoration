Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/home1.png",
        "selectedIconPath": "/images/home2.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/goods_cate/goods_cate",
        "iconPath": "/images/zhuangxiu1.png",
        "selectedIconPath": "/images/zhuangxiu2.png",
        "text": "装修案列"
      },
      {
        "pagePath": "/pages/yuyue/index",
        "iconPath": "/images/order1.png",
        "selectedIconPath": "/images/order2.png",
        "text": "预约"
      },
      {
        "pagePath": "/pages/user/user",
        "iconPath": "/images/my1.png",
        "selectedIconPath": "/images/my2.png",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})