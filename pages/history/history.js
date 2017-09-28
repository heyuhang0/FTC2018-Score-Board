// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    results: [],
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
    if (wx.getStorageSync('results') == []) {
      this.setData({
        results: [{
          message: "无数据，你可以在计分器中保存比分",
          color: "#607d8b",
          style: "font-size: medium",
        }]
      })
    } else {
      this.setData({
        results: (wx.getStorageSync('results') || []).map(result => {
          var color;
          var pointer = 0;
          if (result[0] > result[1])
            color = "#e55c5c";
          else if (result[0] < result[1])
            color = "#5c8ee5";
          else
            color = "#607d8b";
          return ({ 
            message: result[pointer++] + " : " + result[pointer++], 
            color: color,
            style:"",
            r0: result[pointer++], b0: result[pointer++],
            r1: result[pointer++], b1: result[pointer++],
            r2: result[pointer++], b2: result[pointer++], 
            r3: result[pointer++], b3: result[pointer++], 
            r4: result[pointer++], b4: result[pointer++], 
            r5: result[pointer++], b5: result[pointer++], 
            r6: result[pointer++], b6: result[pointer++],
            r7: result[pointer++], b7: result[pointer++],
            r8: result[pointer++], b8: result[pointer++],
            r9: result[pointer++], b9: result[pointer++],
            r10: result[pointer++], b10: result[pointer++],
            r11: result[pointer++], b11: result[pointer++], 
            r12: result[pointer++], b12: result[pointer++],
            r13: result[pointer++], b13: result[pointer++], 
          });
        }),
      })
    }
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
  
  }
})