<div class="container nav__bar">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-2">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-lg-auto text-dark text-decoration-none">
        <img src="{{ URL::asset('assets/images/school/logo.png') }}" height="70" alt="School Logo" >
      </a>

      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item d-flex align-items-center"><a href="#" class="nav-link text-default mx-2">OFW Guide</a></li>
        <li class="nav-item d-flex align-items-center"><a href="#" class="nav-link text-default mx-2">COVID PH Status</a></li>
        <li class="nav-item d-flex align-items-center"><a href="#" class="nav-link text-default mx-2">Log in</a></li>
        <li class="nav-item d-flex align-items-center">
          <button 
            type="button" 
            data-bs-toggle="modal"
            data-bs-target="#registerModal" 
            class="btn border-3 fw-bold"
          >
            Register
          </button>
        </li>
      </ul>
    </header>
</div>