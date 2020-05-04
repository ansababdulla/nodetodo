var configValues = require("./config.json");

module.exports = {
    getDbConnectionString : function () {
        return 'mongodb+srv://'+ configValues.uname  + ':' + configValues.password + 
        '@nodetodo-boust.mongodb.net/Nodetodo';
    }
}



