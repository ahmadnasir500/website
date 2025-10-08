<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class AuthController extends Controller
{
    function login()
    {
        if (auth()->check()) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }
        return Inertia::render('Auth/Login');
    }
    function authenticate(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        return redirect()->intended(RouteServiceProvider::HOME);
    }
    
    public function logout()
    {
        auth()->logout();
        return redirect()->route('login');
    }
}
