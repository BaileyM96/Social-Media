const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://baileymejia28:Noisysocks839@cluster3.768ayod.mongodb.net/socialmedia?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Failed', err));


module.exports = mongoose.connection;