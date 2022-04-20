const { signUP, userlist, profile, login } = require('../controllers/user.controller');
const { verifyToken } = require('../routes/middlewares');

module.exports = x => {
            console.log(' ### user.route로 들어옴 ### ')
            x.app.post(`${x.url}/sigh-up`, signUP);
            x.app.post(`${x.url}/login`, verifyToken ,login);
            x.app.get(`${x.url}/list`, userlist);
            x.app.get(`${x.url}/profile/:id`, profile);
                    }

