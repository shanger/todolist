var path = require('path');
var baseLogPath = path.resolve(__dirname, '../../logs');

//错误日志
var errorPath = '/error';
var errorFileName = 'error';
var errorLogPath = baseLogPath + errorPath + '/' + errorFileName;

//响应日志

var responsePath = '/response';
var responseFileName = 'response';
var responseLogPath = baseLogPath + responsePath + '/' + responseFileName;

module.exports = {
    appenders: {
        "rule-console": {
            "type": "console"
        },
        "errorLogger": {
            "type": "dateFile",
            "filename": errorLogPath,
            "pattern": "-yyyy-MM-dd.log",
            "alwaysIncludePattern": true,
            "encoding": "utf-8",
            "maxLogSize": 1000,
            "numBackups": 3,
            "path": errorPath
        },
        "resLogger": {
            "type": "dateFile",
            "filename": responseLogPath,
            "pattern": "-yyyy-MM-dd.log",
            "alwaysIncludePattern": true,
            "encoding": "utf-8",
            "maxLogSize": 1000,
            "numBackups": 3,
            "path": responsePath
        }
    },
    categories: {
        "default": {
            "appenders": ["rule-console"],
            "level": "all"
        },
        "resLogger": {
            "appenders": ["resLogger"],
            "level": "info"
        },
        "errorLogger": {
            "appenders": ["resLogger"],
            "level": "error"
        },
        "http": {
            "appenders": ["resLogger"],
            "level": "info"
        }
    },
    baseLogPath: baseLogPath
}