/** ������ص� API */
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
            url: 'https://xxx.xxx.com/upload',  // �ϴ�·�� url
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
    console.log('WebSocket �����Ѵ򿪣�')
}

// wx.onSocketError
wx.connectSocket({
    url: 'test.php'
})
wx.onSocketOpen(function(res) {
    console.log('WebSocket �����Ѵ򿪣�');
})
wx.onSocketError(function(res) {
    console.log('WebSocket ���Ӵ�ʧ�ܣ����飡');
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
    console.log('�յ����������ݣ�' + res.data);
})

// wx.closeSocket

// wx.onCloseSocket
wx.connectSocket({
    url: 'test.php'
})
// ע��������ʱ�����⣬
// ��� wx.connectScoket ��û�ص� wx.onSocketOpen�����ȵ��� wx.closeSocket����ô
// ���������ر� WebSocket ��Ŀ��
// ������ WebSocket ���ڼ���� wx.closeSocket ���ܹر�
wx.onSocketOpen(function() {
    wx.closeSocket()
})
wx.onSocketClose(function(res) {
    console.log('WebSocket �ѹرգ�');
})

/** ��ý����ص� API */
// ͼƬ
// wx.chooseImage
// wx.previewImage
// wx.getImageInfo
<!-- index.wxml -->
<button style="margin:30rpx;" bindtap="chooseimage">��ȡͼƬ</button>
<image src="{{tempFilePaths}}" mode="aspecFill" style="width:100%; height:700rpx;"></image>
// index.js
Page({
    data: {
      tempFilePaths: ''
    },
    chooseimage: function() {
      var _this = this;
      wx.chooseImage({
        count:1, // Ĭ�� 9
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function(res) {
          // ����ѡ����Ƭ�ı����ļ�·���б�tempFilePath ������Ϊ img ��ǩ�� src ������ʾͼƬ
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
  
// ¼��
// wx.startRecord
// wx.stopRecord
// ��

// ��Ƶ
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
            // ��ͣ����
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

// ��������
// wx.getBackgroundAudioPlayerState
// wx.playBackgroundAudio
// wx.pauseBackgroundAudio
// wx.seekBackgroundAudio
// wx.stopBackgroundAuido
// wx.onBackgroundAudioPlay
// wx.onBackgroundAudioPause
// wx.onBackgroundAudioStop
// ��

// ��Ƶ�������
// wx.createAudioContext
// ��

// ��Ƶ
// wx.chooseVideo
// ��

// ��Ƶ�������
// wx.createVideoContext

/** �ļ���ص� API */
// wx.saveFile
wx.saveFile({
    success: function(res) {
        var tempFilePath = res.tempFilePath;    // ��ȡ�ļ������·��
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
        console.log(res.fileList);  // ��ӡȫ���б�
        console.log(res.fileList[0].filePath);  // ��ӡ��һ����ļ�·��
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
                console.log('���ĵ��ɹ�')
            }
        })
    }
})

/** ���ݻ�����ص� API */
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

/** λ����ص� API */
// ��ȡ��鿴λ��
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
    type: 'gcj02',  // ���ؿ������� wx.openLocation �ľ�γ��
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
    // ʹ�� wx.createMapContext ��ȡ map ������
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
<button type="primary" bindtap="getCenterLocation">��ȡλ��</button>
<button type="primary" bindtap="moveToLocation">�ƶ�λ��</button>

/** �豸��ص� API */
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
    // ����ȡ��Ϣ��������ʱ����������ô���ʱ��Ҫִ�еĴ���
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

/** ������ص� API */
// ��������
// wx.showToast
<!-- index.wxml -->
<button type="default" bindtap="toastTap">������� toast</button>
// index.js
toastTap: function() {
    wx.showToast({
    title: "ȷ��"
    })
}
// wx.hideToast
<button type="defauSlt" bindtap="hideToast">������� toast</button>
hideToast: function() {
    wx.hideToast();
}
// wx.showModal
<button type="default" bindtap="modalTap">������� MODAL</button>
modalTap: function() {
    wx.showModal({
      content: "�������ݣ���֪��ǰ״̬����Ϣ�ͽ���������������־���������������",
      confirmText: "ȷ��",
      cancelText: "ȡ��"
})
// wx.showActionSheet
<button type="default" bindtap="actionSheetTap">������� ActionSheet</button>
actionSheetTap: function() {
    wx.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success: function(e) {
        var item = "";
        if (e.tapIndex != undefined) {
          item = "����˵� " + String(e.tapIndex) + "��";
        } else {
          item = "ȡ��ѡ��";
        }
        wx.showToast({
          title: item
        })
      }
    })
  }
  

// ���õ�����
// wx.setNavigationBarTitle
<form class="page-body" bindsubmit="setNavigationBarTitle">
<input class="btn-area" type="text" placeholder="������ҳ����Ⲣ������ü���" name="title"></input>
<view class="btn-area">
<button type="primary" formType="submit">����</button>
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
<button type="primary" bindtap="showNavigationBarLoading">��ʾ���ض���</button>
<button bindtap="hideNavigationBarLoading">���ؼ��ض���</button>
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
          "text": "��ҳ"
        },{
          "pagePath": "pages/page1/page1",
          "text": "����"
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

/** ������ص� API */
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

/** �����ӿ���ص� API */
// ��¼
// wx.login
wx.login({
success: function(res) {
    if (res.code) {
    // ������������
    wx.request({
        url: 'https://test.com/onLogin',
        data: {
        code: res.code
        }
    })
    } else {
    console.log('��ȡ�û���¼̬ʧ�ܣ�' + res.errMsg)
    }
}
})
// w.checkSession
wx.checkSession({
    success: function({
        // ��¼δ����
    }),
    fail: function({
        // ��¼����
        wx.login();
    })
})

// �û���Ϣ
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

// ΢��֧��
// wx.requestPayment
wx.requestPayment({
    'timeStamp': '',
    ...
})

// ģ����Ϣ

// �ͷ���Ϣ

// ����
Page({
    onShareAppMessage: function() {
        return {
            title: '�Զ���������',
            path: '/page/user?id=123'
        }
    }
})

// ��ȡ��ά��