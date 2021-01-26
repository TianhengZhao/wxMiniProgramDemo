import common from "../../utils/common.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [   // 无服务端数据，先自己定义
      {
        name: "名称1",
        author: "作者1",
        picUrl: "/images/rec_saye.jpg",
        time: "2016.10.30"
      },
      {
        name: "名称2",
        author: "作者2",
        picUrl: "/images/rec_wzxhndrs.jpg",
        time: "2018.11.10"
      },
      {
        name: "名称3",
        author: "作者3",
        picUrl: "/images/rec_brsg.jpg",
        time: "2017.12.24"
      },
      {
        name: "名称4",
        author: "作者4",
        picUrl: "/images/rec_cnlg.jpg",
        time: "2020.07.14"
      }
    ]
  },

  /*
  getRecReq: () => {
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',  // 请求服务器
      success: res => {
        res.data.forEach( item => {
          item.name = common.hideLongStr(item.name, 14)
        })
        this.setData({
          dataList: res.data
        })
      }
    })
  },
  */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getRecReq()
  }
})