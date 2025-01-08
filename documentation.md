# Tài liệu Dự án API với Node.js và MongoDB

## 1. Giới thiệu
Dự án này là một API đơn giản được xây dựng bằng Node.js và Express, sử dụng MongoDB làm cơ sở dữ liệu. API cung cấp các chức năng quản lý người dùng (đăng ký, đăng nhập) và quản lý sản phẩm (CRUD cho sản phẩm).

## 2. Cơ sở lý thuyết
### 2.1. Node.js
Node.js là một môi trường chạy JavaScript trên máy chủ, cho phép xây dựng các ứng dụng mạng nhanh chóng và hiệu quả. Node.js sử dụng mô hình sự kiện không đồng bộ, giúp xử lý nhiều kết nối đồng thời mà không bị chậm trễ.

### 2.2. Express
Express là một framework cho Node.js, giúp đơn giản hóa việc xây dựng ứng dụng web và API. Express cung cấp các tính năng như routing, middleware, và quản lý yêu cầu HTTP.

### 2.3. MongoDB
MongoDB là một cơ sở dữ liệu NoSQL, lưu trữ dữ liệu dưới dạng tài liệu JSON. MongoDB cho phép lưu trữ dữ liệu linh hoạt và mở rộng dễ dàng, phù hợp cho các ứng dụng có khối lượng dữ liệu lớn.

## 3. Thư viện và công cụ
- **Mongoose**: Thư viện để kết nối và tương tác với MongoDB từ Node.js. Mongoose cung cấp một cách dễ dàng để định nghĩa các mô hình dữ liệu và thực hiện các thao tác CRUD.
- **Bcryptjs**: Thư viện để mã hóa mật khẩu, giúp bảo mật thông tin người dùng.
- **Jsonwebtoken**: Thư viện để tạo và xác thực token JWT, cho phép quản lý phiên làm việc của người dùng.
- **Postman**: Công cụ để kiểm tra API, cho phép gửi yêu cầu HTTP và xem phản hồi.
- **Nodemon**: Công cụ giúp tự động khởi động lại server khi có thay đổi trong mã nguồn.

## 4. Cấu trúc dự án
- **models/**: Chứa các mô hình dữ liệu cho người dùng và sản phẩm.
  - `User.js`: Mô hình cho người dùng.
  - `Product.js`: Mô hình cho sản phẩm.
- **server.js**: Tập tin chính để khởi động server và định nghĩa các endpoint API.
- **README.md**: Tài liệu hướng dẫn sử dụng dự án.

## 5. Các chức năng chính
- **Quản lý người dùng**:
  - Đăng ký người dùng mới.
  - Đăng nhập người dùng và trả về token.
- **Quản lý sản phẩm**:
  - Thêm sản phẩm mới.
  - Lấy danh sách sản phẩm.
  - Cập nhật thông tin sản phẩm.
  - Xóa sản phẩm.

## 6. Kết luận
Dự án API này cung cấp một nền tảng vững chắc cho việc quản lý người dùng và sản phẩm. Với việc sử dụng Node.js, Express và MongoDB, dự án có thể mở rộng và tích hợp thêm nhiều tính năng trong tương lai.

## 7. Hướng phát triển
- **Thêm tính năng phân quyền**: Quản lý quyền truy cập cho người dùng dựa trên vai trò.
- **Tích hợp xác thực OAuth**: Cung cấp phương thức đăng nhập qua các dịch vụ bên ngoài như Google, Facebook.
- **Xây dựng giao diện người dùng**: Tạo một ứng dụng frontend để tương tác với API.
- **Triển khai lên môi trường sản xuất**: Sử dụng các dịch vụ như Heroku hoặc AWS để triển khai ứng dụng.
