<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ticketNumber = $_POST['ticketNumber'] ?? '';
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $complaint = $_POST['complaint'] ?? '';
    
    $mail = new PHPMailer(true);
    
    try {
        // Konfigurasi SMTP Qontak
        $mail->isSMTP();
        $mail->Host       = 'smtp.qontak.com'; // Ganti dengan SMTP host Qontak Anda
        $mail->SMTPAuth   = true;
        $mail->Username   = 'your-email@domain.com'; // Ganti dengan email SMTP Anda
        $mail->Password   = 'your-password'; // Ganti dengan password SMTP Anda
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        
        // Pengirim dan penerima
        $mail->setFrom('noreply@alfamind.com', 'Alfamind Dashboard');
        $mail->addAddress('herdiansyah.elmi@sat.co.id');
        $mail->addReplyTo($email, $name);
        
        // Konten email
        $mail->isHTML(true);
        $mail->Subject = 'Ticket Komplain #' . $ticketNumber;
        $mail->Body    = "
            <h3>Ticket Komplain #$ticketNumber</h3>
            <p><strong>Tanggal:</strong> " . date('d/m/Y H:i:s') . "</p>
            <hr>
            <p><strong>Nama:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>No. Telepon:</strong> $phone</p>
            <hr>
            <p><strong>Deskripsi Komplain:</strong></p>
            <p>" . nl2br(htmlspecialchars($complaint)) . "</p>
        ";
        $mail->AltBody = "Ticket Number: $ticketNumber\nTanggal: " . date('d/m/Y H:i:s') . "\n\nNama: $name\nEmail: $email\nNo. Telepon: $phone\n\nDeskripsi Komplain:\n$complaint";
        
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Email berhasil dikirim']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Gagal mengirim email: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
