$("img").not(".page__logo img").not(".post__cover img").not("heading.png").not("0.png").each(function(){var t=document.createElement("a");$(t).attr("data-fancybox","gallery"),$(t).attr("href",$(this).attr("src")),$(this).wrap(t)});