let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin(){
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("passwrd").value;

    let count=0;

    if(mobile.length==0)
    alert("Enter a mobile number.");
    else if(mobile.length!=10)
    alert("Enter a valid mobile number.");
    else
    {
        for(let i=0; i<getUsersdata.length;i++)
        {
            if(mobile == getUsersdata[i].mobile)
            {
                if(password==getUsersdata[i].password)
                {
                    alert("Sign In successfully");
                    window.location.href = "index.html";
                }
                else
                {
                    alert("Invalid Password.");
                    window.location.href="./signin.html";
                }
            }
            else{
                count++;
            }
        }
        
    }
    if(count==getUsersdata.length)
        {
            alert("User is Not Registered, Sign Up to Continue...");
            window.location.href= "signup.html";
        }
}

function existing()
{
    window.location.href="signup.html";
}