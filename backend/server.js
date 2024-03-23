const exp = require('express'); // Descriptive variable name
const app = exp();

const mc = require('mongodb').MongoClient;

const path=require('path')

//deply react build in this server
app.use(exp.static(path.join(__dirname,'../client/build')))

app.use(exp.json()); // Import 'json' middleware from exp

mc.connect('mongodb://localhost:27017') // Add semicolon
  .then(client => {
    const holistic = client.db('holistic');
    const userscollection = holistic.collection('userscollection');
    const chatcollection=holistic.collection('chatcollection');

    app.set('userscollection', userscollection);
    app.set('chatcollection',chatcollection)
    console.log('db connection success');
  })
  .catch(err => {
    console.error('db connection error:', err);
  });

const userApp = require('./Apis/user-api');

app.use('/user-api', userApp);

app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

app.use((err, req, res, next) => { // Error handler middleware
  console.error('Error:', err.message);
  res.status(500).send({ error: 'Internal server error' });
  // Consider using next() if there are more error handlers
});

const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`Web server on port ${port}`))