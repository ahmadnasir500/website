<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
  @inertiaHead
  {!! SEOMeta::generate() !!}
  {!! OpenGraph::generate() !!}
  {!! Twitter::generate() !!}
  {!! JsonLd::generate() !!}
  <link rel="icon" href="{{ asset('favicon.ico') }}" />
  <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}" />
  
</head>

<body>
<noscript>
  <style>
    html { background: #f8fafc; color: #222; font-family: 'Segoe UI', Arial, sans-serif; }
    .noscript-warning {
      max-width: 400px;
      margin: 40px auto;
      padding: 24px;
      background: #fff3cd;
      color: #856404;
      border: 1px solid #ffeeba;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .noscript-warning h2 {
      margin-bottom: 12px;
      font-size: 1.3em;
      font-weight: bold;
    }
    .noscript-warning p {
      margin: 0;
      font-size: 1em;
    }
  </style>
  <div class="noscript-warning">
    <h2>JavaScript Dinonaktifkan</h2>
    <p>Beberapa fitur situs ini mungkin tidak berfungsi dengan baik.<br>
    Silakan aktifkan JavaScript di browser Anda untuk pengalaman terbaik.</p>
  </div>
</noscript>
  @inertia
</body>

</html>