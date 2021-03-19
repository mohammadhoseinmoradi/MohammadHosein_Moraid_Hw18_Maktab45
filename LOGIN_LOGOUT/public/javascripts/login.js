$(document).ready(function() {




    $("body").on("click", "#Submit_User", () => {
        let User_Name = $("#Username").val()

        let Password = $("#UserPassword").val()
        if (User_Name == "" && Password == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }

        console.log(User_Name, Password);


        $.ajax({
            type: "POST",
            url: "/Login/UserLogin",
            data: {
                User_Name: User_Name,
                User_Password: Password
            },
            success: function(data) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

                console.log(data);
                window.location.replace(`../Dashboard/dashboard`);
            },
            error: function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
                console.log("ERROR");

            }
        })
    })




});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');