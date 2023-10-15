let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup(){
    let username = document.getElementById("naam").value;
    let mobileno = document.getElementById("phone").value;
    let password = document.getElementById("passwrd").value;

    
    if(mobileno.length!=10)
    {
        alert("Enter a valid mobile number.");
    }
    else if(username=="")
    {
        alert("Enter the username.");
    }
    else if(username.length<5)
    alert("Username should have atleast 5 characters.");
    else if(password.length==0)
    alert("Enter a password");
    else if(password.length<8)
    alert("Password should hae atleast 8 characters.");
    else
    {
        let userData = {
            username: username,
            mobile: mobileno,
            password: password
        }
        let users = [...getUsersdata, userData];
        localStorage.setItem("usersdata", JSON.stringify(users));
        alert("Account created successfully.");
        window.location.href="signin.html";
    }

    
}

function existing()
{
    window.location.href="signin.html";
}