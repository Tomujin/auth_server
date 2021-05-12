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
exports.abilities = exports.userinfo = void 0;
const extra_1 = require("@casl/ability/extra");
const client_1 = require("@prisma/client");
const moment = require("moment");
const passport = require("passport");
const authorization_1 = require("../../core/authorization");
const utils_1 = require("./utils");
exports.userinfo = [
    passport.authenticate('jwt', {
        session: false,
        scope: ['openid'],
    }),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const appId = req.session.client_id;
        const scopes = req.session.scope;
        const user = yield utils_1.getUserById(req.user.id);
        if (!user)
            return res.status(401).json({
                success: false,
                message: 'The user does not exists!',
            });
        const profile = user.Profile;
        const data = Object.assign(Object.assign({ sub: user.id }, (scopes.indexOf('email') > -1 && {
            email: user.email,
            email_verified: user.accountStatusType === client_1.AccountStatusType.CONFIRMED,
        })), (scopes.includes('profile')
            ? {
                name: profile === null || profile === void 0 ? void 0 : profile.displayName,
                family_name: profile === null || profile === void 0 ? void 0 : profile.lastName,
                given_name: profile === null || profile === void 0 ? void 0 : profile.firstName,
                middle_name: profile === null || profile === void 0 ? void 0 : profile.middleName,
                nickname: profile === null || profile === void 0 ? void 0 : profile.nickName,
                picture: profile === null || profile === void 0 ? void 0 : profile.picture,
                birthdate: (profile === null || profile === void 0 ? void 0 : profile.birthdate) &&
                    moment.parseZone(profile.birthdate).format(),
                updated_at: profile === null || profile === void 0 ? void 0 : profile.updatedAt.toISOString(),
                preferred_username: user.username,
            }
            : {}));
        return res.json({
            success: true,
            data,
        });
    }),
];
exports.abilities = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const rules = yield authorization_1.getRulesForUser(req);
    return res.json({
        success: true,
        data: {
            rules: extra_1.packRules(rules),
        },
    });
});
