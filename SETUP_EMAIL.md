# Konfigurasi Email Komplain via SMTP Qontak

## Instalasi

1. Install Composer (jika belum ada): https://getcomposer.org/download/

2. Install PHPMailer:
```bash
cd D:\Dashboard
composer install
```

## Konfigurasi SMTP Qontak

Edit file `send_email.php` pada baris berikut:

```php
$mail->Host       = 'smtp.qontak.com'; // SMTP host dari Qontak
$mail->Username   = 'your-email@domain.com'; // Email SMTP Anda
$mail->Password   = 'your-password'; // Password SMTP Anda
$mail->Port       = 587; // Port SMTP (biasanya 587 atau 465)
```

Ganti dengan kredensial SMTP Qontak Anda.

## Testing

1. Jalankan web server lokal:
```bash
php -S localhost:8000
```

2. Buka browser: http://localhost:8000/index.html

3. Klik chatbot dan pilih "📧 Kirim Ticket Komplain"

4. Isi form dan kirim

## Fitur

- Generate nomor ticket otomatis (TKT-timestamp)
- Form komplain di chatbot
- Kirim email via SMTP Qontak ke herdiansyah.elmi@sat.co.id
- Email format HTML dengan detail lengkap
- Reply-to otomatis ke email pengirim komplain
