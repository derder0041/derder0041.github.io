var posts=["2024/04/30/hello-world/","2024/05/01/test/","2024/05/01/mc联机教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };