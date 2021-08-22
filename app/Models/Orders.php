<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'quantity',
        'item_id',
        'user_id',
    ];

    public function item()
    {
        return $this->belongsTo(Items::class, 'item_id');
    } 
}
