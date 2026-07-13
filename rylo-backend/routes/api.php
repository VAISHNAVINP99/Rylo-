<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\ContactEnquiryController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\Api\PrivacyPolicyController;
use App\Http\Controllers\Api\TermsConditionController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\PricingController;
use App\Http\Controllers\Api\HeroController;
use App\Http\Controllers\Api\WhyChooseController;
use App\Http\Controllers\Api\StatController;
use App\Http\Controllers\Api\CtaController;
use App\Http\Controllers\Api\FooterController;
use App\Http\Controllers\Api\NavbarController;
use App\Http\Controllers\Api\BranchController;
use App\Http\Controllers\Api\JobApplicationController;
use App\Http\Controllers\Api\PaymentController;



Route::apiResource('services', ServiceController::class);

Route::get('/job-applications', [JobApplicationController::class, 'index']);

Route::get('/job-applications/{id}', [JobApplicationController::class, 'show']);

Route::post('/job-applications', [JobApplicationController::class, 'store']);

Route::get('/branches', [BranchController::class, 'index']);
Route::get('/branches/{id}', [BranchController::class, 'show']);


Route::get('/pricing', [PricingController::class,'index']);
Route::get('/pricing/{id}', [PricingController::class,'show']);

Route::get('/footer-settings', [FooterController::class, 'index']);

Route::get('/cta', [CtaController::class, 'index']);

Route::get('/stats', [StatController::class, 'index']);

Route::get('/why-choose', [WhyChooseController::class, 'index']);


Route::get('/hero',[HeroController::class,'index']);

Route::get('/pricing', [PricingController::class,'index']);

Route::get('/about', [AboutController::class, 'index']);

Route::get('/terms-conditions', [TermsConditionController::class, 'index']);




Route::get('/bookings', [BookingController::class, 'index']);
Route::get('/bookings/{id}', [BookingController::class, 'show']);
Route::post('/bookings', [BookingController::class, 'store']);
Route::put('/bookings/{id}', [BookingController::class, 'update']);
Route::delete('/bookings/{id}', [BookingController::class, 'destroy']);

Route::apiResource(
    'contact-enquiries',
    ContactEnquiryController::class
);

Route::apiResource('reviews', ReviewController::class);

Route::get(
    'settings',
    [SettingController::class,'index']
);



Route::get('/privacy-policy', [PrivacyPolicyController::class,'index']);

Route::get('/navbar', [NavbarController::class, 'index']);

Route::get('/payment-setting', [PaymentController::class, 'index']);

