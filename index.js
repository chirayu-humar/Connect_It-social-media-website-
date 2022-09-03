const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//using express layouts before routs to
//to prevent error
app.use(expressLayouts);

//setting up of router
app.use('/', require('./routes'));

//setting up of template engine(ejs);
app.set('view engine','ejs');
app.set('views','./views');

//setting up the assets folder
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.listen(port, (err) => {
  console.log(`Example app listening on port ${port}`);
  if(err){
    console.log(`error in listening at port ${port}`);
  }
})