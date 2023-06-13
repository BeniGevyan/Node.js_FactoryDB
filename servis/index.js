const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UsersRouter = require('./routers/usersRouter');
const DepartmentsRouter = require('./routers/departmentsRouter');
const EmployeesRouter = require('./routers/employeesRouter');
const ShiftsRouter = require('./routers/shiftRouter');
const authRouter = require('./routers/authRouter');
const testToken = require('./middlewares/token');
const { getAllUsersWsAddDb } = require('./bll/usersBLL.JS');
const getEmploeeaddDB = require('./getEmploee');


connectDB();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

// app.use('/auth', authRouter)

// app.use(testToken)

app.use('/users', UsersRouter);

app.use('/users', UsersRouter);
app.use('/departments', DepartmentsRouter);
app.use('/employees', EmployeesRouter);
app.use('/shift', ShiftsRouter);



app.listen(PORT, () => console.log(`${PORT} ,server up`));



