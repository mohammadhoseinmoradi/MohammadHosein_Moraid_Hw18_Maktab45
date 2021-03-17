$(document).ready(function() {




    $("body").on("click", "#Submit_User", () => {
        let User_Name = $("#Username").val()

        let Password = $("#UserPassword").val()


        console.log(User_Name, Password);


        $.ajax({
            type: "POST",
            url: "/Login/UserLogin",
            data: {
                User_Name: User_Name,
                User_Password: Password
            },
            success: function(data) {
                console.log(data);
                window.location.replace(`../Dashboard/dashboard/${data}`);
            },
            error: function() {
                console.log("ERROR");
            }
        })
    })




});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });