// 计时器相关
function timer(that, second, lastDate) {
  if (stopTimer == true)
    return;
  if (second == pause) {
    state = pause;
    return;
  } else if (state == pause && second != resume) {
    resume = second;
  } else if (second > 120) {
    state = auto;
  } else if (state == auto) {
    state = autoManualPause;
  } else if (second > 0) {
    state = manual;
  } else {
    state = stop;
  }

  // 校准timer
  var dateNow = new Date().getTime();
  if (lastDate != null) {
    second = second + 0.1 - (dateNow - lastDate) / 1000;
  }
  lastDate = dateNow;

  var timerText = Math.floor(second / 60) + ":";
  if (Math.round(second % 60) >= 10)
    timerText += Math.round(second % 60);
  else
    timerText += "0" + Math.round(second % 60);
  if (state == auto) {
    timerText += " 自动阶段";
  } else if (state == manual) {
    timerText += " 手动阶段";
  } else if (state == autoManualPause) {
    timerText = "2:00 已暂停,轻触继续";
  } else if (state == pause && second != pause) {
    timerText += " 已暂停,轻触继续";
  } else if (state == stop) {
    timerText = " 已停止,轻触重新计时";
  }
  that.setData({
    timer: timerText,
  });

  if (state == stop || state == autoManualPause || state == pause)
    return;
  var time = setTimeout(function () {
    timer(that, second - 0.1, lastDate);
  }, 100)
}
var stopTimer = true;
var resume;
var stop = 0;
var auto = 1;
var manual = 2;
var pause = 842998483;
var autoManualPause = 4;

var state = stop;

// 全局变量
var az = 30; // az = auto zhubao 自动珠宝分数，其余同理
var af = 15;
var at = 10;
var ap = 30;
var mp = 20;
var mMajorP = 40;
var mMinorP = 10;

var redTotalScore = 0;
var blueTotalScore = 0;

var raz = 0; // raz = red auto zhubao 红方自动珠宝数,其余同理
var raf = 0;
var rat = 0;
var rap = 0;
var rapt = "***|***";
var raptt = "破解密码";
var rmp = 0;
var rmy = 0;
var rmy2 = 0;
var rmyt = "遗骸1位置";
var rmyt2 = "遗骸2位置"
var rmz = false;
var rmz2 = false;
var rmf = 0;
var rmr = 0;
var rmc = 0;
var rmWholeBoard = 0;
var rmMajorP = 0;
var rmMinorP = 0;
var rAutoCompute = true;

var baz = 0;
var baf = 0;
var bat = 0;
var bap = 0;
var bapt = "***|***";
var baptt = "破解密码";
var bmp = 0;
var bmy = 0;
var bmy2 = 0;
var bmyt = "遗骸1位置";
var bmyt2 = "遗骸2位置"
var bmz = false;
var bmz2 = false;
var bmf = 0;
var bmr = 0;
var bmc = 0;
var bmWholeBoard = 0;
var bmMajorP = 0;
var bmMinorP = 0;
var bAutoCompute = true;

var rb1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var rb2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var bb1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var bb2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var boardColor1 = "white";
var boardColor2 = "grey";

