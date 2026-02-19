# Setup Database Login

## Langkah-langkah Instalasi:

### 1. Import Database
```bash
# Masuk ke MySQL
mysql -u root -p

# Atau import langsung
mysql -u root -p < database.sql
```

### 2. Konfigurasi Database
Edit file `db_config.php` sesuai dengan setting MySQL Anda:
```php
$db_host = 'localhost';
$db_name = 'dashboard_db';
$db_user = 'root';
$db_pass = ''; // Isi password MySQL Anda
```

### 3. Default User Login

**Admin:**
- Username: `admin`
- Password: `admin123`

**User:**
- Username: `user`
- Password: `user123`

⚠️ **PENTING:** Ganti password default setelah login pertama!

### 4. Akses Dashboard
- Login: `http://localhost/Dashboard/login.html`
- Dashboard: `http://localhost/Dashboard/index.php`

## Struktur File:

```
Dashboard/
├── login.html          # Halaman login
├── login.php           # Handler login
├── logout.php          # Handler logout
├── auth_check.php      # Middleware autentikasi
├── db_config.php       # Konfigurasi database
├── database.sql        # Schema database
├── index.php           # Dashboard (protected)
└── ...
```

## Keamanan:

1. ✅ Password di-hash dengan bcrypt
2. ✅ Session management
3. ✅ SQL injection protection (PDO prepared statements)
4. ✅ XSS protection (htmlspecialchars)
5. ✅ Authentication middleware

## Upload ke Repository:

**File yang AMAN untuk di-upload:**
- ✅ `database.sql` (password sudah ter-hash)
- ✅ `login.html`
- ✅ `login.php`
- ✅ `logout.php`
- ✅ `auth_check.php`

**File yang JANGAN di-upload (tambahkan ke .gitignore):**
- ❌ `db_config.php` (berisi kredensial database)

### Buat file .gitignore:
```
db_config.php
```

### Buat file db_config.example.php untuk repository:
```php
<?php
// Copy file ini ke db_config.php dan sesuaikan dengan setting Anda
$db_host = 'localhost';
$db_name = 'dashboard_db';
$db_user = 'root';
$db_pass = ''; // Isi password MySQL Anda
date_default_timezone_set('Asia/Jakarta');
?>
```

## Menambah User Baru:

### Via PHP Script:
```php
<?php
$password = password_hash('password_baru', PASSWORD_DEFAULT);
echo $password; // Copy hash ini ke database
?>
```

### Via SQL:
```sql
INSERT INTO users (username, password, email, role) VALUES 
('username_baru', '$2y$10$...hash...', 'email@example.com', 'user');
```

## Troubleshooting:

1. **Error "Cannot modify header information"**
   - Pastikan tidak ada output sebelum `session_start()`
   - Pastikan tidak ada spasi/BOM di awal file PHP

2. **Login gagal terus**
   - Cek koneksi database di `db_config.php`
   - Pastikan tabel users sudah ter-import
   - Cek username dan password

3. **Redirect loop**
   - Clear browser cookies/session
   - Cek file `auth_check.php`
