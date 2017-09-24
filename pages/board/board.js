var az = 30; // az = auto zhubao 自动珠宝分数，其余同理
var af = 15;
var at = 10;
var ap = 30;
var mp = 20;

var redTotalScore = 0;
var blueTotalScore = 0;

var raz = 0; // raz = red auto zhubao 红方自动珠宝数,其余同理
var raf = 0;
var rat = 0;
var rap = 0;
var rapt;
var rmp = 0;
var rmy = 0;
var rmyt = "遗骸位置";
var rmz = false;

var baz = 0;
var baf = 0;
var bat = 0;
var bap = 0;
var bapt;
var bmp = 0;
var bmy = 0;
var bmyt = "遗骸位置";
var bmz = false;

// pages/board/board.js
Page(
  {
  /**
   * 页面的初始数据
   */
  data: {
    redTotalScore: 0,
    raz: 0,
    raf: 0,
    rat: 0,
    rap: "***|***",
    rmp: 0,
    rmy: 0,
    rmyt: "遗骸位置",
    rmz: false,

    blueTotalScore: 0,
    baz: 0,
    baf: 0,
    bat: 0,
    bap: "***|***",
    bmp: 0,
    bmy: 0,
    bmyt: "遗骸位置",
    bmz: false,
  },
  clearAll: function () {
    redTotalScore = 0;
    blueTotalScore = 0;

    raz = 0;
    raf = 0;
    rat = 0;
    rap = 0;
    rapt = "***|***";
    rmp = 0;
    rmy = 0;
    rmz = false;

    baz = 0;
    baf = 0;
    bat = 0;
    bap = 0;
    bapt = "***|***";
    bmp = 0;
    bmy = 0;
    bmz = false;
    this.refresh();
  },
  refresh: function () {
    redTotalScore = az * raz + af * raf + at * rat + ap * rap + mp * rmp;
    switch (rmy) {
      case 0:
        rmyt = "遗骸位置"
      break;
      case 1:
        redTotalScore += 10;
        rmyt = "遗骸在1区"
      break;
      case 2:
        redTotalScore += 20;
        rmyt = "遗骸在2区"
      break;
      case 3:
        redTotalScore += 40;
        rmyt = "遗骸在3区"
      break;
    }
    if (rmz) {
      redTotalScore += 15;
    }
    this.setData({
      redTotalScore: redTotalScore,
      raz: raz,
      raf: raf,
      rat: rat,
      rap: rapt,
      rmp: rmp,
      rmy: rmy,
      rmyt: rmyt,
      rmz: rmz,
    });

    blueTotalScore = az * baz + af * baf + at * bat + ap * bap + mp * bmp;
    switch (bmy) {
      case 0:
        bmyt = "遗骸位置";
      break;
      case 1:
        blueTotalScore += 10;
        bmyt = "遗骸在1区";
        break;
      case 2:
        blueTotalScore += 20;
        bmyt = "遗骸在2区";
        break;
      case 3:
        blueTotalScore += 40;
        bmyt = "遗骸在3区";
        break;
    }
    if (bmz) {
      blueTotalScore += 15;
    }
    this.setData({
      blueTotalScore: blueTotalScore,
      baz: baz,
      baf: baf,
      bat: bat,
      bap: bapt,
      bmp: bmp,
      bmy: bmy,
      bmyt: bmyt,
      bmz: bmz,
    });
  },
  //红色自动======================================================================================
  raza: function () {
    if (raz < 4) // 在颜色识别错误的情况下可能大于2
      raz++;
    if (raz + baz > 4) //总数不可能大于4
      baz = 4 - raz;
    this.refresh();
  },
  razm: function () {
    if (raz > 0)
      raz--;
    this.refresh();
  },

  rafa: function () {
    raf++;
    this.refresh();
  },
  rafm: function () {
    if (raf > 0)
      raf--;
    this.refresh();
  },

  rata: function () {
    if (rat < 2)
      rat++;
    this.refresh();
  },
  ratm: function () {
    if (rat > 0)
      rat--;
    this.refresh();
  },

  rapt: function () {
    if (rap == 0) {
      rap = 1;
      rapt = Math.round(Math.random() * 900 + 100).toString() + "|***";
    } else if (rap == 1) {
      rap = 2;
      rapt = Math.round(Math.random() * 900 + 100).toString()
        + "|" + Math.round(Math.random() * 900 + 100).toString();
    } else {
      rap = 0;
      rapt = "***|***";
    }
    this.refresh();
  },
  //红色手动======================================================================================
  rmpa: function () {
    if (rmp < 2)
      rmp++;
    this.refresh();
  },
  rmpm: function () {
    if (rmp > 0)
      rmp--;
    this.refresh();
  },
  relicPositionChangeR: function(e) {
    rmy = e.detail.value;
    this.refresh();
  },
  relicStandR: function(e) {
    rmz = e.detail.value;
    this.refresh();
  },
  //蓝色自动======================================================================================
  baza: function () {
    if (baz < 4)
      baz++;
    if (raz + baz > 4) //总数不可能大于4
      raz = 4 - baz;
    this.refresh();
  },
  bazm: function () {
    if (baz > 0)
      baz--;
    this.refresh();
  },

  bafa: function () {
    baf++;
    this.refresh();
  },
  bafm: function () {
    if (baf > 0)
      baf--;
    this.refresh();
  },

  bata: function () {
    if (bat < 2)
      bat++;
    this.refresh();
  },
  batm: function () {
    if (bat > 0)
      bat--;
    this.refresh();
  },

  bapt: function () {
    if (bap == 0) {
      bap = 1;
      bapt = Math.round(Math.random() * 900 + 100).toString() + "|***";
    } else if (bap == 1) {
      bap = 2;
      bapt = Math.round(Math.random() * 900 + 100).toString()
        + "|" + Math.round(Math.random() * 900 + 100).toString();
    } else {
      bap = 0;
      bapt = "***|***";
    }
    this.refresh();
  },
  //蓝色手动======================================================================================
  bmpa: function () {
    if (bmp < 2)
      bmp++;
    this.refresh();
  },
  bmpm: function () {
    if (bmp > 0)
      bmp--;
    this.refresh();
  },
  relicPositionChangeB: function (e) {
    bmy = e.detail.value;
    this.refresh();
  }, 
  relicStandB: function (e) {
    bmz = e.detail.value;
    this.refresh();
  },
  //其它===========================================================================================
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

  }
})