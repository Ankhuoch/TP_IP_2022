"use strict";
exports.__esModule = true;
exports.KhmerDateTest = void 0;
var KhmerDateTest = /** @class */ (function () {
    function KhmerDateTest() {
    }
    KhmerDateTest.prototype.getDate = function (time) {
        var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")), diff = (((new Date()).getTime() - date.getTime()) / 1000), day_diff = Math.floor(diff / 86400);
        var year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
            return (year.toString() + '-'
                + ((month < 10) ? '0' + month.toString() : month.toString()) + '-'
                + ((day < 10) ? '0' + day.toString() : day.toString()));
        var r = ((day_diff == 0 &&
            ((diff < 60 && "ឥឡូវនេះ")
                || (diff < 120 && "១ នាទីមុន")
                || (diff < 3600 && Math.floor(diff / 60) + " នាទីមុន")
                || (diff < 7200 && "១ ម៉ោងមុន")
                || (diff < 86400 && Math.floor(diff / 3600) + " ម៉ោងមុន")))
            || (day_diff == 1 && "ម្សិលមិញ")
            || (day_diff < 7 && day_diff + " ថ្ងៃមុន")
            || (day_diff < 31 && Math.ceil(day_diff / 7) + " សប្តាហ៍មុន")
            || (day_diff < 365 && Math.ceil(day_diff / 7) + "ខែមុន"));
        return r;
    };
    return KhmerDateTest;
}());
exports.KhmerDateTest = KhmerDateTest;
