<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gamma Dental Radio Scan</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <meta hid="description" name="description"
        content="Gamma Dental Scan Radiology, We are Spcialist for dental radio scans We care to deliver the most accurate dental scans in Egypt and Middle East">
    <meta hid="keywords" name="keywords"
        content="Gamma, Dental, Radiology, Scan, New Request, Impaction, 3d printing, 3d imaging, 2d printing, 2d imaging">
    <meta hid="author" name="author" content="Gamma Dental Radiology Scan">
    <link rel="stylesheet" href="{{ asset('fonts/iconsmind.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/lite-green.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/print.css') }}" />
    <script src="{{ asset('js/app.js') }}" defer></script>
    {{-- <link rel="preload" href="{{ asset('drive/uploadworker.js') }}" as="script">

    <link rel="preload" href="{{ asset('js/0.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/1.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/10.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/11.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/12.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/13.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/14.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/15.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/2.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/3.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/4.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/5.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/6.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/7.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/8.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/9.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/login.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/v-errors.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/dashboard.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-users.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/auth.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-services.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-patients.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-requests.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-storage.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-gdrive.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-gdrive~admin-storage.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-messages.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-notification.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-Layout.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/Not-Found.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-Layout~dashboard~doctor-Layout.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-doctors.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/admin-offers.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/crud-test.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/doctor-Layout.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/vendors~admin-Layout~dashboard~doctor-Layout.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/vendors~admin-doctors.js') }}" as="script">
    <link rel="preload" href="{{ asset('js/vendors~admin-patients~admin-users.js') }}" as="script"> --}}


</head>

<body>

    <div id="gamma-dental-scan">
        {{-- <app></app> --}}
        <gamma-dental></gamma-dental>

    </div>

</body>

</html>
