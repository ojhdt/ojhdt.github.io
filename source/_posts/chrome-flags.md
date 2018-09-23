title: Android版 Chrome flags 配置
date: 2018-08-22 11:33:18
categories: "教程"
tags: [Google,Chrome]
thumbnail: "/img/20180822/11.png"
---
>注意：该教程为**搬运教程**。
>
>教程搬运于 [酷安网](https://www.coolapk.com/)。由原作者 [@子汤](http://www.coolapk.com/u/690592) 授权搬运许可。
>
>原文链接 https://www.coolapk.com/feed/6216612 

 @子汤：小小激动一下，谷歌大法好。
言归正传，下面贴我的Chrome～flags配置，凭经验搞的，借鉴了之前一些老哥的东西，在此拜谢！
[@不见也散](http://www.coolapk.com/u/644683)

## 正文

1.`chrome://flags/#reader-mode-heuristics`

阅读模式的触发条件设置。
我选的是no-mobile-friendly articles
就是非移动设备友好(忽略硬译)文章。

2.`chrome://flags/#enable-chrome-modern-design`

google大改的界面设计，开启沉浸模式，支持某些网站的顶栏变色，enable，重启两次。

3.`chrome://flags/#force-enable-home-page-button`
开启主页键，不过以后把标签页划完之后会直接关闭Chrome。enable

4.`chrome://flags/#num-raster-threads`

应该是多线程加速，我设置的是两条。打开这个加载应该能快一些，比单线程吃系统资源。

5.`chrome://flags/#enable-data-reduction-proxy-main-menu`

在右侧三点菜单栏中打开流量节省item。流量节省其实在大天朝没用，因为它是把网页原数据发给谷歌压缩再发给你的。聊胜于无。

6.`chrome://flags/#enable-ntp-remote-suggestions`

Disable，关闭资讯，或者你有googlenow的可以其他选项，关掉胜在清爽。

7.`chrome://flags/#enable-ntp-asset-download-suggestions`

打开新标签页时会显示之前下载的东西。

8.`chrome://flags/#enable-ntp-offline-page-download-suggestions`

新标签页显示离线的网页，也是新版未实测。

9.`chrome://flags/#enable-ntp-bookmark-suggestions`

新标签页显示常用网站(搜索栏底下那几个网页标签)。不过吐槽一下，这个遴选机制真的谜，用得多的从来没显示过(怕不是要T？)……

10.`chrome://flags/#ntp-modern-layout`

不明觉厉，新标签页现代设计布局？enable

11.`chrome://flags/#enable-site-exploration-ui`

网站地址建议，enable,需T，谷歌的服务。

12.`chrome://flags/#ntp-google-g-in-omnibox`

enable，搜索引擎是Google时，搜索栏有个彩色的小G。

13.`chrome://flags/#PasswordImport`

在设置～密码中，支持密码导出。估计用不到。

14.`chrome://flags/#language-settings`

在设置中可以有语言选项，就像我设置的简体和繁体，翻译相关，可以不用开的，Chrome需要跟随系统语言。

15.`chrome://flags/#enable-custom-context-menu`

长摁Chrome网页中的超链接、文本或图片，出现传统文本菜单。enable

<div align=center>
<img src="/img/20180822/12.png" width="250" height="444" />
</div>

16.`chrome://flags/#enable-reader-mode-in-cct`

网页的阅读模式在新的经典标签页中打开。enable

17.`chrome://flags/#enable-parallel-downloading`

多线程下载，parallel是平行的意思，会不会是双线程？enable，加速下载，不过有ADM之流，这个不太能用上。

18.`chrome://flags/#enable-modern-media-controls`

某些视频网站上，这个可以是根据你的手机设置来控制视频播放，比如打开视频，手机侧倒就会全屏横向播放。未实测。

19.`chrome://flags/#enable-chrome-duplex`

这个，纯白色，还占地方，可以看作常用网站底栏，不过只能上下滑动，动画还不错。看各位兴趣开。

20.`chrome://flags/#enable-horizontal-tab-switcher`

调整标签页上下滑动变为左右滑动

---

最后再说一下Doodles的事情，这个是谷歌搜索的彩蛋，逢一些有意义的时间、日子，谷歌会把那个彩色的Google换成涂鸦，点进去能看做好的动画，很有爱(需T)。

`chrome://flags/#third-party-doodles`，这个东西不一定管用，doodles抓取我反正没见过有第三方搜索引擎成功过。上条动态有酷友说开这个，不用换引擎就能让搜索栏居中，如图二，会变成这个样子，大黄块是没有抓取出来的，呃，你不嫌丑就随意。

<div align=center>
<img src="/img/20180822/13.png" width="250" height="444" />
</div>

图三是我的显示效果。码字搓了很久手机，不喜勿喷，错误之处请指正。

<div align=center>
<img src="/img/20180822/14.png" width="250" height="444" />
</div>


## 写在后面
此文章为搬运教程，已获得搬运授权。请勿进行二次搬运。

请 `收藏` 本博客，本博客将持续更新。

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

