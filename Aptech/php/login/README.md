# 🔐 PHP Login System

A small but secure sign-up / login system built with PHP, MySQL and Bootstrap 5.

| File | Purpose |
|------|---------|
| `schema.sql` | Creates the `db` database and the `users` table |
| `config.php` | Database connection and the `e()` HTML-escaping helper |
| `create.php` | Sign-up form (validates input, hashes the password) |
| `login.php` | Login form (checks the hashed password) |
| `profile.php` | Page that only logged-in users can see |
| `logout.php` | Ends the session |

## Security features

- **Prepared statements** stop SQL injection.
- **`password_hash()` / `password_verify()`**: passwords are never stored as plain text.
- **`session_regenerate_id()`** after login prevents session fixation.
- **`htmlspecialchars()`** on everything printed back to the page prevents XSS.

## Run it with XAMPP

1. Copy this `login` folder into `C:\xampp\htdocs\`.
2. Start **Apache** and **MySQL** in the XAMPP control panel.
3. Open phpMyAdmin (http://localhost/phpmyadmin), go to the **SQL** tab and run `schema.sql`.
4. Visit http://localhost/login/create.php to make an account, then log in.
