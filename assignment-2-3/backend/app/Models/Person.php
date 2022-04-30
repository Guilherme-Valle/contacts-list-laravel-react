<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    const FIELDS = [
        'id',
        'name'
    ];

    protected $table = 'person';
    protected $fillable = self::FIELDS;

    protected $hidden = [
        'updated_at',
        'created_at'
    ];
}
