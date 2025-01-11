const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { body, validationResult } = require('express-validator');
const User = require('./models/User');
const Product = require('./models/Product');
const auth = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// Kết nối đến MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Biến toàn cục để theo dõi ID cuối cùng
let lastProductId = 0;

app.post('/api/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role: role || 'user' });
    await user.save();
    res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role });
});

// Đăng nhập người dùng
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
});

// Quản lý sản phẩm
// Thêm sản phẩm mới
app.post('/api/products', auth, async (req, res) => {
    lastProductId++; // Tăng ID cuối cùng
    const product = new Product({ ...req.body, id: lastProductId }); // Gán ID cho sản phẩm
    await product.save();
    res.status(201).json(product);
});

// Lấy danh sách sản phẩm
app.get('/api/products', auth, async (req, res) => {
    const products = await Product.find().select('-_id -__v'); // Ẩn trường _id và __v
    res.json(products);
});

// Lấy danh sách người dùng
app.get('/api/users', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');
    const users = await User.find().select('-password -__v'); // Ẩn trường password và __v
    res.json(users);
});

// Lấy thông tin người dùng theo ID
app.get('/api/users/:id', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');
    const user = await User.findById(req.params.id).select('-password -__v');
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Cập nhật thông tin người dùng theo ID
app.put('/api/users/:id', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password -__v');
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Xóa người dùng theo ID
app.delete('/api/users/:id', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(204).send();
});

// Cập nhật sản phẩm
app.put('/api/products/:id', auth, async (req, res) => {
    const product = await Product.findOneAndUpdate({ id: parseInt(req.params.id) }, req.body, { new: true });
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Xóa sản phẩm
app.delete('/api/products/:id', auth, async (req, res) => {
    const product = await Product.findOneAndDelete({ id: parseInt(req.params.id) });
    if (!product) return res.status(404).send('Product not found');
    res.status(204).send();
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ error: err.message || 'Internal Server Error' });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
