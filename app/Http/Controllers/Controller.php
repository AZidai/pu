<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{

    public function response($code, $data, $message = '')
    {
        return response()->json([
            'status' => $code,
            'message' => $message,
            'data' => $data,
        ]);
    }

}
