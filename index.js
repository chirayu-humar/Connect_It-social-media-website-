const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//setting up of router
app.use('/', require('./routes'));

//setting up of template engine(ejs);
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, (err) => {
  console.log(`Example app listening on port ${port}`);
  if(err){
    console.log(`error in listening at port ${port}`);
  }
})