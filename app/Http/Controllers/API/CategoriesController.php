<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Categories;
use App\Http\Resources\Categories as CategoriesResource;

class CategoriesController extends BaseController
{
    public function index()
    {
        $categories = Categories::all();
        return $this->sendResponse(CategoriesResource::collection($categories), 'Posts fetched.');
    }

    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $category = Categories::create($input);
        return $this->sendResponse(new CategoriesResource($category), 'Post created.');
    }

   
    public function show($id)
    {
        $category = Categories::find($id);
        if (is_null($category)) {
            return $this->sendError('Post does not exist.');
        }
        return $this->sendResponse(new CategoriesResource($category), 'Post fetched.');
    }
    

    public function update(Request $request, Categories $category)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }

        $category->title = $input['title'];
        $category->description = $input['description'];
        $category->save();
        
        return $this->sendResponse(new CategoriesResource($category), 'Post updated.');
    }
   
    public function destroy(Categories $category)
    {
        $category->delete();
        return $this->sendResponse([], 'Post deleted.');
    }
}
