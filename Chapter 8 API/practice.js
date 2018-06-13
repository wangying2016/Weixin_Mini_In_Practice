/** 网络相关的 API */
// wx.request
wx.request({
    url: 'http://xxx.xxx.com/request',
    data: {
        x: '',
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    success: function(res) {
        console.log(res.data);
    }
})

// wx.uploadFile
wx.chooseImage({
    success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
            url: 'https://xxx.xxx.com/upload',  // 上传路径 url
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
                'user': 'test'
            },
            success: function(res) {
                var data = res.data;
                // do something
            }
        })
    }
})

// wx.downloadFile
wx.downloadFile({
    url: 'http://xxx.xxx.com/download/123',
    success: function(res) {
        filePath: res.tempFilePath
    }
})

// wx.connectSocket
wx.connectSocket({
    url: 'test.php',
    data: {
        x: '',
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    method: "GET"
})

// wx.onSocketOpen
wx.connectSocket({
    url: 'test.php'
})
wx.onSocketOpen(function(res)) {
    console.log('WebSocket 连接已打开！')
}

// wx.onSocketError
wx.connectSocket({
    url: 'test.php'
})
wx.onSocketOpen(function(res) {
    console.log('WebSocket 连接已打开！');
})
wx.onSocketError(function(res) {
    console.log('WebSocket 连接打开失败，请检查！');
})

// wx.sendSocketMessage
var socketOpen = false;
var socketMsgQueue = [];
wx.connectSocket({
    url: 'test.php'
})
wx.onSocketOpen(function(res) {
    socketOpen = true;
    for (var i = 0; i < socketMsgQueue.length; i++) {
        sendSocketMessage(socketMsgQueue[i]);
    }
    socketMsgQueue = [];
})
function sendSocketMessage(msg) {
    if (socketOpen) {
        wx.sendSocketMessage({
            data: msg
        })
    } else {
        socketMsgQueue.push(msg);
    }
}

// wx.onSocketMessage
wx.connectSocket({
    url: 'test.php'
})
wx.onSocketMessage(function(res) {
    console.log('收到服务器内容：' + res.data);
})

// wx.closeSocket

// wx.onCloseSocket
wx.connectSocket({
    url: 'test.php'
})
// 注意这里有时序问题，
// 如果 wx.connectScoket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么
// 就做不到关闭 WebSocket 的目的
// 必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭
wx.onSocketOpen(function() {
    wx.closeSocket()
})
wx.onSocketClose(function(res) {
    console.log('WebSocket 已关闭！');
})

/** 多媒体相关的 API */
// 图片
// wx.chooseImage
// wx.previewImage
// wx.getImageInfo
<!-- index.wxml -->
<button style="margin:30rpx;" bindtap="chooseimage">获取图片</button>
<image src="{{tempFilePaths}}" mode="aspecFill" style="width:100%; height:700rpx;"></image>
// index.js
Page({
    data: {
      tempFilePaths: ''
    },
    chooseimage: function() {
      var _this = this;
      wx.chooseImage({
        count:1, // 默认 9
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath 可以作为 img 标签的 src 属性显示图片
          _this.setData({
            tempFilePaths: res.tempFilePaths
          })
        }
      })
      wx.getImageInfo({
        src: 'images/a.jpg',
        success: function(res) {
          console.log(res.width);
          console.log(res.height);
        }
      })
    }
  })
  
// 录音
// wx.startRecord
// wx.stopRecord
// 略

// 音频
// wx.playVoice
wx.startRecord({
    success: function(res) {
        var tempFilePath: res.tempFilePath
        wx.playVoice({
            filePath: tempFilePath,
            complemte: function(){
            }
        })
    }
})
// wx.puaseVoice
wx.startRecord({
    success:function(res) {
        var tempFilePath = res.tempFilePath;
        wx.playVoice({
            filePath: tempFilePath
        })
        setTimeOut(function() {
            // 暂停播放
            wx.pauseVoice()
        }, 5000)
    }
})
// wx.stopVoice
wx.startRecord({
    success:function(res) {
        var tempFilePath = res.tempFilePath;
        wx.playVoice({
            filePath: tempFilePath
        })
        setTimeOut(function() {
            wx.stopVoice()
        }, 5000)
    }
})

// 背景音乐
// wx.getBackgroundAudioPlayerState
// wx.playBackgroundAudio
// wx.pauseBackgroundAudio
// wx.seekBackgroundAudio
// wx.stopBackgroundAuido
// wx.onBackgroundAudioPlay
// wx.onBackgroundAudioPause
// wx.onBackgroundAudioStop
// 略

// 音频组件控制
// wx.createAudioContext
// 略

