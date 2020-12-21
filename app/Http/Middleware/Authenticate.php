<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('App_Home');
        }else{
            return route('web_Home');

        }
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string[]  ...$guards
     * @return mixed
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function handle($request, Closure $next, ...$guards)
    {
        if($jwt=$request->cookie('cookie-token')){
           $request->headers->set('Authorization', 'Bearer '.$jwt);
        }
        /* if($jwt=$request->){
            $request->headers->set('Authorization', 'Bearer '.$jwt);
         } */
        $this->authenticate($request, $guards);

        return $next($request);
    }
}
