---
title: 精于形，安于内：浅谈 Android Q
date: 2019-03-17 17:39:45
categories: "小记"
tags: [Android,]
thumbnail: "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/0.jpg"
excerpt: 2019年3月14日，Android Q Beta 1 版本及预览版 SDK 发布。
---
2019年3月14日，Android Q Beta 1 版本及预览版 SDK 发布。该版本可供早期采用者和开发人员使用。

根据往年的做法，首个提前释出的测试版将会涉及一系列 Android Q 的底层新功能更新，开发者可以第一时间下载并测试应用在最新系统上的兼容性。不同的是，Android Q 第一个预览版将作为beta版发布，而不仅仅是开发者预览版。这表明Android Q 已经可以让除了开发者之外的消费者尝鲜。另外，全线 Pixel 手机都可以加入测试计划以试用 Android Q Beta 1 。

根据 Google 提供的时间表，将有 6 个测试版会依序在正式版本前推出，每个测试版都会涵盖不同的领域，以引导开发者对 Android Q 作出适配。正式版本将会在第三季度释出。

![10](https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/10.jpg)

至于 Andoird Q 是否会沿用前代的传统，使用以`Q`开头甜点命名，采用哪一种甜点，外界可谓是众说纷纭。实在是十分令人期待呢。

2019年4月，Android Q Beta 2 释出。加入了`Bubbles`气泡通知界面，胶囊手势优化，储存沙箱等新特性。

