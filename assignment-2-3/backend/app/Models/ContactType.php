<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactType extends Model
{
    use HasFactory;
    
    const FIELDS = [
        'id',
        'name'
    ];

    protected $table = 'contact_type';
    protected $fillable = self::FIELDS;

    protected $hidden = [
        'updated_at',
        'created_at'
    ];
}
