"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = (req, file, callback) => {
    const name = file.originalname;
    const fileExtName = 'nom';
    callback(null, `${name}`);
};
//# sourceMappingURL=editFileName.js.map