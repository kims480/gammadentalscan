<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gamma Dental Radio Scan</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->

    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/lite-green.css') }}" />
    <script src="{{ asset('js/app.js') }}" defer></script>


</head>

<body>
    <div id="gamma-dental-scan">
        {{-- <app></app>
 --}}
        <gamma-dental></gamma-dental>

    </div>
</body>

</html>
