const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// API للطلبات
app.post('/api/order', (req, res) => {
    console.log('طلب:', req.body);
    res.json({success: true, id: 'ORDER-' + Date.now()});
});

// إحصائيات
app.get('/api/stats', (req, res) => {
    res.json({
        ordersToday: 247,
        totalRevenue: 12450,
        services: 12
    });
});

app.listen(port, () => {
    console.log('SMM Panel Backend: ' + port);
});
