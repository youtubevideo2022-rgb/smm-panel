const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static('.'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/order', (req, res) => {
    console.log('🆕 طلب جديد:', req.body);
    res.json({
        success: true,
        orderId: 'SMM-' + Date.now(),
        status: 'قيد المعالجة',
        time: '5-30 دقيقة'
    });
});

app.get('/api/stats', (req, res) => {
    res.json({
        orders: 247,
        revenue: '$12,450',
        status: 'أونلاين'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('🔥 SMM Panel Live على المنفذ ' + port);
});
