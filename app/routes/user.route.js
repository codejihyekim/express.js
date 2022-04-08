const { signUP, userlist } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/sigh-up`, signUP);
                        x.app.get(`${x.url}/list`, userlist);
                        x.app.get(`${x.url}/profile/:id`, profile);
                    }