// 视频
// wx.chooseVideo
// 略

// 视频组件控制
// wx.createVideoContext

/** 文件相关的 API */
// wx.saveFile
wx.saveFile({
    success: function(res) {
        var tempFilePath = res.tempFilePath;    // 获取文件保存的路径
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function(res) {
                var savedFilePath = res.savedFilePath
            }
        })
    }
})
// wx.getSavedFileList
wx.getSavedFileList({
    success: function(res) {
        console.log(res.fileList);  // 打印全部列表
        console.log(res.fileList[0].filePath);  // 打印第一项的文件路径
    }
})
// wx.getSavedFileInfo
wx.getSavedFileInfo({
    filePath: 'wxfile://somefile', 
    success: function(res) {
        console.log(res.size);
        console.log(res.createTime);
    }
})
// wx.removeSavedFile
wx.getSavedFileList({
    success: function(res) {
        if (res.fileList.length > 0) {
            wx.removeSavedList({
                filePath: res.fileList[0].filePath,
                complete: function(res) {
                    console.log(res)
                }
            })
        }
    }
})
// wx.openDocument
wx.downloadFile({
    url: 'http://example.com/somefile.pdf',
    success:function(res) {
        var filePath = res.tempFilePath;
        wx.openDocument({
            filePath: filePath,
            success: function(res) {
                console.log('打开文档成功')
            }
        })
    }
})

/** 数据缓存相关的 API */
// wx.setStorage
wx.setStorage({
    key: "key",
    data: "value"
})
// wx.setStorageSync
try {
    wx.setStorageSync('key', 'value');
} catch (e) {

}
// wx.getStorage
wx.getStorage({
    key: 'key',
    success: function(res) {
        console.log(res.data)
    }
})
// wx.getStorageSync
try {
    var value = wx.getStorageSync('key');
    if (value) {
        // Do something with return value
    }
} catch (e) {
    // Do something when catch error
}
// wx.getStorageInfo
wx.getStorageInfo({
    success: function(res) {
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);
    }
})
// wx.getStorageInfoSync
try {
    var res = wx.getStorageInfoSync();
    console.log(res.keys);
    console.log(res.currentSize);
    console.log(res.limitSize);
} catch (e) {
    // Do something when catch error
}
// wx.removeStorage
wx.removeStorage({
    key: 'key',
    success: function(res) {
        console.log(res.data)
    }
})
// wx.removeStorageSync
try {
    wx.removeStorageSync('key');
} catch (e) {
    // Do something when catch error
}
// wx.clearStorage
wx.clearStorage();
// wx.clearStorageSync
try {
    wx.clearStorageSync();
} catch (e) {
    // Do something when catch error
}

/** 位置相关的 API */
// 获取与查看位置
// wx.getLocation
wx.getLocation({
    type: 'wgs84',
    success: function(res) {
        console.log(res.latitude);
        console.log(res.longitude);
        console.log(res.speed);
        console.log(res.accuracy);
    }
})
// wx.chooseLocation
wx.chooseLocation({
    success: function(res) {
        console.log(res.latitude);
        console.log(res.longitude);
    },
    fail: function() {
        // fail
    },
    complete: function() {
        // complete
    }
})
// wx.openLocation
wx.getLocation({
    type: 'gcj02',  // 返回可以用于 wx.openLocation 的经纬度
    success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
            latitude: latitude,
            longitude: longtitude,
            scale: 28
        })
    }
})
// wx.createMapContext
// index.js
onReady: function(e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },
  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude);
        console.log(res.latitude);
      }
    })
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation();
  },
  <!-- index.wxml -->
<map id="myMap" show-location></map>
<button type="primary" bindtap="getCenterLocation">获取位置</button>
<button type="primary" bindtap="moveToLocation">移动位置</button>

/** 设备相关的 API */
// wx.getSystemInfo
wx.getSystemInfo({
    success: function(res) {
        console.log(res.model);
        console.log(res.pixelRatio);
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        console.log(res.language);
        console.log(res.version);
        console.log(res.platform);
    }
})
// wx.getSystemInfoSync
try {
    var res = wx.getSystemInfoSync();
    console.log(res.model);
        console.log(res.pixelRatio);
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        console.log(res.language);
        console.log(res.version);
        console.log(res.platform);
} catch (e) {
    // 当获取信息发生错误时，在这个调用错误时需要执行的代码
}
// wx.getNetworkType
wx.getNetworkType({
    success:funtion(res) {
        var networkType = res.networkType;
        console.log(networkType);
    }
})
// wx.onAccelerometerChange
wx.onAccelerometerChange(function(res) {
    console.log(res.x);
    console.log(res.y);
    console.log(res.z);
})
// wx.onCompassChange
wx.onCompassChange(function(res) {
    console.log(res.direction);
})
// wx.makePhoneCall
wx.makePhoneCall({
    phoneNumber: '12345'
})
// wx.scanCode
wx.scanCode({
    success: (res) => {
        console.log(res)
    }
})

