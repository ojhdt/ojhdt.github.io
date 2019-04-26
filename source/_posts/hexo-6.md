---
title: 离Hexo博客搭建只差一个教程（六）：第三方服务——对象存储 COS
date: 2019-04-04 19:54:14
categories: "教程"
tags: [Blog,Hexo,Pic]
thumbnail: "https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20181002/0.png"
excerpt: "使用外挂图床可以有效提升页面载入速度。在本篇中，我们将会介绍 腾讯云对象存储 COS 的使用。"
---
>上一篇：[离Hexo博客搭建只差一个教程（五）：第三方服务——Google服务](https://blog.ojhdt.com/20181013/hexo-5)

在上一篇文章中，我们介绍了 Google 提供的统计分析，搜索收录，广告投放服务。

在本篇中，我们将会介绍 腾讯云对象存储 COS 的使用。

### 简介

**对象存储（Cloud Object Storage，COS**）是由腾讯云推出的无目录层次结构、无数据格式限制，可容纳海量数据且支持 HTTP/HTTPS 协议访问的分布式存储服务。腾讯云 COS 的存储桶空间无容量上限，无需分区管理，适用于 CDN 数据分发、数据万象处理或大数据计算与分析的数据湖等多种场景。COS 提供网页端管理界面、多种主流开发语言的 SDK、API 以及命令行和图形化工具，并且兼容 S3 的 API 接口，方便用户直接使用社区工具和插件。

之所以选用腾讯家的产品，主要因为以下几大优点：

- 每月提供 10G 免费流量，对于一般博客基本够用。
- 分配稳定的测试域名。这一点也是最大的优点，因而可以作为七牛云的替代品。
- 提供使用便捷的客户端。

### 申请

1. 在 腾讯云 注册自己的账户。开通 [对象储存](https://console.cloud.tencent.com/cos4) 服务。

2. 创建一个新的储存桶，输入储存桶名称，根据自己需要选择所属地域。**将访问权限设置为`公有读私有写`**。
>创建后不可更改地域。如果同时启用了使用该储存桶资源的其他腾讯云服务，请在所属地域中选择相同地域。

不推荐开启 **基础设置->防盗链设置** 。开启该选项将会禁止管理工具对文件的预览，下载操作。

![1](https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190404/1.png)

3. 进入 [云 Api 密钥](https://console.cloud.tencent.com/cam/capi) 管理，新建一个密钥。获取 `SecretId` 和 `SecretKey` 。

4. 下载并安装 [COSBrowser 工具](https://cloud.tencent.com/document/product/436/11366) 。用户可以使用该工具进行可视化、方便的数据上传、下载等操作。支持拖拽上传和下载。

![2](https://ojhdt-1257115336.cos.ap-guangzhou.myqcloud.com/img/20190404/2.png)

5. 使用之前启用的 `云 Api 密钥` 登陆工具，进入储存桶根目录。该目录可通过访问域名方便地访问。

6. 上传你需要储存的文件（图片，文本文件等）。点击文件右侧的复制按钮复制引用代码，将该代码粘贴到你的文章中进行引用。


### 写在后面
>感谢您的阅读！若您在阅读时发现教程存在疏漏或无法理解的地方，可以通过 **评论区留言** 进行交流讨论。
>
>上一篇：[离Hexo博客搭建只差一个教程（五）：第三方服务——Google服务](https://blog.ojhdt.com/20181013/hexo-5)
>
>下一篇：[离Hexo博客搭建只差一个教程（附录）：Markdown 语法](https://blog.ojhdt.com/20181006/hexo-markdown)

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