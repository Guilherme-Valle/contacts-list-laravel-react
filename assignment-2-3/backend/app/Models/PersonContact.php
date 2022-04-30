<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonContact extends Model
{
    const FIELDS = [
        'id',
        'value',
        'person_id',
        'contact_type_id'
    ];

    protected $table = 'person_contact';
    protected $fillable = self::FIELDS;

    protected $hidden = [
        'updated_at',
        'created_at'
    ];
}
