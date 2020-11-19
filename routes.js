User = require('./models/UserModel');

module.exports=function(app){
    app.get('/users', (req, res) => {
        User.find((err, users)=>{
            if (err) {
                res.send(err);
            }
            res.json(users)
        });
    })
    
    app.post('/', (req, res) => {
        res.send(users)
    })
}