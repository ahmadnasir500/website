<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Inertia\Inertia;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'login' => 'required|string', // bisa email atau username
            'password' => 'required|string',
        ];
    }

    public function authenticate(){
        $loginField = $this->input('login');
        $password = $this->input('password');
        $remember = $this->boolean('remember');

        $field = filter_var($loginField,FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        //attempt authenticate
        if(!auth()->attempt([$field=>$loginField,'password'=>$password])){
            
            throw new \Illuminate\Validation\ValidationException(
                $this->validator,
                Inertia::render('Auth/Login')->with('flash.error', ['message' => trans('auth.failed'),'status' => 422])
            );
        }
    }
}
