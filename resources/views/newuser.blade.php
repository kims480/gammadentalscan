@extends('layouts.app')

@section('content')
    <div class="card">
        <div class="card-title">
            Congrats
        </div>
        <div class="card-body">
            New user Registered
            <div>
                Phone:{{ $telephone }}
                Email:{{ $email }}
                Name:{{ $name }}
            </div>
        </div>
    </div>
@endsection
