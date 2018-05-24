// pages/case/caseDetail/caseDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [[
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/hotel/hotel1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/hotel/hotel2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/hotel/hotel3.jpg",
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/train/train1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/train/train2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/train/train3.jpg",
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/fun/fun1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/fun/fun2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/fun/fun3.jpg"
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/retail/retail1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/retail/retail2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/retail/retail3.jpg"
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/restaurant/restaurant1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/restaurant/restaurant2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/restaurant/restaurant3.jpg",
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/hairbeauty/hairbeauty1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/hairbeauty/hairbeauty2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/hairbeauty/hairbeauty3.png",
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/sport/sport1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/sport/sport2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/sport/sport3.jpg",
    ], [
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/house/house1.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/house/house2.jpg",
      "https://qswebsite.oss-cn-beijing.aliyuncs.com/case/house/house3.jpg",
    ]],
     content:"",
     title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      content: this.data.imgList[options.index],
      title: options.title
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