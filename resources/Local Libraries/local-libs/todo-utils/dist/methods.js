"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
exports.formatDateShort = function (d) {
    return date_fns_1.format(date_fns_1.parseISO(d), 'dd/MM/yy');
};
exports.formatDateLong = function (d) {
    return date_fns_1.format(date_fns_1.parseISO(d), "E, do MMM yyyy 'at' h:mma");
};
//# sourceMappingURL=methods.js.map