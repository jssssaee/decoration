// components/form/index.js

Component({
  properties: {
    form_style: {
      type: Object,
      value: {

      },
    },

  },
  data: {
    detailed:""
  },

  methods: {
    bindRegionChange: function (e) {
      var that = this
      //下拉框所选择的值
      console.log('picker发送选择改变，携带值为', e.detail.value)

      this.setData({
        //拼的字符串传后台
        detailed: e.detail.value[0] + " " + e.detail.value[1] + " " + e.detail.value[2],
        //下拉框选中的值
     
      })

    },
    formSubmit: function (e) {
      var adds = e.detail.value;
      console.log(adds)
    }
  }
})