/** 界面相关的 API */
// 交互反馈
// wx.showToast
<!-- index.wxml -->
<button type="default" bindtap="toastTap">点击弹出 toast</button>
// index.js
toastTap: function() {
    wx.showToast({
    title: "确定"
    })
}
// wx.hideToast
<button type="defauSlt" bindtap="hideToast">点击隐藏 toast</button>
hideToast: function() {
    wx.hideToast();
}
// wx.showModal
<button type="default" bindtap="modalTap">点击弹出 MODAL</button>
modalTap: function() {
    wx.showModal({
      content: "弹窗内容，告知当前状态、信息和解决方案，描述文字尽量控制在三行内",
      confirmText: "确定",
      cancelText: "取消"
})
// wx.showActionSheet
<button type="default" bindtap="actionSheetTap">点击弹出 ActionSheet</button>
actionSheetTap: function() {
    wx.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success: function(e) {
        var item = "";
        if (e.tapIndex != undefined) {
          item = "点击了第 " + String(e.tapIndex) + "项";
        } else {
          item = "取消选择";
        }
        wx.showToast({
          title: item
        })
      }
    })
  }
  

// 设置导航条
// wx.setNavigationBarTitle
<form class="page-body" bindsubmit="setNavigationBarTitle">
<input class="btn-area" type="text" placeholder="请输入页面标题并点击设置即可" name="title"></input>
<view class="btn-area">
<button type="primary" formType="submit">设置</button>
</view>
</form>
setNavigationBarTitle: function(e) {
var title = e.detail.value.title;
console.log(title);
wx.setNavigationBarTitle({
    title: title,
    success: function() {
    console.log('setNavigationBarTitle success');
    },
    fail: function() {
    console.log('setNavigationBarTitle fail, err is', err);
    }
})
}
// wx.showNavigationBarLoading
// wx.hideNavigationBarLoading
<view class="btn-area">
<button type="primary" bindtap="showNavigationBarLoading">显示加载动画</button>
<button bindtap="hideNavigationBarLoading">隐藏加载动画</button>
</view>
showNavigationBarLoading: function() {
    wx.showNavigationBarLoading();
}
hideNavigationBarLoading: function() {
    wx.hideNavigationBarLoading();
}
// wx.navigateTo
wx.navigateTo({
    url:'test?id=1'
})
Page({
    onLoad: function(option) {
        console.log(option.query)
    }
})
// wx.redirectTo
wx.redirectTo({
    url: 'test?id=1'
})
// wx.switchTab
// app.json
{
    "tabBar": {
        "list":[{
          "pagePath": "pages/index/index",
          "text": "首页"
        },{
          "pagePath": "pages/page1/page1",
          "text": "其他"
        }]
      }
}
// js
wx.switchTab({
    url: '/index'
})
// wx.navigateBack
// Page A
wx.navigateTo({
    url:'B?id=1'
})
// Page B
wx.navigateTo({
    url:'C?id=1'
})
// Page C, back to A
wx.navigateBack({
    delta:2
})

/** 动画相关的 API */
// wx.createAnimation
Page({
    onPullDownRefresh: function() {
        wx.showToast({
            title: 'loading...',
            icon: 'loading'
        })
    },
    stopPullDownRefresh: function() {
        wx.stopPullDownRefresh({
            complete: function(res) {
                wx.hideToast();
            }
        })
    }
})

/** 开发接口相关的 API */
// 登录
// wx.login
wx.login({
success: function(res) {
    if (res.code) {
    // 发起网络请求
    wx.request({
        url: 'https://test.com/onLogin',
        data: {
        code: res.code
        }
    })
    } else {
    console.log('获取用户登录态失败！' + res.errMsg)
    }
}
})
// w.checkSession
wx.checkSession({
    success: function({
        // 登录未过期
    }),
    fail: function({
        // 登录过期
        wx.login();
    })
})

// 用户信息
wx.getUserInfo({
    success: function(res) {
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gendar = userInfo.gendar;
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;
    }
})

// 微信支付
// wx.requestPayment
wx.requestPayment({
    'timeStamp': '',
    ...
})

// 模板消息

// 客服消息

// 分享
Page({
    onShareAppMessage: function() {
        return {
            title: '自定义分享标题',
            path: '/page/user?id=123'
        }
    }
})

// 获取二维码