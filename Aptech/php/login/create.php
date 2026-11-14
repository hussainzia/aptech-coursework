<?php
session_start();
require 'config.php';

$error = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email    = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirm  = $_POST['confirm'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Please enter a valid email address.';
    } elseif (strlen($password) < 8) {
        $error = 'Password must be at least 8 characters long.';
    } elseif ($password !== $confirm) {
        $error = 'The two passwords do not match.';
    } else {
        // password_hash() salts and hashes the password, so the real password is never stored.
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
        $stmt->bind_param('ss', $email, $hash);

        try {
            $stmt->execute();
            session_regenerate_id(true);
            $_SESSION['user_id'] = $stmt->insert_id;
            $_SESSION['email']   = $email;
            header('Location: profile.php');
            exit;
        } catch (mysqli_sql_exception $e) {
            if ($e->getCode() !== 1062) { // 1062 = duplicate entry
                throw $e;
            }
            $error = 'An account with that email already exists.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create account</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body class="bg-body-tertiary">
    <main class="container py-5" style="max-width: 420px;">
        <div class="card shadow-sm border-0">
            <div class="card-body p-4">
                <h1 class="h3 mb-1">Create an account</h1>
                <p class="text-secondary mb-4">It only takes a minute</p>

                <?php if ($error): ?>
                    <div class="alert alert-danger" role="alert"><?= e($error) ?></div>
                <?php endif; ?>

                <form method="post" novalidate>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" name="email"
                               value="<?= e($email) ?>" autocomplete="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password"
                               minlength="8" autocomplete="new-password" required>
                        <div class="form-text">At least 8 characters.</div>
                    </div>
                    <div class="mb-4">
                        <label for="confirm" class="form-label">Confirm password</label>
                        <input type="password" class="form-control" id="confirm" name="confirm"
                               autocomplete="new-password" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Create account</button>
                </form>

                <p class="text-center mt-4 mb-0">
                    Already registered? <a href="login.php">Log in</a>
                </p>
            </div>
        </div>
    </main>
</body>
</html>
