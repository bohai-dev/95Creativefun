// pages/brand/pageOne/pageOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentList: [{
      title: "愿景：",
      text: "已提供优质产品，一流服务为己任，致力成为一家受人尊重、值得信赖，在科技软件领域拥有领先技术，并能为客户提供一条龙产品与服务的企业，成为跨中加两国的互联网公司领跑者。",
    }, {
      title: "使命：",
      text: "公司致力于聚焦客户关注需求与应用，提供业界完整并具有竞争力的产品，解决方案与服务，持续为客户创造最大价值。",
    }, {
      title: "企业文化: ",
      text: "凝聚、创新、坚毅、诚信",
    }]
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
  // 自定义方法
  backPage: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})