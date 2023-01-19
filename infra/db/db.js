import { platform } from 'node:process';
import Sequelize from 'sequelize';

const os = platform;
const dbPath = (os !== 'win32') ? 'infra/db/expensesDatabase.sqlite' : 'infra\\db\\expensesDatabase.sqlite';
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
})

export default sequelize;