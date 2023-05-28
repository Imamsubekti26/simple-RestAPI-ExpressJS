# Rest API ExpressJS

## Tujuan

- Membuat RestfulAPI Sederhana
- menggunakan NodeJS dan database MySql
- yang berisi tentang daftar akun media sosial yang dimiliki oleh seseorang

---

## Dependensi

- ExpressJS (web server)
- MySql2 (MySql driver)
- Dotenv (environment variable)
- Nodemon (merestart server otomatis)

---

## Endpoint

| Endpoin          | Method | Kegunaan                  |
| ---------------- | ------ | ------------------------- |
| `/api/users`     | GET    | mengambil data            |
| `/api/users/:id` | GET    | mengambil 1 data spesifik |
| `/api/users`     | POST   | menambahkan data          |
| `/api/users/:id` | PUT    | mengupdate data           |
| `/api/users/:id` | DELETE | menghapus data            |

---

## Database

karena belum menggunakan migration, maka silahkan buat databasenya manual

```sql
    CREATE TABLE `users` (
      `id` int(11) NOT NULL,
      `email` varchar(100) NOT NULL,
      `name` varchar(50) NOT NULL,
      `linkedin` varchar(50) NOT NULL,
      `twitter` varchar(50) NOT NULL,
      `instagram` varchar(50) NOT NULL,
      `tiktok` varchar(50) NOT NULL,
      `created_at` datetime NOT NULL,
      `updated_at` datetime DEFAULT NULL,
      `deleted_at` datetime DEFAULT NULL
    )
```
