var friends = require('../data/friends');

//routing
module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    


    //post api rout to /api/friends. handle incoming survey results
    // this route will also be used to handle the compatiblity logic

}