"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var csvFileReader_1 = require("./csvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.matches = [];
        this.reader = reader;
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new csvFileReader_1.CSVFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
