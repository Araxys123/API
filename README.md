# Simple API with Node.js and Express

## Cài đặt

1. Clone repository hoặc tải xuống mã nguồn.
2. Chuyển vào thư mục dự án:
   ```bash
   cd simple-api
   ```
3. Cài đặt các phụ thuộc:
   ```bash
   npm install
   ```

## Chạy API

1. **Cài đặt MongoDB**:
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

2. **Chạy server**:
   - Sử dụng Nodemon để chạy server:
     ```bash
     npm run dev
     ```

3. **Kiểm tra API**:
   - Sử dụng Postman hoặc cURL để gửi yêu cầu đến các endpoint của API.

## Endpoint

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
