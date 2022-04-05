const { getBmi, getCalc } = require('../controllers/basic.controller');

module.exports = x => {
    x.app.post(`${x.url}/calc`, getCalc);
    x.app.post(`${x.url}/bmi`, getBmi);
}