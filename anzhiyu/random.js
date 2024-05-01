var posts=["2024/04/30/hello-world/","2024/05/01/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };