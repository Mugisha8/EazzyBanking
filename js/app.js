
const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const mainContainer = document.querySelector(".container");

signupBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("change");
});
signinBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("change");
});


//---------------------------------------


//Data storing into localstorage
function validateForm(){

  let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
  let formData ={
          "name":document.getElementById("uName").value,
          "contact":document.getElementById("contact").value,
          "email":document.getElementById("uEmail").value,
          "password":document.getElementById("uPassword").value
         
      }
      data.push(formData);
      if(localStorage){
          localStorage.setItem("details", JSON.stringify(data));
      } 
}

//check already registered users
function emailExist(value){
  let existemail = JSON.parse(localStorage.getItem("details"));
  
  let emailid = existemail.map((email,i,existemail) =>{
      return existemail[i].email;
  });

   let getexistemail = emailid.filter((email)=>{
      if(email == value.value){
          value.setCustomValidity('email exist. try something else');
          
      }else{
          value.setCustomValidity("");
      }
  });
}
//Handling bubbling
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function(e){
      e.preventDefault();
      form.reset();
      document.getElementById("thankYou").style.display="block";
      form.style.display="none";
  });

  function showHide(show, hide){
      let showEle = document.getElementById(show);
      let hideEle = document.getElementById(hide);
      showEle.style.display="block";
      hideEle.style.display="none";
  }

  //login here
  function loginUser(){
      
      let loginEmail = document.getElementById("uemailId").value;
      let loginPass =  document.getElementById("ePassword").value;
      let matchEmail = JSON.parse(localStorage.getItem("details"));
      let emailArray =[];
      let passArray=[];
       let result = matchEmail.map((name, i, matchEmail) =>{
      
         emailArray.push(matchEmail[i].name);
         passArray.push(matchEmail[i].password);
      });
     // console.log(emailArray);
      if(emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1){
        alert("You have sucsessfuly loged in");
          console.log("You have sucsessfuly loged in");
          window.location.assign("dashboard.html");
      }else{
        alert("You have no registered with us");
          console.log("Incorrect username or password");
          window.location.assign("index.html");
      }
    
  }
  const loginForm = document.getElementById("logIn");
  loginForm.addEventListener("submit", function(e){
      e.preventDefault();
  });