<?php
session_start();
require 'config.php';

// Only logged-in users may see this page.
if (empty($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body class="bg-body-tertiary">
    <main class="container py-5" style="max-width: 520px;">
        <div class="card shadow-sm border-0 text-center">
            <div class="card-body p-5">
                <h1 class="h3">👋 Welcome!</h1>
                <p class="text-secondary">You are logged in as <strong><?= e($_SESSION['email']) ?></strong>.</p>
                <a href="logout.php" class="btn btn-outline-danger mt-2">Log out</a>
            </div>
        </div>
    </main>
</body>
</html>
