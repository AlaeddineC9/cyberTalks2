import app from '@adonisjs/core/services/app';
import { defineConfig } from '@adonisjs/lucid';
const dbConfig = defineConfig({
    connection: 'sqlite',
    connections: {
        sqlite: {
            client: 'better-sqlite3',
            connection: {
                filename: app.tmpPath('database.sqlite3')
            },
            useNullAsDefault: true,
            migrations: {
                naturalSort: true,
                paths: ['database/migrations'],
            },
        },
    },
});
export default dbConfig;
//# sourceMappingURL=database.js.map