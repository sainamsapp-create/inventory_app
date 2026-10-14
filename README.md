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
<img width="1279" height="719" alt="ภาพหน้าจอการทำงานของเว็บแอปพลิเคชัน (Frontend   API Response)2" src="https://github.com/user-attachments/assets/a883ad70-4dd2-4116-8805-5f22f43f88db" />
<img width="1279" height="719" alt="debug-frontend" src="https://github.com/user-attachments/assets/1b3f8b35-f519-4280-bd6c-261e13f18b9a" />


### 2. ภาพหน้าจอการทำงานของ Server / Database Console
> <img width="1279" height="719" alt="debug-api" src="https://github.com/user-attachments/assets/31f70a65-d9f9-48f4-bb4e-24d02d4e0157" />

