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
    },

    "navbottom": {
      template: `
        <div class="navbottom d-flex">
          <ul class="d-flex">
            <li><a href="#"><i class="fas fa-chart-area"></i>Business</a></li>
            <li><a href="#"><i class="fas fa-palette"></i>Design</a></li>
            <li><a href="#"><i class="fas fa-cog"></i>Development</a></li>
            <li><a href="#"><i class="far fa-smile"></i>Lifestyle</a></li>
            <li><a href="#"><i class="fas fa-mail-bulk"></i>Office Productivity</a></li>
          </ul>
        </div>
      `
    }
  },

  data: {
    courses: [
      {
        name: "The Complete iOS 10 & Swift 3 Developer Course",
        type: "Development",
        initial_price: 199.99,
        new_price: 100,
        votein5: 4,
        poster: "assets/img/iOS 10.jpg"
      },
      {
        name: "Web Design for Beginners: Real World Coding in HTML & CSS",
        type: "Development",
        initial_price: 129.99,
        new_price: 65,
        votein5: 4,
        poster: "assets/img/html&css.jpg"
      },
      {
        name: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
        type: "Development",
        initial_price: 99.99,
        new_price: 50,
        votein5: 4,
        poster: "assets/img/github.jpg"
      },
      {
        name: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
        type: "Development",
        initial_price: 199.99,
        new_price: 100,
        votein5: 4,
        poster: "assets/img/ios11.jpg"
      },
      {
        name: "Android Java MasterClass - Become an App Developer",
        type: "Development",
        initial_price: 99.99,
        new_price: 50,
        votein5: 4,
        poster: "assets/img/android.jpg"
      },
      {
        name: "Xamarin Forms: Build Native Cross-platform Apps with C#",
        type: "Development",
        initial_price: 189.99,
        new_price: 95,
        votein5: 4,
        poster: "assets/img/xamarin.jpg"
      },
    ]
  },

  mounted () {
    console.log(this.courses);
  }

});
