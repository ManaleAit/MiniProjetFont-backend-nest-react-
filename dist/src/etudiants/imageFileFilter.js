"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
//# sourceMappingURL=imageFileFilter.js.map