title: Magisk刷入方法及模块推荐
date: 2018-08-25 18:58:34
categories: "资源"
tags: [Root,Module,Magisk,ExtraSetting]
thumbnail: "/img/20180825/9.png"
---
Magisk Manager 的功能是不修改 /system 但实现修改的效果，比如隐藏 root，最重要的是不影响 OTA。和 xposed 一样，这个工具需要先刷 zip 包，在 XDA 的附件里提供。

XDA: https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445

Github: https://github.com/topjohnwu/Magisk/releases

Coolapk: https://www.coolapk.com/apk/com.topjohnwu.magisk

## 功能

### 获取root权限

功能与SuperSU类似，为设备提供最高权限。

### Magisk 挂载

在系统启动前加载 Magisk 修改过的系统文件，来达到与直接修改系统文件相同的效果。“不修改 /system 但实现修改的效果”正是基于这一特点。

### Magisk Hide

对部分应用隐藏root权限。

### Safety Net 检测

帮助系统通过如 Google的Safety Net检测 等关于系统安全的测试。 

## 版本

目前最新稳定版为16.0，最新测试版为16.7。

## 刷入

### 常规刷入/卸载方法
下载 [Magisk 最新版本](https://github.com/topjohnwu/Magisk/releases/download/v16.0/Magisk-v16.0.zip)，使用第三方Recovery刷入。

下载并安装 [Magisk 管理器](https://github.com/topjohnwu/Magisk/releases/download/manager-v5.8.3/MagiskManager-v5.8.3.apk)。

---

刷入 [卸载包](https://github.com/topjohnwu/Magisk/releases/download/v16.7/Magisk-uninstaller-20180719.zip) 来卸载Magisk。（全版本支持）


### 模块安装方法

打开侧边栏，点击`模块`选项。

点击`黄色加号按钮`，找到你准备的Magisk模块安装文件。

等待安装完毕，重启手机。

## 优秀模块推荐

### Magisk Manager for Recovery Mode(MM)
>Manage your Magisk image, data, modules & settings from recovery mode -- run "/data/media/mm" on terminal.
>
>在Recovery模式下通过运行`/data/media/mm`管理你的Magisk数据、模块和设置。

作者：VR25

XDA: https://forum.xda-developers.com/apps/magisk/module-tool-magisk-manager-recovery-mode-t3693165

### Xposed Framework

>Xposed Framework by rovo89,ported to Magisk by topjohnwu.

>Xposed框架的Systemless版本。

作者：topjohnwu

XDA: https://forum.xda-developers.com/xposed/unofficial-systemless-xposed-t3388268

### ViPER4Android FX
>ViPER4Android FX is an audio enhancing software to provide everyone with a better audio experience.
>
>蝰蛇音效

作者：Zackptg5

XDA: https://forum.xda-developers.com/android/apps-games/app-viper4android-fx-2-6-0-0-t3774651

### Youtube Vanced
>A modded version of the original YouTube app.
>
>Youtube增强版本

作者： KevinX8

XDA: https://forum.xda-developers.com/apps/magisk/magisk-iytbp-youtube-vanced-t3712097

### Adreno GPU 驱动更新
>更新GPU驱动版本。

作者： 椿的神之圍樓

Coolapk: https://www.coolapk.com/feed/7272287

### Greenify4Magisk
>A very simple module just to make Greenify work as a rom-integrated (privileged) app systemlessly.
>
>通过 Magisk 安装绿色守护

作者：abacate123 oasisfeng

XDA: https://forum.xda-developers.com/apps/magisk/module-greenify4magisk-t3606277

### Sony-Music4Magisk

>This Magisk module will install systemless sony music application in any magisk supported device. Sony Music app - by Sony Mobile Communications.
>
>安装systemless版本的索尼音乐。

作者：utkarshp64

XDA: https://forum.xda-developers.com/apps/magisk/app-sony-music-app-systemless-install-t3596580

### App Systemizer

>Turn apps to System Apps Systemlessly! Supports all device running Magisk.
>
>方便快捷地把用户程序转换为系统程序。需要在已root的设备上使用终端键入`Systemize`指令进入界面。

作者：veez21

XDA: https://forum.xda-developers.com/apps/magisk/module-app-systemizer-t3477512

### GALACTIC™ Forced DeepSleep
>This Forced DeepSleep MOD aims to prevent your device from sucking the battery overnight or when it is kept idle for longer hours and putting your devices in a complete sleep until you wake it by using dozen build prop tweaks. In simple words, it will stop the background processes when the phone is at rest and save battery life.
>
>通过后台限制延长续航。

作者： daxiaamu

XDA： https://forum.xda-developers.com/oneplus-3/themes/roms-galactic-forced-deepsleep-mod-t3655480



### 宁静之雨 字体包
>不修改系统文件实现字体替换。

作者：宁静之雨

微信公众号：宁静之雨

## 部分下载

模块为当时最新版本。部分模块因作者要求不提供下载。

[百度盘](https://pan.baidu.com/s/1jGtTBAp_2AVhhVs6scyXbQ) 密码：ocbg

## 写在后面
此文章为原创作品，禁止转载。如需转载请先经过许可，并在转载中注明原作者及出处。

请 `收藏` 本博客，本博客将持续更新。

写文章不易，点击此处 [支持](https://ojhdt.club/donate) 我。

## 广告
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
