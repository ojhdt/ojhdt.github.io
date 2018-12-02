title: 通过卡Bug在中文系统开启Google Assistant
date: 2018-08-22 21:23:38
categories: "教程"
tags: [Google]
thumbnail: "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/15.png"
---
>注意：该教程为**搬运教程**。
>
>教程搬运于 [酷安网](https://www.coolapk.com/)。由原作者 [@NCC79601](http://www.coolapk.com/u/1111173) 授权搬运许可。
>
>原文链接 https://www.coolapk.com/feed/7050401

## 作者的话

@NCC79061：

之前买了个Xperia XZ Premium，升级8.0后发现home键小一圈。

于是，患有强迫症的我想知道为什么Sony会搞出这么反人类的设计。经过一番Google，终于知道了，这小的一圈是用来放Google Assistant的！然而…

Assistant目前不能在中文系统中运行，而平时我习惯于用中文系统，这就需要用应用变量，而应用变量需要Root权限，但是众所周知，XPERIA系列的Root都十分困难，要想解锁都要搞半天，Root完之后又会丢失相机降噪算法，夜晚拍照基本废掉，要想恢复得刷XDA大神的drm修复包，技术不好的话就需要承担手机变砖的风险了。更可怕的是：这一切成功之后，手机无法接收索移带来的系统更新！作为Google干儿子(Project Treble就不谈了)却不能吃上最新安卓，简直要人命啊！！

Root不行，何为哉？

于是，我总结了之前我发的教程，写了这篇文章。总的来说，我卡了一个天大的BUG，成功在中文系统启动了Google Assistant。

## 正文

### 恢复Home键小圆圈

1.Play下载Google Assistant。

2.下载Android Auto，这便是BUG的来源。

3.打开Android Auto。

点击右上角的语音图标，然后关闭。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/16.png" width="250" height="444" />
</div>

4.退回主界面，仔细看Nav栏：Home键的小圆圈便回来了，点击还有动画哦。

卡出小圆圈了，但是这时还并没有成功开启Google Assistant…别性♂奋太早。

### 开启Google Assistant

5.进入Google设置；

点入语音设置；

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/17.png" width="250" height="444" />
</div>

修改主要语言为英语，US UK无所谓。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/18.png" width="250" height="444" />
</div>

然后保存设置。

6.点入Voice Match设置，开启Voice Match。
<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/19.png" width="250" height="444" />
</div>

进入向导。

建立语音模型，这个最好换三个语调说。

这样便又利用了个BUG

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/20.png" width="250" height="444" />
</div>

利用Voice Match变相经过了Assistant需要的语音模型建立过程，一般情况下首次打开Google Assistant的时候便会经历这个过程，不同的是不卡BUG的话Assistant会在这个过程前检测系统语言，若不是英语则Assistant自动失效。这是一开始开启Assistant失败的原因，也是我利用VM卡OK Google的BUG的原因。

7.进入Google应用

点击语音图标，随便说一段英语（一定要是英语，一定要是Google能用语音回答的问题)，这里我推荐What's the weather today。~~中文发音是：哇刺热微热吐得。~~

这又利用了个Bug，用英语搜索会导致Google Assistant误以为系统语言是英语。
<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/21.png" width="250" height="444" />
</div>

8.然后…可以开始调戏Assistant了。

依然是中文界面。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181201/0.png20180822/22.png" width="250" height="444" />
</div>

然后就可以开启新的生活了。具体的用法参照Google I/O大会介绍。

~~最后，看在我码了这么多字的情况下，给个头条呗[@酷安小编](http://www.coolapk.com/u/12202)~~


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

