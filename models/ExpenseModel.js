import { INTEGER, STRING, DOUBLE } from 'sequelize'
import { sequelize } from '../infra/db/db.js'

const Expense = sequelize.define('expense', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: STRING,
        allowNull: false
    },
    amount: {
        type: DOUBLE
    }
})

export default Expense