const mongoose = require('mongoose');
const Celeb = require('./models/celeb');

const url = 'mongodb://localhost:27017/REGNAcon';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connected correctly to server');

    const newCeleb = new Celeb({
        name: 'Patrick Stewart',
        description: 'test'
    });

    newCeleb.save()
    .then(celeb => {
        console.log(celeb);
        return Celeb.find();
    })
    .then(celebs => {
        console.log(celebs);
        return Celeb.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});