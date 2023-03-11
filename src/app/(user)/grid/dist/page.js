"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var sanity_client_1 = require("../../../../lib/sanity.client");
var queries_1 = require("../../../../queries/queries");
var link_1 = require("next/link");
// Enable NextJS to cache and dedupe queries
var clientFetch = react_1.cache(sanity_client_1.client.fetch.bind(sanity_client_1.client));
// TODO :
// change img => Image/next
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, clientFetch(queries_1.ALLCLASSES)];
            case 1:
                data = _a.sent();
                // console.log(data.length, data[0].image.asset.url, data[0].title);
                return [2 /*return*/, (react_1["default"].createElement("main", { className: 'min-h-screen w-screen relative' },
                        react_1["default"].createElement("h1", { className: 'text-center font-bold text-2xl uppercase py-20' }, "Classes"),
                        react_1["default"].createElement("section", { className: 'h-full py-2' },
                            react_1["default"].createElement("div", { className: ' grid-col-1 grid md:grid md:grid-cols-3 gap-3 px-3' }, data.map(function (classe) {
                                return (react_1["default"].createElement(link_1["default"], { key: classe._id, href: "/memo/" + classe.title },
                                    react_1["default"].createElement("div", { className: 'h-full border-2 m-0 flex flex-col items-center border-gray-300 rounded-lg' },
                                        react_1["default"].createElement(Image, { width: 200, height: 200, className: 'w-full max-h-50', src: "" + classe.image.asset.url, alt: '' }),
                                        react_1["default"].createElement("p", { className: 'text-center font-bold uppercase text-3xl py-3' }, classe.title))));
                            })))))];
        }
    });
}); };
exports["default"] = page;
