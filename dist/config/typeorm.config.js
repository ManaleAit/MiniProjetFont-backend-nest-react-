"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = ({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "minip",
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true
});
//# sourceMappingURL=typeorm.config.js.map