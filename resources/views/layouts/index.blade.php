<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Life Skills Theraphy Center</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        @stack('styles')

        <link href="{{ URL::asset('assets/css/styles.css?v1=1.0.1') }}" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="page-content"> 
        <main>
            @include('partials.navbar')

            @yield('content')

            @include('partials.footer')
        </main>
    </body>
</html>
