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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationMail = void 0;
const Mail_1 = require("../lib/Mail");
const mail_1 = require("../config/mail");
exports.VerificationMail = {
    key: 'VerificationMail',
    handle({ data }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { user, code, } = data;
            yield Mail_1.default.sendMail({
                from: mail_1.default.from,
                to: (_a = user.email) !== null && _a !== void 0 ? _a : "zayadelger@tomujin.digital",
                subject: `TOMUJIN DIGITAL code you requested - ${code}`,
                html: `<p>Your verification code is: ${code} - TOMUJIN DIGITAL TEAM.</p>`,
            });
        });
    },
};
