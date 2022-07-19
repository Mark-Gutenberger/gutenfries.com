import { Database, MySQLConnector } from 'denoDB';
import { config as dotEnvConfig } from 'dotEnv';

import { Business, TestModel } from './models.ts';

dotEnvConfig({ export: true });

const env = Deno.env.toObject();

const database: string = env.MYSQLDATABASE;
const host: string = env.MYSQLHOST;
const username: string = env.MYSQLUSER;
const password: string = env.MYSQLPASSWORD;
const port: number = parseInt(env.MYSQLPORT);

const connector = new MySQLConnector({
	database: database,
	host: host,
	username: username,
	password: password,
	port: port,
});

export const db = new Database(connector);

db.link([TestModel, Business]);

db.sync({ drop: true });
