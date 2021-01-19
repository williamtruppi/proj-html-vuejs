let app = new Vue ({

  el: ".main_wrapper",

  components: {

    /* COMPONENT NAVTOP */
    "navtop":  {
      template: `
      <div class="navtop container d-flex">
        <div class="navtop_left">
          <span>English  <i class="fas fa-chevron-down"></i></span>
        </div>

        <div class="navtop_right d-flex">
          <ul class="page_list d-flex">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Course Formats</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Demos</a></li>
          </ul>
  
          <ul class="social_list d-flex">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>

      `,
    }
  }

});
