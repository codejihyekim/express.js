const { signUP, userlist, profile } = require('../controllers/user.controller');
module.exports = x => {
            console.log(' ### user.route로 들어옴 ### ')
            x.app.post(`${x.url}/sigh-up`, signUP);
            x.app.get(`${x.url}/list`, userlist);
            x.app.get(`${x.url}/profile/:id`, profile);
                    }

