@extends('layouts.index')

@push('styles')
<style type="text/css"> 
</style>
@endpush

@section('content')

   <div class="container py-3">
      <h5 class="fw-bold">{{ $pageTitle }}</h5>
   </div>

   @include('partials.banner')
   
   <div class="container contents">
      <div class="row">
         <div class="col ">
            <div class="list__group pt-4">
               <div class="text-center mb-4 list__title"> 
                  <h4 class="px-4 py-2">We provide:</h4>
               </div>
               <ul class="list_columns">
                  @if( count($services) )
                        @foreach($services as $service)
                           <li class="fw-bold">{{ $service }}</li>
                        @endforeach
                  @endif
               </ul>
            </div>
            
            <div class="list__group pt-4">
               <div class="text-center mb-4 list__title"> 
                  <h4 class="px-4 py-2">Our Staff have certifications/ Special Training</h4>
               </div>
               <ul class="list_columns">
                  @if( count($trainings) )
                        @foreach($trainings as $training)
                           <li class="fw-bold">{{ $training }}</li>
                        @endforeach
                  @endif
               </ul>
            </div>
            
            <div class="list__group pt-4">
               <div class="text-center mb-4 list__title"> 
                  <h4 class="px-4 py-2">We also offer consultancy & Professional Education Services</h4>
               </div>
               <ul class="">
                  @if( count($consultancy_service) )
                        @foreach($consultancy_service as $service)
                           <li class="fw-bold">{{ $service }}</li>
                        @endforeach
                  @endif
               </ul>
            </div>
         </div>
      </div>

   </div>
   
   <div class="container before-footer">
      <div class="row">
         <div class="col-12 col-md-6 d-flex align-items-center">
            <h2 class="col fst-italic fw-bold">
               Life Skills Therapy Center
               is a foundation center of
               Thera-Free: Libreng Therapy
               para sa  Pilipino
            </h2>
         </div>
         <div class="col-12 col-md-6">
            <img 
               src="{{ URL::asset('assets/images/school/image-2.jpg') }}"   
               class="img-fluid" 
               alt="School Image banner"
            >
         </div>
      </div>
   </div>
@endsection
