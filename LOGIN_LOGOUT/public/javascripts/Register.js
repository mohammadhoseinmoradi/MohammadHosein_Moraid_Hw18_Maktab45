$(document).ready(function() {




    $("body").on("click", "#Submit_User", () => {
        let User_Name = $("#Username").val()
        let First_Name = $("#FirstName").val()
        let Last_Name = $("#LastName").val()
        let Password = $("#UserPassword").val()
        let Number = $("#UserNumber").val()
        let Gender = $("#UserGender").val()
        let Email = $("#UserEmail").val()
        let verify = $("#PasswordVerify").val()
        let Birthday = $('#birth').val();
        let User_Gender = "Other";
        if (Gender == 0) {
            User_Gender = "Other"
        } else if (Gender == 1) {
            User_Gender = "male"
        } else if (Gender == 2) {
            User_Gender = "female"
        } else if (Gender == 3) {
            User_Gender = "Other"
        }

        console.log(verify, User_Name, First_Name, Last_Name, Password, Birthday, Gender, Email, Number);
        if (verify == "" && User_Name == "" && First_Name == "" && Last_Name == "" && Password == "" && Birthday == "" && Gender == "" && Email == "" && Number) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }

        $.ajax({
            type: "POST",
            url: "/User/Submit",
            data: {
                User_Name: User_Name,
                User_First_Name: First_Name,
                User_Last_Name: Last_Name,
                User_Password: Password,
                User_Birthday: Birthday,
                User_Gender: User_Gender,
                User_Email: Email,
                User_Number: Number
            },
            success: function() {
                window.location.reload("/Login/LoginPage")
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

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});