// pages/service/pageOne/pageOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:[{
      topic:"小程序开发",
      time:"2018-05-15 14:21",
      contentList:[{
        mainTitle:"快、好、省的微信小程序",
        imgUrl:"https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img1.png"
      }, {
        mainTitle: "微信小程序的十大流量入口",
        imgUrl:"https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img2.png"
      }, {
        mainTitle: "微信小程序的经典类型",
        detail: [{
          icoUrl:"https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img3.png",
          title:"酷炫小程序官网",
          description:"可以展示企业形象、新闻、地图位置、联系方式等",
          imgUrl:"",
          text:""
        }, {
          icoUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img4.png",
          title: "线下店铺线上预约",
          description: "基于LBS，发布线下实体店铺的主题活动，并可实现在线万能表单提交。实现顾客在线预约，线下消费，为线下引流",
          imgUrl: "",
          text: ""
        }, {
          icoUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img5.png",
          title: "专业网上商城",
          description: "发布商品、管理会员等级、组织营销活动(优惠券、积分兑换、拼团、预售、秒杀)，微信支付、订单处理",
          imgUrl: "",
          text: ""
        }, {
          icoUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img6.png",
          title: "微信在线客服",
          description: "支持多个微信客服，通过原生体验的在线即时通讯客服系统，实现顾客在线文字、图片、视频互动",
          imgUrl: "",
          text: ""
        }, {
          icoUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img7.png",
          title: "实时运营大数据分析",
          description: "提供小程序时时访问分析、用户画像、用户分布等全面的运营分析系统",
          imgUrl: "",
          text: ""
        }, {
          icoUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img8.png",
          title: "智能分销分佣体系",
          description: "可实现企业全员微小店线上分销分佣场景。经销商拓展终端并与终端二维码关联的O2O智慧分销分佣场景",
          imgUrl: "",
          text: ""
        }],
        text: [{text:"严格按照微信官方开放体系标准，帮助企业快速上线小程序。解决企业开发成本高、周期长的难题。",specialFonts: "95创享科技"}],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro1/img9.png"
      }]
    },{
      topic: "APP开发",
      time: "2018-05-15 15:32",
      contentList: [{
        mainTitle: "商业移动战略·优质合作平台",
        detail: [{
          description: "95创享科技公司拥有：超强的技术研发能力，助您业务落地呈现",
          imgUrl: "",
          text: ""
        }, {
          description: "熟知各行业的移动商业模式，支持您的移动战略部署",
          imgUrl: "",
          text: ""
        }, {
          description: "95创享科技拥有杰出的研发团队，可根据客户的需求提供高品质的安卓APP开发解决方案!使得企业生活便利智能化与企业系统品牌价值的双提升",
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro2/img1.png",
          text: "Android安卓 APP开发"
        }, {
          description: "苹果APP软件开发首选95创享科技，技术团队成员9人，核心技术团队曾任职于各大软件开发名企，服务超过400家企业，我们是技术派，用实力说话",
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro2/img2.png",
          text: "IOS苹果APP软件开发"
        }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro2/img3.png"
      }, {
        mainTitle: "专业团队·确保所想即所得",
        text: [{ text:"用服务大型企业的经历淬炼团队，使团队更加成熟、稳定、高效的同时，拥有持续创新的眼界和头脑，让您的所得超越所想"}],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro2/img4.png"
      }, {
        mainTitleme: "项目开发透明·实时监管项目进展",
        text: [{text:"您是否担心不能了解掌控项目开发进程？"},{text:"95创享科技为您提供专属的一对一项目经理，专注于对您项目的全面管理，并按照日报，周报，月报的形式，主动为您进行定期工作进展汇报。同时以周例会的形式，协同研讨项目方向，避免传统开发的弊端，让您全程参与项目开发，查看开发进度，省心、放心、安心！"}],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro2/img5.png"
      }]
    },{
      topic: "公众号代运营",
      time: "2018-05-15 16:20",
      contentList: [{
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img1.png"
      }, {
        detail: [{
          title:"微信运营：这个费精力无效果的难题交给我们-",
          specialFonts:"95创享科技"
        }, {
          title: "95创享帮您实现高效的自媒体推广：",
        },{
          title:"专题策划、社群搭建、引导转化、舆论公关、申请代办、定义形象",
        }, {
          title: "通过微信公众平台将企业品牌展示给微信用户，减少宣传成本，建立企业与消费者、客户的一对一互动和沟通。直接面对消费者进行：促销、推广、宣传、售后等。",
        }, {
          title: "基础服务：",
          description: "微信公众账号开通、认证；微信平台信息完善；自定义菜单功能；设置自动回复接口；微信内容推送；运营汇报月报",
        }, {
          title: "增值服务：",
          description: "人工在线客服；微信数据分析；微信活动营销：活动策划、推广及执行",
        }, {
          title: "开发服务：",
          description: "微活动营销系统、微信会员卡、微信商城、社交传播工具",
        }, {
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img2.png",
          text: "1对1服务，专岗专人为您提供专属的品牌运营服务"
        }, {
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img3.png",
          text: "团队成员均有五年以上互联网品牌营经验，多年教育行业工作经验"
        }, {
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img4.png",
          text: "成熟的团队管理模式，高默契度的团队协作"
        }, {
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img5.png",
          text: "从策划到执行，与您高频次沟通，您能知悉我们每一步的工作内容与结果"
        }, {
          imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img6.png",
          text: "不仅提升了企业品牌影响力，更传递了品牌营销的运作理念和管理模式"
        }],
        text: [{ text: "将为您构筑属于您的运营体系，完善的服务流程让您无后顾之忧。", specialFonts: "95创享科技"}],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro3/img7.png"
      }]
    }, {
      topic: "数据分析",
      time: "2018-05-15 16:52",
      contentList: [{
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro4/img1.png"
      }, {
        mainTitle: "标准化大数据架构平台",
        text: [{ text: "95创享科技将大数据底层数据科技架构使用容器技术进行标准化和产品化,适用于各种需要实施大数据应用的行业和领域。"}],
      }, {
        mainTitle: "超强数据管理后台",
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro4/img2.png"
      }, {
        text: [{ text: "95创享拥有无限存储空间，7*24小时监控报警及救援机制。商户后台采用企业级分布架构部署，拥有多个厂商的底层硬件支持。"}],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro4/img3.png"
      }, {
        mainTitle: "分布式数据采集及管理",
        text: [{ text: "采用实时处理框架: 支持PB级数据实时处理，多数据源实时采集和存储，支持秒级实时查询，在线实时流式数据分析。" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro4/img4.png"
      }, {
        mainTitle: "高性能流数据处理",
        text: [{ text: "轻松对接现有业务系统，快速搭建大数据处理平台，挖掘沉淀数据的价值。" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro4/img5.png"
      }, {
        mainTitle: "企业级大数据应用平台",
        text: [{ text: "帮助企业从零开始快速搭建基于云计算和大数据的分布式应用云平台。" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro4/img6.png"
      }]
    }, {
      topic: "增值服务",
      time: "2018-05-15 17:04",
      contentList: [{
        mainTitle: "平面设计",
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro5/img1.png"
      }, {
        text: [{ text: "95创享科技的设计团队积累多年在界面设计方面的经验，提供以定性研究为主的设计服务，基于长期在产品品牌策划、产品用户研究、趋势研究等方面的专注，为客户提供完整的产品开发解决方案。服务包括：移动应用设计、网站设计、印刷及数字内容的设计" }],
      }, {
        mainTitle: "营销传播",
        text: [{ text: "95创享科技凭借多年营销推广实战经验，服务众多中小型企业，为客户提升品牌知名度。95创享科技的营销团队专注于：" }],
      }, {
        text: [{ text: "整合数据、内容、平台，向客户传递产品信息及品牌价值", specialFonts: "整合营销：" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro5/img2.png"
      }, {
        text: [{ text: "通过微信、微博的营销大号资源，让品牌产品快速传播", specialFonts: "新媒体营销：" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro5/img3.png"
      }, {
        text: [{ text: "利用网络全面传播导向性信息，包括舆论、意见、评价及品牌声音", specialFonts: "口碑营销：" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro5/img4.png"
      }, {
        text: [{ text: "借事而造势，核心话题扩大，带来裙带效应，达到爆发性增长", specialFonts: "事件营销：" }],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro5/img5.png"
      }, {
        mainTitle: "企业孵化",
        text: [{ text: "95创享科技公司通过科技创业孵化链条来帮助温哥华本土企业建立孵化服务体系。为中小企业提供便利的创新创业环境要素、降低其创业成本和创业风险，帮助中小企业加速裂变、快速成长。"}],
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro5/img6.png"
      }]
    }, {
      topic: "开发流程",
      time: "2018-05-15 17:23",
      contentList: [{
        imgUrl: "https://qswebsite.oss-cn-beijing.aliyuncs.com/productService/pro6/process.png"
      }]
    }],
    content:""
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      content: this.data.page[options.index]
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
  backPage:function(){
    wx.navigateBack({
      delta: 1
    })
  }
})