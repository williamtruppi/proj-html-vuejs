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
    },

    "navmiddle": {
      template: `
        <div class="navmiddle container d-flex">
          
          <div class="navmiddle_left">
            <img src="assets/img/MasterStudy.svg" alt="">
          </div>

          <div class="navmiddle_center d-flex">
            <span>CATEGORY <i class="fas fa-bars"></i></span>
            <input type="text" placeholder="Search Courses">
            <button><i class="fas fa-search"></i></button>
          </div>

          <div class="navmiddle_right d-flex">
          
          <a href="#"><i class="fas fa-bullhorn"></i>Become an Instructor</a>
          <a href="#"><i class="fas fa-briefcase"></i>For Enterprise</a>

            <ul class="d-flex">
              <li><a href="#"><i class="far fa-user"></i> Log in</a></li>
              <li><a href="#" id="sign_up">SIGN UP</a></li>
              <li><a href="#"><i class="far fa-bookmark"></i></a></li>
            </ul>
          
          </div>
        </div>
      `
    }
  }

});
