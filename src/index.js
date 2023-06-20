const express = require('express');
const { Request, Response, NextFunction } = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UsersRouter = require('./routers/usersRouter');
const DepartmentsRouter = require('./routers/departmentsRouter');
const EmployeesRouter = require('./routers/employeesRouter');
const ShiftsRouter = require('./routers/shiftRouter');
const authRouter = require('./routers/authRouter');
const testToken = require('./middlewares/token');
const logger = require('./config/logger');


connectDB();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter)

// app.use(testToken)
 

app.use('/users', UsersRouter);
app.use('/departments', DepartmentsRouter);
app.use('/employees', EmployeesRouter);
app.use('/shift', ShiftsRouter);

// app.use(print) clear

// app.use((err, req, res, next) => {
//     logger(req, res, next)
    
// });


app.listen(PORT, () => console.log(`${PORT} ,server up`));
