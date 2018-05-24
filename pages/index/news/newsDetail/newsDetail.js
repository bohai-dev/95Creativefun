// pages/index/news/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // dataList: [
    //   "https://mp.weixin.qq.com/s/MUV4YuDOU3SZQRrP2XxTHg",
    //   "https://mp.weixin.qq.com/s/rJ2UCDIf563gAY7TxjTzPA",
    //   "https://mp.weixin.qq.com/s/VhIElz_hyJtR8rXN_-Nekg",
    //   "https://mp.weixin.qq.com/s/oafce56GBv-sn3FBP0PV5g",
    //   "https://mp.weixin.qq.com/s/PdEqJCSWlEyqqAxl95MJ8w",
    //   "https://mp.weixin.qq.com/s/iI97QEfeQnlgHwttWL3Krg",
    //   "https://mp.weixin.qq.com/s/uTSS9W28dTJW3XqZFwnY-g"
    // ],
    dataList: [
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news101.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news102.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news103.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news104.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news105.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news106.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news107.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news108.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news109.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news1/news110.jpg"
      ],
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news2/news201.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news2/news202.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news2/news203.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news2/news204.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news2/news205.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news2/news206.jpg",
      ],
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news301.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news302.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news303.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news304.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news305.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news306.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news307.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news308.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news309.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news3/news310.jpg",
      ],
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news401.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news402.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news403.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news404.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news405.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news406.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news407.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news408.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news409.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news410.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news411.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news412.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news413.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news4/news414.jpg",
      ],
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news501.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news502.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news503.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news504.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news505.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news506.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news507.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news508.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news509.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news5/news510.jpg"
      ],
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news601.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news602.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news603.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news604.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news605.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news606.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news607.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news608.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news6/news609.jpg"
      ],
      ["https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news701.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news702.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news703.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news704.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news705.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news706.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news707.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news708.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news709.jpg",
        "https://qswebsite.oss-cn-beijing.aliyuncs.com/news/news7/news710.jpg"
      ]

    ],
    newUrl:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index)
    this.setData({
      newUrl: this.data.dataList[options.index]
    })
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
  // 自定义方法
  backPage: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})