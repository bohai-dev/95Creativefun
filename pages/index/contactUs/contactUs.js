// pages/index/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    wechat:"",
    detail:""
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
  //提交表单
  formSubmit: function (e) {
    wx.showLoading({
      title: 'loading...',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading();   //关闭模态框
    }, 60000)
    if (!e.detail.value.name) {
      wx.hideLoading();   //关闭模态框
      wx.showModal({
        title: "",
        content: '请填写联系人',
        confirmColor: "#11d1f4",
        showCancel: false
      })
    } else if (!e.detail.value.phone) {
      wx.hideLoading();   //关闭模态框
      wx.showModal({
        title: "",
        content: '请填写联系电话',
        confirmColor: "#11d1f4",
        showCancel: false
      })
    } else if (!e.detail.value.wechat) {
      wx.hideLoading();   //关闭模态框
      wx.showModal({
        title: "",
        content: '请填写QQ/微信',
        confirmColor: "#11d1f4",
        showCancel: false
      })
    } else if (!e.detail.value.detail) {
      wx.hideLoading();   //关闭模态框
      wx.showModal({
        title: "",
        content: '请填写咨询内容',
        confirmColor: "#11d1f4",
        showCancel: false
      })
    } else {
      var _this = this;
      wx.hideLoading();   //关闭模态框
      var data = {
        name: e.detail.value.name,
        phone: e.detail.value.phone,
        wechat: e.detail.value.wechat,
        detail: e.detail.value.detail
      }
      console.log(data);
      wx.request({
        url: 'https://www.95cfuns.com/contactUs',
        method: 'POST',
        header: {
          "content-type": "application/json"
        },
        data: data,
        success: function (res) {
          console.log(res)
          var pushResData = res;
          if (res.data.errorCode == 0 && res.data.data == 1) {
            wx.hideLoading();   //关闭模态框
            wx.showModal({
              title: '提交成功！',
              content: '稍后我们将主动联系您！',
              confirmColor: "#11d1f4",
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log("用户点击确定");
                  _this.setData({
                    name: "",
                    phone: "",
                    wechat: "",
                    detail: ""
                  });
                }
              }
            })
          } else {
            wx.hideLoading();   //关闭模态框
            wx.showModal({
              title: "提交失败，请重试！",
              confirmColor: "#11d1f4",
              showCancel: false
            })
          }
        }
      })
    }
  }
})