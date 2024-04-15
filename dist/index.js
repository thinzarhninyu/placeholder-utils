"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPlaceholders = exports.replacePlaceholders = void 0;
function replacePlaceholders(template, replacements, placeholderPrefix, placeholderSuffix) {
    var _a;
    if (placeholderPrefix === void 0) { placeholderPrefix = '{'; }
    if (placeholderSuffix === void 0) { placeholderSuffix = '}'; }
    var result = template;
    for (var key in replacements) {
        if (Object.prototype.hasOwnProperty.call(replacements, key)) {
            var replacementValue = (_a = replacements[key]) !== null && _a !== void 0 ? _a : '';
            result = result.replace(new RegExp("\\".concat(placeholderPrefix).concat(key, "\\").concat(placeholderSuffix), 'g'), replacementValue);
        }
    }
    return result;
}
exports.replacePlaceholders = replacePlaceholders;
;
function extractPlaceholders(template, placeholderPrefix, placeholderSuffix) {
    var _a;
    if (placeholderPrefix === void 0) { placeholderPrefix = '{'; }
    if (placeholderSuffix === void 0) { placeholderSuffix = '}'; }
    var regex = new RegExp("\\".concat(placeholderPrefix, "(.*?)\\").concat(placeholderSuffix), 'g');
    var matches = [];
    var match;
    while ((match = regex.exec(template)) !== null) {
        matches.push((_a = match[1]) !== null && _a !== void 0 ? _a : '');
    }
    return matches;
}
exports.extractPlaceholders = extractPlaceholders;
