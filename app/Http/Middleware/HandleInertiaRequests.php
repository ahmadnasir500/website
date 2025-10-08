<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // 'auth' => [
            //     'user' => $request->user() ? $request->user()->only('id', 'name', 'email') : null,
            // ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('errors'),
                // 'user' => fn () => auth(),
            ],
            'website' =>[
                'name' => Setting::where('key','website_name')->first()->value ?? config('app.name'),
                'url' => config('app.url'),
                'ads' => Setting::where('key','website_ads')->first()->value ?? null,
                'description' => Setting::where('key','website_description')->first()->value ?? 'A Laravel Inertia Blog',
                'author' => Setting::where('key','website_author')->first()->value,
            ]
        ]);
    }
}
