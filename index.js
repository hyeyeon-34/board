const express = require('express'); 
const cors = require('cors'); 
const PORT = 8080; 


const app = express(); 

app.use(cors()); 
app.use(express.json()); 


post1 = []

app.get('/', (req, res) => {
    res.send('Hello World! please'); 
  }); 

app.use(require('./routers/postroutes'));
app.use(require('./routers/getroutes'))
app.use(require('./routers/deleteroutes'))
app.use(require('./routers/updateroutes'))

// app.post("/postss", (req, res) => {
//     const { title, name, text } = req.body; 
//     post1.push({title, name, text})
//     res.json({ message: "Post created", post: { title, name, text } });
// });

// app.get("/postss" , (req,res)=>{
//     res.json(post1)
// })


  app.listen(PORT, () => console.log(`Server is runnig on ${PORT}`)); 