<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Register extends Model
{
    use HasApiTokens, HasFactory;
    Protected $fillable=['Name','Email','Password','Mobile'];
}