var rbsum = 0;
var bbsum = 0;

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
      raptt: "破解密码",
      rmp: 0,
      rmy: 0,
      rmy2: 0,
      rmyt: "遗骸1位置",
      rmyt2: "遗骸2位置",
      rmz: false,
      rmz2: false,
      rmf: rmf,
      rmr: rmr,
      rmc: rmc,
      rmWholeBoard: rmWholeBoard,
      rmMajorP: rmMajorP,
      rmMinorP: rmMinorP,
      rAutoCompute: rAutoCompute,

      blueTotalScore: 0,
      baz: 0,
      baf: 0,
      bat: 0,
      bap: "***|***",
      baptt: "破解密码",
      bmp: 0,
      bmy: 0,
      bmy2: 0,
      bmyt: "遗骸1位置",
      bmyt2: "遗骸2位置",
      bmz: false,
      bmz2: false,
      bmf: bmf,
      bmr: bmr,
      bmc: bmc,
      bmWholeBoard: bmWholeBoard,
      bmMajorP: bmMajorP,
      bmMinorP: bmMinorP,
      bAutoCompute: bAutoCompute,

      rTip: "",
      bTip: "",
      timer: "2:30 轻触开始计时",
      // 自动生成的控制符文板的垃圾代码
      rb100: 0,
      rb101: 0,
      rb102: 0,
      rb110: 0,
      rb111: 0,
      rb112: 0,
      rb120: 0,
      rb121: 0,
      rb122: 0,
      rb130: 0,
      rb131: 0,
      rb132: 0,
      rb200: 0,
      rb201: 0,
      rb202: 0,
      rb210: 0,
      rb211: 0,
      rb212: 0,
      rb220: 0,
      rb221: 0,
      rb222: 0,
      rb230: 0,
      rb231: 0,
      rb232: 0,
      bb100: 0,
      bb101: 0,
      bb102: 0,
      bb110: 0,
      bb111: 0,
      bb112: 0,
      bb120: 0,
      bb121: 0,
      bb122: 0,
      bb130: 0,
      bb131: 0,
      bb132: 0,
      bb200: 0,
      bb201: 0,
      bb202: 0,
      bb210: 0,
      bb211: 0,
      bb212: 0,
      bb220: 0,
      bb221: 0,
      bb222: 0,
      bb230: 0,
      bb231: 0,
      bb232: 0,
    },
    timerButton: function () {
      stopTimer = false;
      if (state == stop)
        timer(this, 150);
      else if (state == autoManualPause)
        timer(this, 119);
      else if (state == pause)
        timer(this, resume);
      else
        timer(this, pause);
    },
    clearAll: function () {
      var that = this;
      wx.showModal({
        title: '确认删除?',
        success: function (res) {
          if (res.confirm) {

            redTotalScore = 0;
            blueTotalScore = 0;

            raz = 0;
            raf = 0;
            rat = 0;
            rap = 0;
            rapt = "***|***";
            rmp = 0;
            rmy = 0;
            rmy2 = 0;
            rmz = false;
            rmz2 = false;
            rmf = 0;
            rmr = 0;
            rmc = 0;
            rmWholeBoard = 0;
            rmMajorP = 0;
            rmMinorP = 0;
            rAutoCompute = true;

            baz = 0;
            baf = 0;
            bat = 0;
            bap = 0;
            bapt = "***|***";
            bmp = 0;
            bmy = 0;
            bmy2 = 0;
            bmz = false;
            bmz2 = false;
            bmf = 0;
            bmr = 0;
            bmc = 0;
            bmWholeBoard = 0;
            bmMajorP = 0;
            bmMinorP = 0;
            bAutoCompute = true;

            rb1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
            rb2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
            bb1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
            bb2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];

            stopTimer = true;
            state = stop;
            that.setData({
              timer: "2:30 轻触开始计时",
            });

            that.refresh();
          }
        }
      });
    },
    saveData: function () {
      var results = wx.getStorageSync('results') || []
      var redRelic1 = "无"
      if (rmy > 0) {
        redRelic1 = rmy + "区";
        if (rmz) {
          redRelic1 += "(站立)"
        }
      }
      var redRelic2 = "无"
      if (rmy2 > 0) {
        redRelic2 = rmy2 + "区";
        if (rmz2) {
          redRelic2 += "(站立)"
        }
      }
      var blueRelic1 = "无"
      if (bmy > 0) {
        blueRelic1 = bmy + "区";
        if (bmz) {
          blueRelic1 += "(站立)"
        }
      }
      var blueRelic2 = "无"
      if (bmy2 > 0) {
        blueRelic2 = bmy2 + "区";
        if (bmz2) {
          blueRelic2 += "(站立)"
        }
      }
      results.unshift(
        [redTotalScore, blueTotalScore,
          raz, baz,
          raf, baf,
          rat, bat,
          rap, bap,
          rmf - raf, bmf - baf,
          rmr, bmr,
          rmc, bmc,
          rmWholeBoard, bmWholeBoard,
          rmp, bmp,
          redRelic1, blueRelic1,
          redRelic2, blueRelic2,
          rmMinorP, bmMinorP,
          rmMajorP, bmMajorP
        ]);
      wx.setStorageSync('results', results)
      wx.showToast({
        title: '已保存比分',
        icon: 'success'
      });
    },
    refresh: function () {
      wx.vibrateShort();
      redTotalScore = az * raz + af * raf + at * rat + ap * rap + mp * rmp + mMajorP * bmMajorP + mMinorP * bmMinorP;
      redTotalScore += this.computeBoardScoreRed();
      switch (rmy) {
        case 0:
          rmyt = "遗骸1位置"
          break;
        case 1:
          redTotalScore += 10;
          rmyt = "遗骸1在1区"
          break;
        case 2:
          redTotalScore += 20;
          rmyt = "遗骸1在2区"
          break;
        case 3:
          redTotalScore += 40;
          rmyt = "遗骸1在3区"
          break;
      }
      switch (rmy2) {
        case 0:
          rmyt2 = "遗骸2位置"
          break;
        case 1:
          redTotalScore += 10;
          rmyt2 = "遗骸2在1区"
          break;
        case 2:
          redTotalScore += 20;
          rmyt2 = "遗骸2在2区"
          break;
        case 3:
          redTotalScore += 40;
          rmyt2 = "遗骸2在3区"
          break;
      }
      if (rmz) {
        redTotalScore += 15;
      }
      if (rmz2) {
        redTotalScore += 15;
      }
      if (rap > 0) {
        raptt = "破解了" + rap + "个密码";
      } else {
        raptt = "破解密码";
      }
      this.setData({
        redTotalScore: redTotalScore,
        raz: raz,
        raf: raf,
        rat: rat,
        rap: rapt,
        raptt: raptt,
        rmp: rmp,
        rmy: rmy,
        rmy2: rmy2,
        rmyt: rmyt,
        rmyt2: rmyt2,
        rmz: rmz,
        rmz2: rmz2,
        rmf: rmf,
        rmr: rmr,
        rmc: rmc,
        rmWholeBoard: rmWholeBoard,
        rmMajorP: rmMajorP,
        rmMinorP: rmMinorP,
        rAutoCompute: rAutoCompute,
      });

      blueTotalScore = az * baz + af * baf + at * bat + ap * bap + mp * bmp + mMajorP * rmMajorP + mMinorP * rmMinorP;
      blueTotalScore += this.computeBoardScoreBlue();
      switch (bmy) {
        case 0:
          bmyt = "遗骸1位置";
          break;
        case 1:
          blueTotalScore += 10;
          bmyt = "遗骸1在1区";
          break;
        case 2:
          blueTotalScore += 20;
          bmyt = "遗骸1在2区";
          break;
        case 3:
          blueTotalScore += 40;
          bmyt = "遗骸1在3区";
          break;
      }
      switch (bmy2) {
        case 0:
          bmyt2 = "遗骸2位置";
          break;
        case 1:
          blueTotalScore += 10;
          bmyt2 = "遗骸2在1区";
          break;
        case 2:
          blueTotalScore += 20;
          bmyt2 = "遗骸2在2区";
          break;
        case 3:
          blueTotalScore += 40;
          bmyt2 = "遗骸2在3区";
          break;
      }
      if (bmz) {
        blueTotalScore += 15;
      }
      if (bmz2) {
        blueTotalScore += 15;
      }
      if (bap > 0) {
        baptt = "破解了" + bap + "个密码";
      } else {
        baptt = "破解密码";
      }
      this.setData({
        blueTotalScore: blueTotalScore,
        baz: baz,
        baf: baf,
        bat: bat,
        bap: bapt,
        baptt: baptt,
        bmp: bmp,
        bmy: bmy,
        bmy2: bmy2,
        bmyt: bmyt,
        bmyt2: bmyt2,
        bmz: bmz,
        bmz2: bmz2,
        bmf: bmf,
        bmr: bmr,
        bmc: bmc,
        bmWholeBoard: bmWholeBoard,
        bmMajorP: bmMajorP,
        bmMinorP: bmMinorP,
        bAutoCompute: bAutoCompute,
      });

      var rTip = "";
      if (rbsum < raf) {
        rTip = "(请填补自动程序的符文板,还剩" + (raf - rbsum) + "个)";
      }
      if (!rAutoCompute) {
        rTip = "(已禁用)";
      }
      var bTip = "";
      if (bbsum < baf) {
        bTip = "(请填补自动程序的符文板,还剩" + (baf - bbsum) + "个)";
      }
      if (!bAutoCompute) {
        bTip = "(已禁用)";
      }
      this.setData({
        rTip: rTip,
        bTip: bTip,
      });
      this.refreshBoard();
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
    rmMajorPa: function () {
      rmMajorP++;
      this.refresh();
    },
    rmMajorPm: function () {
      if (rmMajorP > 0)
        rmMajorP--;
      this.refresh();
    },
    rmMinorPa: function () {
      rmMinorP++;
      this.refresh();
    },
    rmMinorPm: function () {
      if (rmMinorP > 0)
        rmMinorP--;
      this.refresh();
    },
    relicPositionChangeR: function (e) {
      rmy = e.detail.value;
      if (rmy == 0)
        rmz = false;
      this.refresh();
    },
    relicPositionChangeR2: function (e) {
      rmy2 = e.detail.value;
      if (rmy2 == 0)
        rmz2 = false;
      this.refresh();
    },
    relicStandR: function (e) {
      if (rmy > 0)
        rmz = e.detail.value;
      this.refresh();
    },
    relicStandR2: function (e) {
      if (rmy2 > 0)
        rmz2 = e.detail.value;
      this.refresh();
    },
    //红方高级======================================================================================
    rAutoListener: function (e) {
      if (rAutoCompute == true) {
        var that = this;
        wx.showModal({
          title: '注意',
          content: '打开后将禁用符文板自动计分功能，且无法关闭(清空后将复原)',
          success: function (res) {
            if (res.confirm) {
              rAutoCompute = false;
              that.refresh();
            }
          }
        });
      } else {
        wx.showToast({
          title: '操作不可撤回',
          image: '/images/warning.png'
        })
      }
      this.refresh();
    },
    rmfa: function () {
      if (!rAutoCompute) {
        rmf++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmfm: function () {
      if (!rAutoCompute) {
        if (rmf > 0)
          rmf--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmra: function () {
      if (!rAutoCompute) {
        rmr++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmrm: function () {
      if (!rAutoCompute) {
        if (rmr > 0)
          rmr--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmca: function () {
      if (!rAutoCompute) {
        rmc++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmcm: function () {
      if (!rAutoCompute) {
        if (rmc > 0)
          rmc--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmWholeBoarda: function () {
      if (!rAutoCompute) {
        rmWholeBoard++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    rmWholeBoardm: function () {
      if (!rAutoCompute) {
        if (rmWholeBoard > 0)
          rmWholeBoard--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
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
    bmMajorPa: function () {
      bmMajorP++;
      this.refresh();
    },
    bmMajorPm: function () {
      if (bmMajorP > 0)
        bmMajorP--;
      this.refresh();
    },
    bmMinorPa: function () {
      bmMinorP++;
      this.refresh();
    },
    bmMinorPm: function () {
      if (bmMinorP > 0)
        bmMinorP--;
      this.refresh();
    },
    relicPositionChangeB: function (e) {
      bmy = e.detail.value;
      if (bmy == 0)
        bmz = false;
      this.refresh();
    },
    relicStandB: function (e) {
      if (bmy > 0)
        bmz = e.detail.value;
      this.refresh();
    },
    relicPositionChangeB2: function (e) {
      bmy2 = e.detail.value;
      if (bmy2 == 0)
        bmz2 = false;
      this.refresh();
    },
    relicStandB2: function (e) {
      if (bmy2 > 0)
        bmz2 = e.detail.value;
      this.refresh();
    },
    //蓝方高级====================================================================================
    bAutoListener: function (e) {
      if (bAutoCompute == true) {
        var that = this;
        wx.showModal({
          title: '注意',
          content: '打开后将禁用符文板自动计分功能，且无法关闭(清空后将复原)',
          success: function (res) {
            if (res.confirm) {
              bAutoCompute = false;
              that.refresh();
            }
          }
        });
      } else {
        wx.showToast({
          title: '操作不可撤回',
          image: '/images/warning.png'
        })
      }
      this.refresh();
    },
    bmfa: function () {
      if (!bAutoCompute) {
        bmf++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmfm: function () {
      if (!bAutoCompute) {
        if (bmf > 0)
          bmf--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmra: function () {
      if (!bAutoCompute) {
        bmr++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmrm: function () {
      if (!bAutoCompute) {
        if (bmr > 0)
          bmr--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmca: function () {
      if (!bAutoCompute) {
        bmc++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmcm: function () {
      if (!bAutoCompute) {
        if (bmc > 0)
          bmc--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmWholeBoarda: function () {
      if (!bAutoCompute) {
        bmWholeBoard++;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    bmWholeBoardm: function () {
      if (!bAutoCompute) {
        if (bmWholeBoard > 0)
          bmWholeBoard--;
        this.refresh();
      } else {
        wx.showToast({
          title: '请勾选手动计算',
          image: '/images/warning.png'
        })
      }
    },
    //符文板======================================================================================
    compare: function (a, b) {
      var isEqual = true;
      for (var row in a) {
        for (var column in a[0]) {
          if (a[row][column] != b[row][column])
            isEqual = false;
        }
      }
      return isEqual;
    },
    ifCompletedCipher: function (b) {
      var w = boardColor1;
      var g = boardColor2;
      var model1 =
        [[w, g, w],
        [g, w, g],
        [w, g, w],
        [g, w, g]];
      var model2 =
        [[g, w, g],
        [w, g, w],
        [g, w, g],
        [w, g, w]];
      var model3 =
        [[w, g, w],
        [g, w, g],
        [g, w, g],
        [w, g, w]];
      var model4 =
        [[g, w, g],
        [w, g, w],
        [w, g, w],
        [g, w, g]];
      var model5 =
        [[g, w, w],
        [g, g, w],
        [w, g, g],
        [w, w, g]];
      var model6 =
        [[w, g, g],
        [w, w, g],
        [g, w, w],
        [g, g, w]];
      if (this.compare(b, model1))
        return true;
      else if (this.compare(b, model2))
        return true;
      else if (this.compare(b, model3))
        return true;
      else if (this.compare(b, model4))
        return true;
      else if (this.compare(b, model5))
        return true;
      else if (this.compare(b, model6))
        return true;
      else
        return false;
    },
    computeBoardScoreRed: function () {
      if (rAutoCompute) {
        var score = 0;
        // 统计普通得分
        var sum = 0;
        var b = rb1;
        for (var line in b) {
          for (var e in b[0]) {
            if (b[line][e] != 0)
              sum++;
          }
        }
        b = rb2;
        for (var line in b) {
          for (var e in b[0]) {
            if (b[line][e] != 0)
              sum++;
          }
        }
        rbsum = sum;
        if (sum > raf) { // 排除自动的得分
          rmf = sum;
          score += (sum - raf) * 2;
        } else {
          rmf = raf;
        }
        //统计行得分
        b = rb1;
        rmr = 0;
        for (var row in b) {
          var isFull = true;
          for (var column in b[0]) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 10;
            rmr++;
          }
        }
        b = rb2;
        for (var row in b) {
          var isFull = true;
          for (var column in b[0]) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 10;
            rmr++;
          }
        }
        // 统计列得分
        b = rb1;
        rmc = 0;
        for (var column in b[0]) {
          var isFull = true;
          for (var row in b) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 20;
            rmc++;
          }
        }
        b = rb2;
        for (var column in b[0]) {
          var isFull = true;
          for (var row in b) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            rmc++;
            score += 20;
          }
        }
        rmWholeBoard = 0;
        if (this.ifCompletedCipher(rb1)) {
          score += 30;
          rmWholeBoard++;
        }
        if (this.ifCompletedCipher(rb2)) {
          score += 30;
          rmWholeBoard++;
        }
        return score;
      } else {
        if (rmf < raf)
          rmf = raf;
        return 2 * (rmf - raf) + 10 * rmr + 20 * rmc + 30 * rmWholeBoard;
      }
    },
    computeBoardScoreBlue: function () {
      if (bAutoCompute) {
        var score = 0;
        // 统计普通得分
        var sum = 0;
        var b = bb1;
        for (var line in b) {
          for (var e in b[0]) {
            if (b[line][e] != 0)
              sum++;
          }
        }
        b = bb2;
        for (var line in b) {
          for (var e in b[0]) {
            if (b[line][e] != 0)
              sum++;
          }
        }
        bbsum = sum;
        if (sum > baf) { // 排除自动的得分
          score += (sum - baf) * 2;
          bmf = sum;
        } else {
          bmf = baf;
        }
        //统计行得分
        b = bb1;
        bmr = 0;
        for (var row in b) {
          var isFull = true;
          for (var column in b[0]) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 10;
            bmr++;
          }
        }
        b = bb2;
        for (var row in b) {
          var isFull = true;
          for (var column in b[0]) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 10;
            bmr++;
          }
        }
        // 统计列得分
        b = bb1;
        bmc = 0;
        for (var column in b[0]) {
          var isFull = true;
          for (var row in b) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 20;
            bmc++;
          }
        }
        b = bb2;
        for (var column in b[0]) {
          var isFull = true;
          for (var row in b) {
            if (b[row][column] == 0)
              isFull = false;
          }
          if (isFull) {
            score += 20;
            bmc++;
          }
        }
        bmWholeBoard = 0;
        if (this.ifCompletedCipher(bb1)) {
          score += 30;
          bmWholeBoard++;
        }
        if (this.ifCompletedCipher(bb2)) {
          score += 30;
          bmWholeBoard++;
        }
        return score;
      } else {
        if (bmf < baf)
          bmf = baf;
        return 2 * (bmf - baf) + 10 * bmr + 20 * bmc + 30 * bmWholeBoard;
      }
    },
    showDisableWarning: function () {
      wx.showToast({
        title: '已被禁用',
        image: '/images/warning.png'
      })
    },
    //垃圾代码警告!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //PS:用不来js,只好又写了个java程序批量生成js代码=================================================
    refreshBoard: function () {
      this.setData({
        rb100: rb1[0][0],
        rb101: rb1[0][1],
        rb102: rb1[0][2],
        rb110: rb1[1][0],
        rb111: rb1[1][1],
        rb112: rb1[1][2],
        rb120: rb1[2][0],
        rb121: rb1[2][1],
        rb122: rb1[2][2],
        rb130: rb1[3][0],
        rb131: rb1[3][1],
        rb132: rb1[3][2],
        rb200: rb2[0][0],
        rb201: rb2[0][1],
        rb202: rb2[0][2],
        rb210: rb2[1][0],
        rb211: rb2[1][1],
        rb212: rb2[1][2],
        rb220: rb2[2][0],
        rb221: rb2[2][1],
        rb222: rb2[2][2],
        rb230: rb2[3][0],
        rb231: rb2[3][1],
        rb232: rb2[3][2],
        bb100: bb1[0][0],
        bb101: bb1[0][1],
        bb102: bb1[0][2],
        bb110: bb1[1][0],
        bb111: bb1[1][1],
        bb112: bb1[1][2],
        bb120: bb1[2][0],
        bb121: bb1[2][1],
        bb122: bb1[2][2],
        bb130: bb1[3][0],
        bb131: bb1[3][1],
        bb132: bb1[3][2],
        bb200: bb2[0][0],
        bb201: bb2[0][1],
        bb202: bb2[0][2],
        bb210: bb2[1][0],
        bb211: bb2[1][1],
        bb212: bb2[1][2],
        bb220: bb2[2][0],
        bb221: bb2[2][1],
        bb222: bb2[2][2],
        bb230: bb2[3][0],
        bb231: bb2[3][1],
        bb232: bb2[3][2],
      })
    },
    rb100: function () {
      if (rAutoCompute) {
        if (rb1[0][0] == 0)
          rb1[0][0] = boardColor1;
        else if (rb1[0][0] == boardColor1)
          rb1[0][0] = boardColor2;
        else
          rb1[0][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb101: function () {
      if (rAutoCompute) {
        if (rb1[0][1] == 0)
          rb1[0][1] = boardColor1;
        else if (rb1[0][1] == boardColor1)
          rb1[0][1] = boardColor2;
        else
          rb1[0][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb102: function () {
      if (rAutoCompute) {
        if (rb1[0][2] == 0)
          rb1[0][2] = boardColor1;
        else if (rb1[0][2] == boardColor1)
          rb1[0][2] = boardColor2;
        else
          rb1[0][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb110: function () {
      if (rAutoCompute) {
        if (rb1[1][0] == 0)
          rb1[1][0] = boardColor1;
        else if (rb1[1][0] == boardColor1)
          rb1[1][0] = boardColor2;
        else
          rb1[1][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb111: function () {
      if (rAutoCompute) {
        if (rb1[1][1] == 0)
          rb1[1][1] = boardColor1;
        else if (rb1[1][1] == boardColor1)
          rb1[1][1] = boardColor2;
        else
          rb1[1][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb112: function () {
      if (rAutoCompute) {
        if (rb1[1][2] == 0)
          rb1[1][2] = boardColor1;
        else if (rb1[1][2] == boardColor1)
          rb1[1][2] = boardColor2;
        else
          rb1[1][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb120: function () {
      if (rAutoCompute) {
        if (rb1[2][0] == 0)
          rb1[2][0] = boardColor1;
        else if (rb1[2][0] == boardColor1)
          rb1[2][0] = boardColor2;
        else
          rb1[2][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb121: function () {
      if (rAutoCompute) {
        if (rb1[2][1] == 0)
          rb1[2][1] = boardColor1;
        else if (rb1[2][1] == boardColor1)
          rb1[2][1] = boardColor2;
        else
          rb1[2][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb122: function () {
      if (rAutoCompute) {
        if (rb1[2][2] == 0)
          rb1[2][2] = boardColor1;
        else if (rb1[2][2] == boardColor1)
          rb1[2][2] = boardColor2;
        else
          rb1[2][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb130: function () {
      if (rAutoCompute) {
        if (rb1[3][0] == 0)
          rb1[3][0] = boardColor1;
        else if (rb1[3][0] == boardColor1)
          rb1[3][0] = boardColor2;
        else
          rb1[3][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb131: function () {
      if (rAutoCompute) {
        if (rb1[3][1] == 0)
          rb1[3][1] = boardColor1;
        else if (rb1[3][1] == boardColor1)
          rb1[3][1] = boardColor2;
        else
          rb1[3][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb132: function () {
      if (rAutoCompute) {
        if (rb1[3][2] == 0)
          rb1[3][2] = boardColor1;
        else if (rb1[3][2] == boardColor1)
          rb1[3][2] = boardColor2;
        else
          rb1[3][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb200: function () {
      if (rAutoCompute) {
        if (rb2[0][0] == 0)
          rb2[0][0] = boardColor1;
        else if (rb2[0][0] == boardColor1)
          rb2[0][0] = boardColor2;
        else
          rb2[0][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb201: function () {
      if (rAutoCompute) {
        if (rb2[0][1] == 0)
          rb2[0][1] = boardColor1;
        else if (rb2[0][1] == boardColor1)
          rb2[0][1] = boardColor2;
        else
          rb2[0][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb202: function () {
      if (rAutoCompute) {
        if (rb2[0][2] == 0)
          rb2[0][2] = boardColor1;
        else if (rb2[0][2] == boardColor1)
          rb2[0][2] = boardColor2;
        else
          rb2[0][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb210: function () {
      if (rAutoCompute) {
        if (rb2[1][0] == 0)
          rb2[1][0] = boardColor1;
        else if (rb2[1][0] == boardColor1)
          rb2[1][0] = boardColor2;
        else
          rb2[1][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb211: function () {
      if (rAutoCompute) {
        if (rb2[1][1] == 0)
          rb2[1][1] = boardColor1;
        else if (rb2[1][1] == boardColor1)
          rb2[1][1] = boardColor2;
        else
          rb2[1][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb212: function () {
      if (rAutoCompute) {
        if (rb2[1][2] == 0)
          rb2[1][2] = boardColor1;
        else if (rb2[1][2] == boardColor1)
          rb2[1][2] = boardColor2;
        else
          rb2[1][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb220: function () {
      if (rAutoCompute) {
        if (rb2[2][0] == 0)
          rb2[2][0] = boardColor1;
        else if (rb2[2][0] == boardColor1)
          rb2[2][0] = boardColor2;
        else
          rb2[2][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb221: function () {
      if (rAutoCompute) {
        if (rb2[2][1] == 0)
          rb2[2][1] = boardColor1;
        else if (rb2[2][1] == boardColor1)
          rb2[2][1] = boardColor2;
        else
          rb2[2][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb222: function () {
      if (rAutoCompute) {
        if (rb2[2][2] == 0)
          rb2[2][2] = boardColor1;
        else if (rb2[2][2] == boardColor1)
          rb2[2][2] = boardColor2;
        else
          rb2[2][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb230: function () {
      if (rAutoCompute) {
        if (rb2[3][0] == 0)
          rb2[3][0] = boardColor1;
        else if (rb2[3][0] == boardColor1)
          rb2[3][0] = boardColor2;
        else
          rb2[3][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb231: function () {
      if (rAutoCompute) {
        if (rb2[3][1] == 0)
          rb2[3][1] = boardColor1;
        else if (rb2[3][1] == boardColor1)
          rb2[3][1] = boardColor2;
        else
          rb2[3][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    rb232: function () {
      if (rAutoCompute) {
        if (rb2[3][2] == 0)
          rb2[3][2] = boardColor1;
        else if (rb2[3][2] == boardColor1)
          rb2[3][2] = boardColor2;
        else
          rb2[3][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb100: function () {
      if (bAutoCompute) {
        if (bb1[0][0] == 0)
          bb1[0][0] = boardColor1;
        else if (bb1[0][0] == boardColor1)
          bb1[0][0] = boardColor2;
        else
          bb1[0][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb101: function () {
      if (bAutoCompute) {
        if (bb1[0][1] == 0)
          bb1[0][1] = boardColor1;
        else if (bb1[0][1] == boardColor1)
          bb1[0][1] = boardColor2;
        else
          bb1[0][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb102: function () {
      if (bAutoCompute) {
        if (bb1[0][2] == 0)
          bb1[0][2] = boardColor1;
        else if (bb1[0][2] == boardColor1)
          bb1[0][2] = boardColor2;
        else
          bb1[0][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb110: function () {
      if (bAutoCompute) {
        if (bb1[1][0] == 0)
          bb1[1][0] = boardColor1;
        else if (bb1[1][0] == boardColor1)
          bb1[1][0] = boardColor2;
        else
          bb1[1][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb111: function () {
      if (bAutoCompute) {
        if (bb1[1][1] == 0)
          bb1[1][1] = boardColor1;
        else if (bb1[1][1] == boardColor1)
          bb1[1][1] = boardColor2;
        else
          bb1[1][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb112: function () {
      if (bAutoCompute) {
        if (bb1[1][2] == 0)
          bb1[1][2] = boardColor1;
        else if (bb1[1][2] == boardColor1)
          bb1[1][2] = boardColor2;
        else
          bb1[1][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb120: function () {
      if (bAutoCompute) {
        if (bb1[2][0] == 0)
          bb1[2][0] = boardColor1;
        else if (bb1[2][0] == boardColor1)
          bb1[2][0] = boardColor2;
        else
          bb1[2][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb121: function () {
      if (bAutoCompute) {
        if (bb1[2][1] == 0)
          bb1[2][1] = boardColor1;
        else if (bb1[2][1] == boardColor1)
          bb1[2][1] = boardColor2;
        else
          bb1[2][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb122: function () {
      if (bAutoCompute) {
        if (bb1[2][2] == 0)
          bb1[2][2] = boardColor1;
        else if (bb1[2][2] == boardColor1)
          bb1[2][2] = boardColor2;
        else
          bb1[2][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb130: function () {
      if (bAutoCompute) {
        if (bb1[3][0] == 0)
          bb1[3][0] = boardColor1;
        else if (bb1[3][0] == boardColor1)
          bb1[3][0] = boardColor2;
        else
          bb1[3][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb131: function () {
      if (bAutoCompute) {
        if (bb1[3][1] == 0)
          bb1[3][1] = boardColor1;
        else if (bb1[3][1] == boardColor1)
          bb1[3][1] = boardColor2;
        else
          bb1[3][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb132: function () {
      if (bAutoCompute) {
        if (bb1[3][2] == 0)
          bb1[3][2] = boardColor1;
        else if (bb1[3][2] == boardColor1)
          bb1[3][2] = boardColor2;
        else
          bb1[3][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb200: function () {
      if (bAutoCompute) {
        if (bb2[0][0] == 0)
          bb2[0][0] = boardColor1;
        else if (bb2[0][0] == boardColor1)
          bb2[0][0] = boardColor2;
        else
          bb2[0][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb201: function () {
      if (bAutoCompute) {
        if (bb2[0][1] == 0)
          bb2[0][1] = boardColor1;
        else if (bb2[0][1] == boardColor1)
          bb2[0][1] = boardColor2;
        else
          bb2[0][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb202: function () {
      if (bAutoCompute) {
        if (bb2[0][2] == 0)
          bb2[0][2] = boardColor1;
        else if (bb2[0][2] == boardColor1)
          bb2[0][2] = boardColor2;
        else
          bb2[0][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb210: function () {
      if (bAutoCompute) {
        if (bb2[1][0] == 0)
          bb2[1][0] = boardColor1;
        else if (bb2[1][0] == boardColor1)
          bb2[1][0] = boardColor2;
        else
          bb2[1][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb211: function () {
      if (bAutoCompute) {
        if (bb2[1][1] == 0)
          bb2[1][1] = boardColor1;
        else if (bb2[1][1] == boardColor1)
          bb2[1][1] = boardColor2;
        else
          bb2[1][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb212: function () {
      if (bAutoCompute) {
        if (bb2[1][2] == 0)
          bb2[1][2] = boardColor1;
        else if (bb2[1][2] == boardColor1)
          bb2[1][2] = boardColor2;
        else
          bb2[1][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb220: function () {
      if (bAutoCompute) {
        if (bb2[2][0] == 0)
          bb2[2][0] = boardColor1;
        else if (bb2[2][0] == boardColor1)
          bb2[2][0] = boardColor2;
        else
          bb2[2][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb221: function () {
      if (bAutoCompute) {
        if (bb2[2][1] == 0)
          bb2[2][1] = boardColor1;
        else if (bb2[2][1] == boardColor1)
          bb2[2][1] = boardColor2;
        else
          bb2[2][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb222: function () {
      if (bAutoCompute) {
        if (bb2[2][2] == 0)
          bb2[2][2] = boardColor1;
        else if (bb2[2][2] == boardColor1)
          bb2[2][2] = boardColor2;
        else
          bb2[2][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb230: function () {
      if (bAutoCompute) {
        if (bb2[3][0] == 0)
          bb2[3][0] = boardColor1;
        else if (bb2[3][0] == boardColor1)
          bb2[3][0] = boardColor2;
        else
          bb2[3][0] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb231: function () {
      if (bAutoCompute) {
        if (bb2[3][1] == 0)
          bb2[3][1] = boardColor1;
        else if (bb2[3][1] == boardColor1)
          bb2[3][1] = boardColor2;
        else
          bb2[3][1] = 0;
      }
      else {
        this.showDisableWarning();
      }
      this.refresh();
    },
    bb232: function () {
      if (bAutoCompute) {
        if (bb2[3][2] == 0)
          bb2[3][2] = boardColor1;
        else if (bb2[3][2] == boardColor1)
          bb2[3][2] = boardColor2;
        else
          bb2[3][2] = 0;
      }
      else {
        this.showDisableWarning();
      }
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

/* js代码生成程序(Java)
  public class AutoCodingForScoreBoard {

    public static void main(String[] args) {
        p("// data下的初始化语句");
        for (int a = 1; a <= 2; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 3; c++) {
                    p("rb" + a + b + c + ": 0,");
                }
            }
        }
        for (int a = 1; a <= 2; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 3; c++) {
                    p("bb" + a + b + c + ": 0,");
                }
            }
        }
        p("// 有关函数");
        p("refreshBoard: function () {");
        p(" this.setData({");
        for (int a = 1; a <= 2; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 3; c++) {
                    p("  rb" + a + b + c + ": rb" + a + "[" + b + "][" + c + "],");
                }
            }
        }
        for (int a = 1; a <= 2; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 3; c++) {
                    p("  bb" + a + b + c + ": bb" + a + "[" + b + "][" + c + "],");
                }
            }
        }
        p(" })");
        p("},");
        for (int a = 1; a <= 2; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 3; c++) {
                    p("rb" + a + b + c + ": function () {");
                    p("  if(rAutoCompute) {\n" +
                            "   if(rb"+a+"["+b+"]["+c+"] == 0)\r\n" +
                            "     rb"+a+"["+b+"]["+c+"] = boardColor1;\r\n" +
                            "   else if(rb"+a+"["+b+"]["+c+"] == boardColor1)\r\n" +
                            "     rb"+a+"["+b+"]["+c+"] = boardColor2;\r\n" +
                            "   else\r\n" +
                            "     rb"+a+"["+b+"]["+c+"] = 0;\r\n" +
                            "  }\n" +
                            "  else {\n" +
                            "   this.showDisableWarning();\n" +
                            "  }\n" +
                            "  this.refresh();\r\n" +
                            " },"
                            );
                }
            }
        }
        for (int a = 1; a <= 2; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 3; c++) {
                    p("bb" + a + b + c + ": function () {");
                    p("  if(bAutoCompute) {\n" +
                            "  if(bb"+a+"["+b+"]["+c+"] == 0)\r\n" +
                            "    bb"+a+"["+b+"]["+c+"] = boardColor1;\r\n" +
                            "  else if(bb"+a+"["+b+"]["+c+"] == boardColor1)\r\n" +
                            "    bb"+a+"["+b+"]["+c+"] = boardColor2;\r\n" +
                            "  else\r\n" +
                            "    bb"+a+"["+b+"]["+c+"] = 0;\r\n" +
                            "  }\n" +
                            "  else {\n" +
                            "   this.showDisableWarning();\n" +
                            "  }\n" +
                            "  this.refresh();\r\n" +
                            " },"
                            );
                }
            }
        }
    }

    static void p(String s) {
        System.out.println(s);
    }
  }
*/