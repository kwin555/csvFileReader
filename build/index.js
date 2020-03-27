"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var csvFileReader_1 = require("./csvFileReader");
var matchResult_1 = require("./matchResult");
var csvFileReader = new csvFileReader_1.CSVFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
