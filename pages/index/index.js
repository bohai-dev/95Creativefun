//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: [
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/banner/banner3.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/banner/banner2.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/banner/banner1.jpg"
    ],
    nav:[{
      navUrl:"../about/about",
      img: "../../images/navIcon/about2.png",
      text: "关于我们",
      backgroundColor: "yellow",
      show: false
    }, {
      navUrl:"./news/news",
      img: "../../images/navIcon/news.png",
      text: "新闻中心",
      backgroundColor: "blue",
      show:true
    }, {
      navUrl:"../service/service",
      img: "../../images/navIcon/service2.png",
      text: "产品服务",
      backgroundColor: "green",
      show:false,
    }, {
      navUrl:"./contactUs/contactUs",
      img: "../../images/navIcon/contact2.png",
      text: "联系我们",
      backgroundColor: "purple",
      show: true
    }, {
      navUrl:"../case/case",
      img: "../../images/navIcon/case2.png",
      text: "案例展示",
      backgroundColor: "pink",
      show: false
    }],
    contentList: [
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/index/pro1.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/index/pro2.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/index/pro3.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/index/pro4.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/index/pro5.jpg",
      "https://qsiphonewebsite.oss-cn-beijing.aliyuncs.com/index/pro6.jpg"
    ]
  },
  onLoad: function () {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
