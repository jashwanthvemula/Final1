const express = require('express');
const calendarRoutes = require('./routes/calendarRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', calendarRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
