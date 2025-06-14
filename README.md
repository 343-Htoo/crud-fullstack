# crud laravel12 and react starter kit

## 📌 Description
A full-stack web application built using Laravel (API backend) and React.js (frontend).

## 🛠️ Tech Stack
- Laravel 10 (PHP 8.x)
- React.js (Vite or CRA)
- MySQL / PostgreSQL
- RESTful API / Sanctum authentication (သို့မဟုတ် JWT)

## 🚀 Features
- User registration/login
- API communication with token-based authentication
- CRUD functionality
- Responsive design

## 🔧 Installation Guide

### Backend (Laravel)
```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
