// pages/demo02/demo02.js
Page({

  
  data: {
    region: ['全部', '全部', '全部'],
    customItem: '全部',
    array: ['待选择','有', '无'],
    array2: ['待选择','是', '否'],
    objectArray: [
      {
        id: 0,
        name: '待选择'
      },
      {
        id: 1,
        name: '有'
      },
      {
        id: 2,
        name: '无'
      },
    ],
   
    objectArray2: [
      {
        id: 0,
        name: '待选择'
      },
      {
        id: 1,
        name: '有'
      },
      {
        id: 2,
        name: '无'
      },
    ],
    index_leaveyu: 0,
    // 假期是否离渝
    index: 0,
    // 现居住地有无疑似或确诊病例
    index_tem:0,
    // 体温是否正常
    index_sure:0,
    // 本人及家庭成员是否为确诊病例
    index_sus:0,
    // 本人及家庭成员是否为疑似病例
    index_touch:0,
    // 暑假期间有无接触湖北旅居的人员
    index_touch2:0,
    // 暑假期间有无接触疑似或确诊病例
    index_sim:0,
    // 有无咳嗽、乏力、鼻塞、流涕、咽痛、腹泻等症状
    index_his:0,
    // 有无疾病史
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange_touch: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_touch: e.detail.value
    })
  },
  bindPickerChange_leaveyu: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_leaveyu: e.detail.value
    })
  },
  bindPickerChange_tem: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_tem: e.detail.value
    })
  },
  bindPickerChange_sure: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_sure: e.detail.value
    })
  },
  bindPickerChange_sus: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_sus: e.detail.value
    })
  },
  bindPickerChange_touch2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_touch2: e.detail.value
    })
  },
  bindPickerChange_sim: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_sim: e.detail.value
    })
  },
  bindPickerChange_his: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_his: e.detail.value
    })
  },
})