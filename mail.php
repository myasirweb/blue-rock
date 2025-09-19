<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = htmlspecialchars($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = ""; 
    $subject = "New Contact Form Submission"; // Add a subject
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $fullMessage = "First Name: $fname\nLast Name: $lname\nPhone: $phone\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "success";
    } else {
        echo "fail";
    }
}






// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
    // Sanitize and validate email
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Email configuration
        $to = 'office@bluerockcapital.at';
        $subject = 'New Newsletter Subscription';
        $message = "A new user has subscribed to your newsletter:\n\nEmail: $email";
        $headers = "From: newsletter@yourdomain.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Send email
        $mailSent = mail($to, $subject, $message, $headers);
        
        // Respond to the client
        if ($mailSent) {
            echo json_encode(['success' => true, 'message' => 'Thank you for subscribing!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to send subscription. Please try again.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    }
    exit;
}




?>