[Google Android Q 预览页面](https://developer.android.com/preview) 

[中文官方文档](https://mp.weixin.qq.com/s/ugl45pU6B7XmWKQkPUJcHA)

![1](https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/1.jpg)

### 新特性
Android Q 在整体上并没有作出较大的改动。更新主要体现对用户体验的加强。

#### 全局暗黑模式
在预览版本中没有提供开启入口，需要使用ADB指令开启
```
adb shell settings put secure ui_night_mode 2
```
开启后，系统将会试图对所有应用使用暗黑主题。由于适配问题，该模式实际应用效果并不友好。

#### 适配折叠屏
在加入对折叠屏的原生支持后，厂家应该也会更加积极地开发使用折叠屏的设备吧。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/2.png" width="330" height="444" /> 
</div>


#### 个性化
新增系统强调色更改，字体更改和控件形状更改。美化党的福音。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/2.jpg" width="250" height="444" /> 
</div>

#### 录屏
Android Q 支持了录屏功能。（比国内许多系统慢了一大拍哇）但只作为开发者的测试功能，需要进入 **开发者选项->Feature flags** ，将`screenrecord_long_press`选项打开。启用后，在关机界面进行截屏操作即可录屏。支持内录。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/3.jpg" width="250" height="480" /> 
</div>

#### 设置面板
Android Q 支持应用直接在应用界面显示系统设置项。该设置面板为一个位于底部的浮动 UI 界面，用于显示用户可能需要修改的系统设置，如网络连接、NFC、音量等。用户无需退出应用，便可直接在面板上进行操作。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/4.jpg" width="250" height="444" /> 
</div>

#### Wifi

##### 随机 MAC 地址

通过随机 MAC 地址来连接WiFi，全方位提升家庭、工作及公共网络环境的安全性。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/5.jpg" width="250" height="444" /> 
</div>

##### 二维码

加入了二维码连接 Wifi 的便捷小功能。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/6.jpg" width="250" height="444" /> 
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/7.jpg" width="250" height="444" /> 
</div>

#### Vulkan
Vulkan 是一款面向 3D 图形渲染推出的革命性 API，具备低消耗、高性能、跨平台等优势，Google 将继续扩展 Vulkan 在 Android 平台上的应用范围，努力将其打造成一款支持范围广、一致性高的图形 API。

另外，Android Q 还为信号连接，安全隐私保护，运算性能等带来一系列更新。具体更新内容请前往[官方文档](https://mp.weixin.qq.com/s/ugl45pU6B7XmWKQkPUJcHA)查看。

### 获取更新(Pixel)

开放首个版本测试的设备包括：

- Pixel
- Pixel XL
- Pixel 2
- Pixel 2 XL
- Pixel 3
- Pixel 3 XL

前往 https://www.google.com/android/beta 将设备加入测试计划
注册后，你的设备将定期接收到最新 Android Q Beta 测试版OTA更新。

或者，您可以手动下载原厂镜像来线刷刷入最新的Android Q Beta版本。

### Android Q GSI
任何支持 Project Treble 的设备都可以刷入通刷包第一时间尝鲜。

>进行该操作请确保具有一定刷机基础，并对设备数据进行备份。**刷机有风险，玩机需谨慎！**

#### 下载

感谢国内搬运 [刷机资源 A :- 太空船资源站](https://pans.space)

原帖 [Mega](https://mega.nz/#F!CYQxgCDK!Dl4kKANVDRy5kOFkNsuMVw)  [工具](https://www.androidfilehost.com/?w=files&flid=279429)

Donate:https://www.paypal.me/erfanoabdi

[Telegram](t.me/semigsi)发布页

#### 安装说明

如何在AB分区上安装：
1. 将img安装到system分区
2. 刷 permissiver_v2.zip
3. 重启

如何在A-Only上安装：
1. 将img安装到system分区
2. 刷 permissiver_v2.zip
3. 刷 FixZygote.zip
4. 重启

仅适用于P vendor
已知的系统错误：
1. 无法连接到安全的WIFI
2. 无法设置屏幕锁定



### 值得注意

#### 对第三方应用剪贴板访问的限制

这意味着诸如支付宝的`吱口令`等需要读取剪贴板的功能将彻底失效。不过在国内毒瘤随意劫持剪贴板的大环境下，这确实是一个很好的发展。

#### 更严格的权限控制

针对定位权限，Android Q 允许对应用的后台权限使用进行限制。你可以选择`一直使用`或者`仅在应用使用期间`来调整位置信息权限。毒瘤再也不能在后台胡作非为了。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/8.png" width="350" height="300" />

</div>

#### 彩蛋

彩蛋并没有任何变化，还是一个花里胡哨的大`P`。

#### 外部存储空间

Android Q 彻底改变了应用对外部储存空间的访问格局，安装在 Android Q 上的应用将不被允许在储存空间目录随意创建文件夹，除了需要使用新接口才能访问的图片等媒体文件外，应用可访问的所有文件都将被单独隔离在系统分配的文件夹中。该文件夹将会在应用卸载时被清空。

### 其他

#### Root
Android Q Beta 1 已经被正式 Root 。感谢 John Wu 的辛勤付出！

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190317/9.jpg" width="250" height="444" /> 
</div>

需要进行 Root 的 Android Q 设备请前往安装 Magisk 的 Canary 测试版。目前还有少部分限制。

对于目前最新的 Adnroid Q Beta 2 ，Magisk 的第三方Beta版本采用了全新的安装方法以进行适配，但稳定性欠缺。

#### Xposed
**太极**已经支持 Android Q！

原帖：https://mp.weixin.qq.com/s/ljaOOpS6986oSsSj4Qmaeg

感谢 weishu 的辛苦付出！前往微信公众号 `虚拟框架` 下载最新版即可在 Android Q 上体验 Xposed！（虽然可能大部分模块都没有适配）


### 写在后面
此文章为原创作品，禁止转载。如需转载请先经过许可，并在转载中注明原作者及出处。

请 `收藏` 本博客，本博客将持续更新。

写文章不易，点击此处 <a data-fancybox data-src="#modal" href="javascript:;" >进行捐赠</a> 。

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-1043177129475579"
     data-ad-slot="7254716173"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>


 <div style="display: none;" id="modal" > 
 <p>写文章不易，请我喝一杯咖啡吧~ <br>
 <img src="https://blog.ojhdt.com/alipay.png" width="240" height="364" alt="支付宝" /> <img src="https://blog.ojhdt.com/wechat.png" width="240" height="364" alt="微信" /> <br>

点击<a href="https://blog.ojhdt.com/donate">此处</a>前往捐赠详情页。
 </p> 
 </div> 
