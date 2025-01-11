# Tài liệu Dự án API với Node.js và MongoDB

## 1. Giới thiệu
Dự án này là một API đơn giản được xây dựng bằng Node.js và Express, sử dụng MongoDB làm cơ sở dữ liệu. API cung cấp các chức năng quản lý người dùng (đăng ký, đăng nhập) và quản lý sản phẩm (CRUD cho sản phẩm).

## 2. Cấu trúc dự án
- **models/**: Chứa các mô hình dữ liệu cho người dùng và sản phẩm.
  - `User.js`: Mô hình cho người dùng.
  - `Product.js`: Mô hình cho sản phẩm.
- **middleware/**: Chứa các middleware để xử lý xác thực và phân quyền.
  - `auth.js`: Middleware xác thực người dùng.
  - `authAdmin.js`: Middleware xác thực quản trị viên.
- **server.js**: Tập tin chính để khởi động server và định nghĩa các endpoint API.
- **.env**: Tập tin chứa các biến môi trường, bao gồm khóa bí mật JWT.

## 3. Các chức năng chính
- **Quản lý người dùng**:
  - Đăng ký người dùng mới.
  - Đăng nhập người dùng và trả về token.
- **Quản lý sản phẩm**:
  - Thêm sản phẩm mới.
  - Lấy danh sách sản phẩm.
  - Cập nhật thông tin sản phẩm.
  - Xóa sản phẩm.

## 4. API Endpoints
### 4.1. Đăng ký người dùng
- **Phương thức**: POST
- **Đường dẫn**: `/api/register`
- **Mô tả**: Cho phép người dùng mới đăng ký. Dữ liệu đầu vào được xác thực trước khi lưu vào cơ sở dữ liệu.

### 4.2. Đăng nhập người dùng
- **Phương thức**: POST
- **Đường dẫn**: `/api/login`
- **Mô tả**: Cho phép người dùng đăng nhập và nhận token xác thực.

### 4.3. Quản lý sản phẩm
- **Thêm sản phẩm mới**: POST `/api/products`
- **Lấy danh sách sản phẩm**: GET `/api/products`
- **Cập nhật sản phẩm**: PUT `/api/products/:id`
- **Xóa sản phẩm**: DELETE `/api/products/:id`

## 5. Middleware
- **auth.js**: Middleware xác thực người dùng bằng cách kiểm tra token JWT.
- **authAdmin.js**: Middleware xác thực quản trị viên, chỉ cho phép người dùng có vai trò admin truy cập vào các endpoint nhạy cảm.

## 6. Cấu trúc dữ liệu
### 6.1. User Schema
```javascript
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});
```

### 6.2. Product Schema
```javascript
const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});
```

## 7. Thư viện và công cụ
- **Mongoose**: Thư viện để kết nối và tương tác với MongoDB từ Node.js.
- **Bcryptjs**: Thư viện để mã hóa mật khẩu.
- **Jsonwebtoken**: Thư viện để tạo và xác thực token JWT.
- **Express-validator**: Thư viện để xác thực và làm sạch dữ liệu đầu vào.
- **Postman**: Công cụ để kiểm tra API.
- **Nodemon**: Công cụ giúp tự động khởi động lại server khi có thay đổi trong mã nguồn.

## 8. Bảo mật và Xử lý Lỗi
- Sử dụng biến môi trường để lưu trữ khóa bí mật JWT.
- Cải thiện xử lý lỗi để cung cấp thông tin chi tiết hơn trong phản hồi lỗi mà không tiết lộ thông tin nhạy cảm.

## 9. Bài học cá nhân
- **Kỹ năng lập trình**: Cải thiện kỹ năng lập trình Node.js và Express.
- **Bảo mật**: Nhận thức được tầm quan trọng của bảo mật thông tin người dùng.
- **Xử lý lỗi**: Học cách cung cấp thông tin chi tiết về lỗi để dễ dàng gỡ lỗi.
- **Quản lý dữ liệu**: Hiểu rõ hơn về cách sử dụng MongoDB và Mongoose.
- **Xác thực dữ liệu**: Nhận thức được tầm quan trọng của việc xác thực dữ liệu đầu vào.

## 10. Hướng phát triển
- **Thêm tính năng phân quyền**: Quản lý quyền truy cập cho người dùng dựa trên vai trò.
- **Tích hợp xác thực OAuth**: Cung cấp phương thức đăng nhập qua các dịch vụ bên ngoài như Google, Facebook.
- **Xây dựng giao diện người dùng**: Tạo một ứng dụng frontend để tương tác với API.
- **Triển khai lên môi trường sản xuất**: Sử dụng các dịch vụ như Heroku hoặc AWS để triển khai ứng dụng.

## 11. Tài liệu tham khảo
- [Node.js Tutorial](https://nodejs.org/en/docs/guides/)
- [Express Guide](https://expressjs.com/en/guide/routing.html)
- [UDEMY - Backend RESTFul Server với Node.JS và Express (SQL/MongoDB)](https://www.udemy.com/course/backend-restful-server-voi-nodejs-va-express/)  
- [Tài liệu chính thức Node.js](https://nodejs.org/en/docs/)  
- [Tài liệu chính thức MongoDB](https://docs.mongodb.com/)  
- [Mô hình thiết kế Node.js](https://www.nodejsdesignpatterns.com/) - Một cuốn sách bao gồm các thực hành tốt nhất và mô hình thiết kế cho các ứng dụng Node.js.  
- [Phát triển Node.js](https://www.packtpub.com/product/learning-node-js-development/9781785880800) - Một cuốn sách cung cấp cái nhìn sâu sắc về việc xây dựng ứng dụng với Node.js.  
- [Thành thạo MongoDB 4.x](https://www.packtpub.com/product/mastering-mongodb-4-x/9781838820800) - Một hướng dẫn toàn diện về MongoDB.  
