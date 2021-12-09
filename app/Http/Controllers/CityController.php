<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\City;
use Illuminate\Support\Facades\DB;

class CityController extends Controller
{
    public function addcity(Request $req){
        
        $dup = DB::table('cities')->where('City','=', $req->city)->first();

        if(!$dup){
            $data=new City();
            $data->City= $req->city;
            $data->Country = $req->country;
            $data->save();

            $dup='';
            $result['status'] =1;
            $result['message'] ='success';
            echo json_encode($result);

        }

        else{
            $result['status'] =0;
            $result['message'] ='City ALready Exist ';
            echo json_encode($result);
        }

        }

    public function getcity(){
        $cities = DB::table('cities')->select('City','Country')->orderBy('id','asc')->get();
        return $cities;
    }   
}