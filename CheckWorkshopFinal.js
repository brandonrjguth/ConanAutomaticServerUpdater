var express = require("express");
var app = express();
var request = require("request");
const { exec, spawn } = require('child_process');
var port = 8080;

/*TO-DO

- Refactor disgusting code with array and loop for inputting mod file ID's.
- Front-end with form for entering file ID's and starting server.

*/
var results;
var mod1 = 0;
var mod2 = 0;
var mod3 = 0;
var mod4 = 0;
var mod5 = 0;
var mod6 = 0;
var mod7 = 0;
var mod8 = 0;
var mod9 = 0;
var mod10 = 0;
var mod11 = 0;
var mod12 = 0;
var mod13 = 0;
var mod14 = 0;
var mod15 = 0;
var mod16 = 0;
var mod17 = 0;
var mod18 = 0;
var mod19 = 0;
var mod20 = 0;
var mod21 = 0;
var mod22 = 0;
var mod23 = 0;
var mod24 = 0;
var mod25 = 0;
var mod26 = 0;
var basegame = 0;
var restart


function check() {

    //Request Json for Workshop Mod
    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1367404881&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);

        //Set variable for Update Time,
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];

        //If they match, set "restart" variable to "false"
        if (newUpdateTime == mod1) {
            restart = false;
            //Otherwise set "restart" variable to "true"
        } else {
            mod1 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1369802940&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod2) {
            restart = false;
        } else {
            mod2 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=901911361&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod2) {
            restart = false;
        } else {
            mod2 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1394768794&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod3) {
            restart = false;
        } else {
            mod3 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=925197087&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod4) {
            restart = false;
        } else {
            mod4 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1414531358&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod5) {
            restart = false;
        } else {
            mod5 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1716717492&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod6) {
            restart = false;
        } else {
            mod6 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=862116109&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod7) {
            restart = false;
        } else {
            mod7 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=884168480&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod8) {
            restart = false;
        } else {
            mod8 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1403991684&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod9) {
            restart = false;
        } else {
            mod9 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1456186728&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod10) {
            restart = false;
        } else {
            mod10 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1183199682&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod11) {
            restart = false;
        } else {
            mod11 = newUpdateTime;
            restart = true;
        };
    });


    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1598693222&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod12) {
            restart = false;
        } else {
            mod12 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1509786356&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod13) {
            restart = false;
        } else {
            mod13 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1683885818&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod14) {
            restart = false;
        } else {
            mod14 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1579057391&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod15) {
            restart = false;
        } else {
            mod15 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1210390760&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod16) {
            restart = false;
        } else {
            mod16 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1437122734&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod17) {
            restart = false;
        } else {
            mod17 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=890509770&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod18) {
            restart = false;
        } else {
            mod18 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1435629448&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod19) {
            restart = false;
        } else {
            mod19 = newUpdateTime;
            restart = true;
        };
    });


    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1381246334&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod20) {
            restart = false;
        } else {
            mod20 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1954859505&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod21) {
            restart = false;
        } else {
            mod21 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1959075725&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod22) {
            restart = false;
        } else {
            mod22 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=864199675&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod23) {
            restart = false;
        } else {
            mod23 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1113901982&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod24) {
            restart = false;
        } else {
            mod24 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1657730588&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod25) {
            restart = false;
        } else {
            mod25 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?fileid=1369743238&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == mod26) {
            restart = false;
        } else {
            mod26 = newUpdateTime;
            restart = true;
        };
    });

    request("https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?appid=440900&key=27166E34C269A138E0449BE974CF2AC8&return_short_description=true", function(error, response, body) {
        results = JSON.parse(body);
        var newUpdateTime = results.response.publishedfiledetails[0]["time_updated"];
        if (newUpdateTime == basegame) {
            restart = false;
        } else {
            basegame = newUpdateTime;
            restart = true;
        };
    });

    if (restart == true) {
        exec('cmd /c start "" cmd /c restart.bat');
    }
};

setInterval(check, 1800000);