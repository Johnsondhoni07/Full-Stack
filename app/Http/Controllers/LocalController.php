<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Register;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class LocalController extends Controller
{
    public function register(Request $req){
        // $req=json_decode($req);
        $rules=[
            'email'=>'required|min:3',
            'username'=>'required|min:3|max:20',
            'password'=>'required|min:8|max:16',
            'confirm_password'=>'required|same:password|min:8|max:16',
            'mobile'=>'required|min:10|max:12'
        ];  
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return $validator->errors();
        }
        else{
            $mail=Register::where('Email',$req->email)->first();

            if($mail){
                return 'Email is already Registered';
            }
            else{
                $post=new Register;
                $post->Name=$req->username;
                $post->Email=$req->email;
                $post->Mobile=$req->mobile;
                $post->Password=Hash::make($req->password);
                $post->save();
            }
            if($post){
                return 'Registration Success';
            }else{
                return 'Registration Failed iNternal server Error';
            }
        }
    }
    
    public function login(Request $req){
        $user=Register::where('Email',$req->Email)->first();
        if(!$user){
            return 'Email is not Registered';
        }else{
            if(Hash::check($req->Password,$user->Password)){
                $token=$user->createToken('login')->plainTextToken;
                return $token;
            }
            else{
                return 'Incorrect Password';
            }
        }
    } 
    
    public function edit(Request $req ,$id){ 
        $user=Register::where('id',$id)->first();
        $user->Email=$req->Email;
        $user->save();
        return "success";
    }
    
    public function adminlogin(Request $req){

       $user=Admin::where('email',$req->email)->first();
       if($user){
            if(Hash::check($req->password,$user->password)){
                $userdetail=Register::all();
                return $userdetail;
            }
            else{
                return 'Incorrect password';
            }
       }
       else{
            return 'ACCESS RESTRICTED-CONTACT ADMIN';
       }
       
    }
    
    public function sort(Request $req,$by){
        
        $users = DB::table('registers')
        ->select('Name')
        ->orderby('created_at',$by)
        ->get();
        return $users;
    }

    public function delete(Request $req){
        $user=Register::where('Email',$req->Email)->first();
        $rules=[
            'Email'=>'required',
            'Password'=>'required',
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return $validator->errors();
        }
         else{
            if(!$user){
                return 'Email is not Registered';
            }
            else{
                if(Hash::check($req->Password,$user->Password)){
                    Register::find($user->id)->delete();
                    return 'User Deleted Successfully';
                }
                else{
                    return 'Incorrect Password';
                }
            }   
        }
    }    
}   
