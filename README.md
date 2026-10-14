# ระบบจัดการสินค้าคงคลัง (Inventory Management System)

เว็บแอปพลิเคชันขนาดเล็กสำหรับจัดการข้อมูลสินค้าคงคลัง พัฒนาขึ้นเพื่อเป็นส่วนหนึ่งของงานมอบหมายวิชาพัฒนาเว็บไซต์

## รายละเอียดโปรเจกต์
โปรเจกต์นี้แยกส่วนการทำงานเป็น 2 ส่วนหลัก:
- **Backend**: Node.js, Express.js และ SQLite (ฐานข้อมูล)
- **Frontend**: HTML5, JavaScript (Fetch API) และ Bootstrap 5

---

## วิธีการติดตั้ง (Installation)

1. Clone Repository นี้มายังเครื่องของคุณ
2. เปิด Terminal แล้วเข้าไปที่โฟลเดอร์ `server`:
   ```bash
   cd server
   ```
3. ติดตั้งแพ็กเกจที่จำเป็น:
   ```bash
   npm install
   ```

---

## วิธีการรันโปรเจกต์ (Running)

1. เริ่มต้นรันเซิร์ฟเวอร์จากโฟลเดอร์ `server`:
   ```bash
   npm run dev
   ```
   *(หรือใช้คำสั่ง `npm start`)*
2. เปิดเบราว์เซอร์แล้วเข้าไปที่: `http://localhost:3000`

---

## รายการ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/products` | ดึงข้อมูลสินค้าทั้งหมดจากฐานข้อมูล |
| **POST** | `/api/products` | เพิ่มสินค้าใหม่เข้าสู่ฐานข้อมูล |
| **DELETE** | `/api/products/:id` | ลบสินค้าตาม ID ที่กำหนด |

---

## ภาพหลักฐานการดีบัก (Debugging Evidence)

### 1. ภาพหน้าจอการทำงานของเว็บแอปพลิเคชัน (Frontend & API Response)
> *(แนบภาพหน้าจอเว็บแอปพลิเคชันที่คุณรันขึ้นมาใช้งานจริงตรงนี้)*
> `![Frontend Screenshot](path/to/image1.png)`

### 2. ภาพหน้าจอการทำงานของ Server / Database Console
> *(แนบภาพ Terminal ที่แสดงข้อความว่าเซิร์ฟเวอร์รันสำเร็จและเชื่อมต่อฐานข้อมูลได้แล้วตรงนี้)*
> `![Backend Debugging Screenshot](path/to/image2.png)`
