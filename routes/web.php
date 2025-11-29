<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Artesaos\SEOTools\Facades\SEOMeta as FacadesSEOMeta;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login',[AuthController::class,'login'])->name('login');
Route::post('/login',[AuthController::class,'authenticate']);

Route::group(['middleware' => ['auth'],'prefix' => 'dashboard'], function () {
    Route::get('/', [AdminController::class,'index'])->name('dashboard');
    Route::resource('/post', PostController::class);
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::get('/', [HomeController::class,'index']);
Route::get('/news/{key}',[HomeController::class,'show']);
Route::get('/privacy-policy', function () {
    FacadesSEOMeta::setTitle('Privacy Policy');
    FacadesSEOMeta::setDescription('Read our Privacy Policy to understand how we handle your data and protect your privacy while using our website.');
    return Inertia::render('Guest/PrivacyPolicy',["seo" => [
        'title' => FacadesSEOMeta::getTitle(),
        'description' => FacadesSEOMeta::getDescription(),
        'keywords' => FacadesSEOMeta::getKeywords(),
        'canonical' => FacadesSEOMeta::getCanonical(),
    ]]);
});
Route::get('/terms-of-service', function () {
    FacadesSEOMeta::setTitle('Terms of Service');
    FacadesSEOMeta::setDescription('Review our Terms of Service to understand the rules and guidelines for using our website and services.');
    return Inertia::render('Guest/TermsOfService',["seo" => [
        'title' => FacadesSEOMeta::getTitle(),
        'description' => FacadesSEOMeta::getDescription(),
        'keywords' => FacadesSEOMeta::getKeywords(),
        'canonical' => FacadesSEOMeta::getCanonical(),
    ]]);
});
Route::get('/disclaimer', function () {
    FacadesSEOMeta::setTitle('Disclaimer');
    FacadesSEOMeta::setDescription('Read our Disclaimer to understand the limitations of liability and responsibilities regarding the use of our website and content.');
    return Inertia::render('Guest/Disclaimer',["seo" => [
        'title' => FacadesSEOMeta::getTitle(),
        'description' => FacadesSEOMeta::getDescription(),
        'keywords' => FacadesSEOMeta::getKeywords(),
        'canonical' => FacadesSEOMeta::getCanonical(),
    ]]);
});
Route::get('/terms-and-conditions', function () {
    FacadesSEOMeta::setTitle('Terms and Conditions');
    FacadesSEOMeta::setDescription('Read our Terms and Conditions to understand the legal agreements and obligations when using our website and services.');
    return Inertia::render('Guest/TermsAndConditions',["seo" => [
        'title' => FacadesSEOMeta::getTitle(),
        'description' => FacadesSEOMeta::getDescription(),
        'keywords' => FacadesSEOMeta::getKeywords(),
        'canonical' => FacadesSEOMeta::getCanonical(),
    ]]);
});

