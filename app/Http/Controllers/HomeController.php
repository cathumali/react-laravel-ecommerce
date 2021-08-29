<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $data['pageTitle'] = 'Support / Help Centre';  
        $data['services'] = [
            'Occupational Therapy',
            'Speech-Language Pathology (Speech Therapy)',
            'Special Education',
            'Homeschooling',
            'Pre-vocational & vocational classes for adolescents with special needs'
        ];   
        $data['trainings'] = [
            'Sensory Integration & Practices (SIPT)',
            'Search and Teach (for pre-schoolers and risk for or have learning difficulties)',
            'Hanen; PROMPT',
            'Braille',
        ];
        $data['consultancy_service'] = [
            'e.g. Seminars on behavior management; handwriting; sensory integration; program development and assesment', 
        ];   
        return view('home', $data);
    }
}
