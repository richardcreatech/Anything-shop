const getStarted = document.getElementById('getStarted');
const sec1 = document.getElementById('sec-1');

getStarted.onclick = () => {
  sec1.innerHTML = `
  <div class="loader">
    </div>
    `;
    
    setTimeout(() => {
        sec1.innerHTML = ``;

      alert('Click the image to select an avatar')
        sec1.innerHTML += `
        <div id="generalCard">
        
        
        <div id="innerGeneralCard">
        
        <!--
        <div>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active" data-bs-interval="10000">
      <img src="img/Shopaholics.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      
      </div>
      </div>
      
      <div class="carousel-item" data-bs-interval="2000">
      <img src="img/Shopaholics2.png" class="d-block w-100" alt="...">
      
      <div class="carousel-caption d-none d-md-block">
     
      </div>
      </div>
      
      <div class="carousel-item">
      
      <img src="img/Shopaholics3.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
-->
        <div id="formDiv">
         <h1 id="signUpH1">Sign Up</h1>
        <form action="Shop/index.html">
       
        <label for="Name">
        <input type="text" id="name" placeholder="Name" />
        </label>
       
        <label for="Email">
        <input type="email" id="email" placeholder="Email Address" />
        </label>
       
       
      <input id="submit" value="submit" type="submit">
      </input>
        </form>
        </div>

        </div>
        </div>
        `
        let named = document.getElementById('name');
        let email = document.getElementById('email');
        let submit = document.getElementById('submit');
        
        
      submit.onclick = (e) => {
        if (named.value && email.value) {
          localStorage.setItem('userInfo', JSON.stringify({
            name : named.value,
            email : email.value,
          }))
          console.log(named.value);
          console.log(email.value);
          named.value= ''
          email.value= ''
          
        }
        
        else {
          e.preventDefault();
        }

        }
        
        
    },2000)
}


