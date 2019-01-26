title: 通过卡Bug在中文系统开启Google Assistant
date: 2018-08-22 21:23:38
categories: "教程"
tags: [Google]
thumbnail: "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20180822/15.png"
---
>注意：该教程为**搬运教程**。
>
>教程搬运于 [酷安网](https://www.coolapk.com/)。由原作者 [@NCC79601](http://www.coolapk.com/u/1111173) 授权搬运许可。
>
>原文链接 https://www.coolapk.com/feed/7050401

目前以实现使用 Magisk 模块（Google App Helper）方便地激活中文环境下的 Google Assistant。模块介绍请转至文章 [Magisk 刷入方法及模块推荐](https://ojhdt.club/20180825/magisk/#Riru-EdXposed) 。

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

