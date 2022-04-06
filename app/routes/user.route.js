const { signUP } = require('../controllers/user.controller');
module.exports = x => x.app.post(`${x.url}/sigh-up`, signUP);