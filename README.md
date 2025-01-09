# Hướng dẫn chạy dự án API với Node.js và MongoDB

## 1. Cài đặt Node.js
- Tải và cài đặt Node.js từ trang chính thức: [Node.js Download](https://nodejs.org/).
- Chọn phiên bản LTS (Long Term Support) để đảm bảo tính ổn định.

## 2. Cài đặt MongoDB
- Tải và cài đặt MongoDB từ trang chính thức: [MongoDB Download Center](https://www.mongodb.com/try/download/community).
- Giải nén file zip vào thư mục, ví dụ: `C:\mongodb`.
- Mở Command Prompt và chuyển đến thư mục `bin`:
  ```bash
  cd C:\mongodb\bin
  ```
- Tạo thư mục lưu trữ dữ liệu:
  ```bash
  mkdir C:\data\db
  ```
- Khởi động MongoDB:
  ```bash
  mongod
  ```

### 3. Sử dụng MongoDB Compass
- **Tải và cài đặt MongoDB Compass**: Bạn có thể tải MongoDB Compass từ trang chính thức: [MongoDB Compass Download](https://www.mongodb.com/try/download/compass).
- **Kết nối đến MongoDB**:
  - Mở MongoDB Compass.
  - Nhập URI kết nối: `mongodb://127.0.0.1:27017/mydatabase` (hoặc `mongodb://localhost:27017/mydatabase`).
  - Nhấn "Connect".
- **Kiểm tra dữ liệu**:
  - Sau khi kết nối, bạn sẽ thấy danh sách các collection trong cơ sở dữ liệu. Bạn có thể nhấp vào collection để xem các tài liệu bên trong.

## 4. Clone hoặc tải xuống mã nguồn
- Sử dụng Git để clone dự án:
  ```bash
  git clone <repository-url>
  ```
- Hoặc tải xuống mã nguồn và giải nén vào thư mục mong muốn.

## 5. Chuyển vào thư mục dự án
- Mở terminal và điều hướng đến thư mục chứa dự án:
  ```bash
  cd path\to\your\project\simple-api
  ```

## 6. Cài đặt các phụ thuộc
- Chạy lệnh sau để cài đặt các thư viện cần thiết:
  ```bash
  npm install
  ```

## 7. Chạy server
- Sử dụng Nodemon để chạy server:
  ```bash
  npm run dev
  ```

## 8. Kiểm tra API
- Sử dụng Postman hoặc cURL để gửi yêu cầu đến các endpoint của API.

## 9. Endpoint

### Quản lý Người dùng
- **Đăng ký người dùng**:
  - **Method**: `POST`
  - **URL**: `/api/register`
  - **Body** (JSON):
    ```json
    {
        "name": "User Name",
        "email": "user@example.com",
        "password": "userpassword",
        "role": "user" // Tùy chọn, mặc định là 'user'
    }
    ```

- **Đăng nhập người dùng**:
  - **Method**: `POST`
  - **URL**: `/api/login`
  - **Body** (JSON):
    ```json
    {
        "email": "user@example.com",
        "password": "userpassword"
    }
    ```

- **Lấy danh sách người dùng**:
  - **Method**: `GET`
  - **URL**: `/api/users`
  - **Authorization**: Chỉ cho phép admin.

- **Lấy thông tin người dùng theo ID**:
  - **Method**: `GET`
  - **URL**: `/api/users/:id`
  - **Authorization**: Chỉ cho phép admin.

- **Cập nhật thông tin người dùng theo ID**:
  - **Method**: `PUT`
  - **URL**: `/api/users/:id`
  - **Authorization**: Chỉ cho phép admin.
  - **Body** (JSON):
    ```json
    {
        "name": "Updated Name",
        "email": "updated@example.com",
        "password": "newpassword" // Tùy chọn
    }
    ```

- **Xóa người dùng theo ID**:
  - **Method**: `DELETE`
  - **URL**: `/api/users/:id`
  - **Authorization**: Chỉ cho phép admin.

### Quản lý Sản phẩm
- **Thêm sản phẩm mới**:
  - **Method**: `POST`
  - **URL**: `/api/products`
  - **Authorization**: Cần xác thực.
  - **Body** (JSON):
    ```json
    {
        "name": "Product Name",
        "description": "Product Description",
        "price": 100,
        "quantity": 10
    }
    ```

- **Lấy danh sách sản phẩm**:
  - **Method**: `GET`
  - **URL**: `/api/products`
  - **Authorization**: Cần xác thực.

- **Cập nhật sản phẩm theo ID**:
  - **Method**: `PUT`
  - **URL**: `/api/products/:id`
  - **Authorization**: Cần xác thực.
  - **Body** (JSON):
    ```json
    {
        "name": "Updated Product Name",
        "description": "Updated Description",
        "price": 150,
        "quantity": 5
    }
    ```

- **Xóa sản phẩm theo ID**:
  - **Method**: `DELETE`
  - **URL**: `/api/products/:id`
  - **Authorization**: Cần xác thực.
