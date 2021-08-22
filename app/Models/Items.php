<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id',
        'name',
        'description',
        'category_id',
        'price',
        'image',
    ];

    public function orders()
    {
        return $this->hasMany(Orders::class);
    }

    public function category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }
}
