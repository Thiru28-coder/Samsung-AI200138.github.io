window.alert("Welcome to Samsung Login Page");

function validate()
      {
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;
        if(username=="Thiru28" && password=="12345")
        {
            alert("Login Successful");
            window.location = "index.html"
            return false;
        }

        else{
            alert("Login Failed");
        }

      }
