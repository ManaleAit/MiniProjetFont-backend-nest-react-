"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = ({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "root",
    database: "testppp",
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true
});
//# sourceMappingURL=typeorm.config.js.map