title: ViPER4Android FX 安装及音效配置推荐
date: 2018-09-17 11:25:48
categories: "教程"
tags: [Apps,Music]
thumbnail: "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20180917/0.png"
---
Viper4Android FX（蝰蛇音效）是一款Android全局音频驱动。通过该软件可以给音频渲染各种音频效果，如均衡器，回放增益，脉冲反馈处理，场环绕，数字混响，动态系统等。用户通过对音效的配置，在低端耳机设备下也能够明显提升音效效果。

## 安装

### Magisk模块安装
该安装方法方便快捷，在已安装Magisk的设备下安装模块，重启即可。Magisk刷入方法及模块下载可见 [此帖](https://ojhdt.club/20180825/magisk/) 。

>安装过程中需要使用音量键进行安装偏好设置，如版本，主题等。"Press Vol Up"和"Press Vol Down"分别是按下音量+/-的意思。

### 普通安装
在进行后续操作前请先获取Root权限。

下载音效安装Apk文件。

[XDA](https://forum.xda-developers.com/android/apps-games/app-viper4android-fx-2-6-0-0-t3774651)

[Coolapk](https://www.coolapk.com/apk/com.pittvandewitt.viperfx)

打开应用，提示安装驱动提示，点击确定，选择安装最新版本。

授予Root权限，点击重启。重启后安装完成。

### 确认安装状况

划出左侧侧边栏，点击驱动程序状态。'已启用'一项为“是”即为安装完成。

>`正在处理`一项通常情况下为“否”，只有在处于音乐播放状态才转为“是”。如果始终保持“否”，尝试重新启动应用或更换播放器。

<div align=center>
<img src="https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20180917/1.png" width="250" height="444" /> 
</div>

## 音效配置推荐及安装

### 音效配置安装

在安装VIPER4Android FX后，根目录会自动生成`ViPER4Android`文件夹。此处用于存放音效配置文件。

- Kernel 脉冲反馈样本文件夹
- Profile 音效配置文件夹

音效配置作者一般会注明音效文件放置路径，安装要求放置即可。

安装完毕后，进入应用，在侧边栏中点击`加载音效配置`，选择相关配置。

### 音效配置推荐

推荐几个自己用着舒服的音效。

#### PRiME BASS

作者：酷安[@Pαtrick](http://www.coolapk.com/u/526061)

[原帖链接](https://www.coolapk.com/feed/6478166)

「PRiME BASS 1.1」

这次用了三个耳机测试并调教音效，测试下来基本能带来接近的听感哦~

PRiME BASS 1.1 - By 酷安[@Pαtrick](http://www.coolapk.com/u/526061)

PRiME BASS 1.1 分为三个版本：

「PRiME BASS level 1」 
基于 Apple Earpods 调教，这个耳机本身低音强于其他耳机，所以level1的低音是相对较弱的[二哈]。

「PRiME BASS level 2」 
用了万魔某型号的耳机调教，三频均衡，适用于绝大多数耳机[w调皮]。(万魔属于小米生态链，所以理论上这个应该也适用小米耳机)。

「PRiME BASS level 3」 
变态低音，不建议使用Earpods尝试...出现任何不适请立刻摘下耳机，任何后果自负。

「使用方法」 
1.解压本压缩包，得到一个ViPER4AndroidFX文件夹；
2.把它覆盖到手机内部存储根目录；
3.进入VIPERFX，应用配置文件。

[这里](https://shimo.im/bhP3SKhBMDY1RejS)可以看到所有版本，另外新增了一个扬声器专属音效，感兴趣的可以戳上面的链接进去看看。

请根据个人喜好选择版本，你也可以自行调教，但任何后果自行承担。

#### HRTF自研环绕音效

作者：酷安[@封心巛](http://www.coolapk.com/u/592446) ICE 玄音团队

[原帖链接](https://www.coolapk.com/feed/7087504)

本音效为本团队成员精心打造的高品质音效，使用自研声场感知参数HRTF，主打高品质的原音调节，音染极低的环绕声场，极高的乐器分离和低音感知增强。

说明：此音效为4声道音效，在网络上流传极少同类文件（图中会解释4声道原理）感谢 脉冲教员 的4声道技术支持。4声道脉冲需要最新版的viper4软件支持。

使用方法：放在脉冲文件夹，再去软件内选择此脉冲文件。其他效果关闭即可，保证本音效的原汁原味。

效果描述：（使用平台小米note顶配版，360N6，铁三角CKR7，AKG K430）开启效果后，感觉好像2个HIFI音响在面前，并且声场大了不少，低音弹性好了些，听摇滚乐的伴奏每一个细节都很明显，女声完美，完胜ACG，古典氛围感强了不少。——玄音团队试听小D

测试歌曲：

- 流行（That Girl）
- ACG（負けないで）
- 古典（Johann Strauss II: Annen-Polka, Op. 117）
- 女声（光辉岁月-孙露）
- 低音（ONE-Aimer）

制作不易，如果你喜欢我们的音效，愿意支持鼓励我们，拿出你们的一分钱，救救山区孩子吧，本音效获得的捐助全部买书进行捐助。

>请前往原帖查看捐助二维码。

[下载链接](https://pan.baidu.com/s/1LhkIQQ9HLGosfX7ZN7lBuA) 密码：1597


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