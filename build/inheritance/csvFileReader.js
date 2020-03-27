"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(filename) {
        var _this = this;
        this.data = [];
        this.read = function () {
            _this.data = fs_1.default
                .readFileSync(_this.filename, {
                encoding: "utf-8"
            })
                .split("\n")
                .map(function (row) {
                return row.split(",");
            })
                .map(_this.mapRow);
        };
        this.filename = filename;
    }
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
