<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Items;
use App\Http\Resources\Items as ItemsResource;

class ItemsController extends BaseController
{
    public function index()
    {
        $shop = Items::all();
        $items =[
            'shop' => $shop,
            'featured' => $shop->slice(0, 6),
            'recommended' => $shop->slice(7, 13),
        ];
        return $this->sendResponse(ItemsResource::collection($items), 'Items fetched.');
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
        $item = Items::create($input);
        return $this->sendResponse(new ItemsResource($item), 'Item created.');
    }

   
    public function show($id)
    {
        $item = Items::find($id);
        if (is_null($item)) {
            return $this->sendError('Item does not exist.');
        }
        return $this->sendResponse(new ItemsResource($item), 'Item fetched.');
    }
    

    public function update(Request $request, Items $item)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => 'required',
            'description' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }

        $item->title = $input['title'];
        $item->description = $input['description'];
        $item->save();
        
        return $this->sendResponse(new ItemsResource($item), 'Item updated.');
    }
   
    public function destroy(Items $item)
    {
        $item->delete();
        return $this->sendResponse([], 'Item deleted.');
    }
}
