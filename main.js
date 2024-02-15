const express =require('express');
const app =express();


app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/auth/login',(req,res)=>{
    res.send('<html><body><h1>login successfull</h1></body></html>')
})
app.get('/auth/register',(req,res)=>{
    res.send('<html><body><h1>register successfull</h1></body></html>')
})
app.get('/post/all', (req, res) => {
    const posts = [
      { id: 1, title: 'Post 1', content: 'post 1 Content' },
      { id: 2, title: 'Post 2', content: 'post 2 Content' },
      { id: 3, title: 'Post 3', content: 'post 3 Content' },
    ];
    res.json(posts);
  });

  app.get('/post/:id', (req, res) => {
    const postId =req.params.id;
    const post = { id: postId, title:`Post ${postId}`, content: `This is post ${postId}` };
    res.json(post);
  });
app.listen(3000,function(req,res){ 
    console.log('Server started at 3000') 
})