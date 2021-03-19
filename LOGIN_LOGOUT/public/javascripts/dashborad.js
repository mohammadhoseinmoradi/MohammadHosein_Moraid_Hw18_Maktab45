$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "/Dashboard/Info",
        success: function(data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })

            creat_Page(data)
        },
        error: function() {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }
    })

    function creat_Page(data) {
        $('body').html('')


        let Data = `

<div class="container">
<div id="content" class="content p-0">
    <div class="profile-header">
        <div class="profile-header-cover"></div>
        <div class="profile-header-content">
            <div class="profile-header-img mb-4">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="mb-4" alt="" />
            </div>

            <div class="profile-header-info" id=" ${data[0]._id}">
                <h4 class="m-t-sm">
                 ${data[0].User_Name}
                </h4>
                <p class="m-b-sm">UXUI + Frontend Developer</p>
                <div class="w3-container">
                    <a onclick="document.getElementById('id01').style.display='block'" href="#" class="btn btn-xs btn-primary mb-2">Edit Profile</a>
                    <div id="id01" class="w3-modal" style="z-index: 1100;padding-top:30px;padding-left: 400px;">
                        <div class="w3-modal-content" style="width:700px;background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
;">
                            <div class="w3-container">
                                <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                                <label style="margin-bottom: -10px;" for="New_User_Name">New User Name :</label>
                                <input id="New_User_Name" style="width: 90%;margin:10px 5px ;" id="" value="${data[0].User_Name}" class="">
                                <label style="margin-bottom: -10px;" for="New_First_Name">New First Name:</label>
                                <input id="New_First_Name" style="width: 90%;margin:10px 5px" id="" value="${data[0].User_First_Name}" class="">
                                <label style="margin-bottom: -10px;" for="New_Last_Name">New Last Name:</label>
                                <input id="New_Last_Name" style="width: 90%;margin:10px 5px" id="" value="${data[0].User_Last_Name}" class="">
                                <label style="margin-bottom: -10px;" for="New_Email">New Email:</label>
                                <input id="New_Email" style="width: 90%;margin:10px 5px" id="" value=" ${data[0].User_Email}" class="">
                                <label style="margin-bottom: -10px;" for="New_Number">New Number:</label>
                                <input id="New_Number" style="width: 90%;margin:10px 5px" id="" value="${data[0].User_Number}" class="">
                                <label style="margin-bottom: -10px;" for="New_Password">New Password:</label>
                                <input id="New_Password" style="width: 90%;margin:10px 5px" id="" placeholder="IF Need A New Password Inter A New Password" class="">

                                <label for="birth"> last Birthday :<p>${data[0].User_Birthday}</p></label>
                                <input type="date" name="birth" id="birth">
                                <br>
                                <label for="New_Gender"> last Gender :<p id="Last_Gender">${data[0].User_Gender}</p></label>
                                <select id="New_Gender" >
                                  
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                    <option value="2">Other</option>
                                  </select>
                                <hr>
                                <button id="Edit_User" onclick="Edit_User(${data[0]})" class="btn btn-xs btn-primary mb-2">Submit</button>
                                <button id="Delete_User"  class="btn btn-xs btn-primary mb-2">Delete</button>

                            </div>
                        </div>
                    </div>
                    <button id="LogOut"   class="btn btn-xs btn-primary mb-2" style="margin-left:850px">Log Out</button>
                </div>
            </div>
        </div>

        <ul class="profile-header-tab nav nav-tabs">
            <li class="nav-item"><a href="#profile-post" class="nav-link" data-toggle="tab">POSTS</a></li>
            <li class="nav-item"><a href="#profile-about" class="nav-link" data-toggle="tab">ABOUT</a></li>
            <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li>
            <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li>
            <li class="nav-item"><a href="#profile-friends" class="nav-link active show" data-toggle="tab">FRIENDS</a></li>
        </ul>
    </div>

    <div class="profile-container">
        <div class="row row-space-20">
            <div class="col-md-8">
                <div class="tab-content p-0">

                    <div class="tab-pane fade active show" id="profile-friends">
                        <div class="m-b-10"><b>Friend List (9)</b></div>

                        <ul class="friend-list clearfix">
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Sancho Aldo</h4>
                                        <p>392 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Jonty Augusto</h4>
                                        <p>128 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Androkles Allen</h4>
                                        <p>12 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Ithamar Silvio</h4>
                                        <p>1,923 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Denzel Annas</h4>
                                        <p>893 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Kamil Cree</h4>
                                        <p>983 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Fritjof Inderjit</h4>
                                        <p>3,321 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Sushil Trygve</h4>
                                        <p>921 friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                    <div class="friend-info">
                                        <h4>Frans Gebhard</h4>
                                        <p>944 friends</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-4 hidden-xs hidden-sm">
                <ul class="profile-info-list">
                    <li class="title">PERSONAL INFORMATION</li>
                    <li>
                        <div class="field">First Name</div>
                        <div class="value">
                        ${data[0].User_First_Name}
                        </div>
                    </li>
                    <li>
                        <div class="field">Last Name</div>
                        <div class="value">
                        ${data[0].User_Last_Name}
                        </div>
                    </li>
                    <li>
                        <div class="field">Birth of Date:</div>
                        <div class="value">
                        ${data[0].User_Birthday}
                        </div>
                    </li>
                    <li>
                        <div class="field">Gender :</div>
                        <div class="value">
                        ${data[0].User_Gender}
                        </div>
                    </li>
                    <li>
                        <div class="field">Number :</div>
                        <div class="value">
                        ${data[0].User_Number}
                        </div>
                    </li>
                    <li>
                        <div class="field">Email :</div>
                        <div class="value">
                        ${data[0].User_Email}

                        </div>
                    </li>
                    <li class="title">FRIEND LIST (9)</li>
                    <li class="img-list">
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                        <a href="#" class="m-b-5"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>









`
        $("body").append(Data)

    }





    $("body").on("click", "#Edit_User", function() {
        let id = $(".profile-header-info").attr("id");
        let New_User_Name = $("#New_User_Name").val()
        let New_First_Name = $("#New_First_Name").val()
        let New_Last_Name = $("#New_Last_Name").val()
        let New_Email = $("#New_Email").val()
        let New_Number = $("#New_Number").val()
        let New_Password = $("#New_Password").val()
        let birth = $("#birth").val()
        let New_Gender = $("#New_Gender").val()
        let Gender = "Gender"
        if (New_Gender == 0) {
            Gender = "male"
        } else if (New_Gender == 1) {
            Gender = "female"
        } else if (New_Gender == 2) {
            Gender = "other"
        }
        let Pass = "";
        if (New_Password) {
            Pass = New_Password
        }

        if (birth) {
            $.ajax({
                type: "PUT",
                url: `/Dashboard/Edit`,
                data: {
                    User_Name: New_User_Name,
                    First_Name: New_First_Name,
                    Last_Name: New_Last_Name,
                    Email: New_Email,
                    number: New_Number,
                    Password: Pass,
                    birth: birth,
                    Gender: Gender,
                },
                success: function() {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    window.location.reload('/Dashboard/dashboard')
                },
                error: function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                    console.log("err");
                }
            })
        } else {
            $.ajax({
                type: "PUT",
                url: `/Dashboard/Edit`,
                data: {
                    User_Name: New_User_Name,
                    First_Name: New_First_Name,
                    Last_Name: New_Last_Name,
                    Email: New_Email,
                    number: New_Number,
                    Password: Pass,
                    birth: "",
                    Gender: Gender,
                },
                success: function() {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    console.log("ok");
                    window.location.reload('/Dashboard/dashboard')
                },
                error: function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                    console.log("err");
                }
            })
        }

        console.log(id, Gender, New_Gender, birth, New_Password, New_Number, New_Email, New_Last_Name, New_First_Name, New_User_Name);
    })

    $("body").on("click", "#LogOut", function() {
        $.ajax({
            type: "GET",
            url: "/Dashboard/LogOut",
            success: function() {
                console.log("ok");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

                window.location.reload();
            },
            error: function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
                console.log("error");
            }
        })
    })
    $("body").on("click", "#Delete_User", function() {
        $.ajax({
            type: "GET",
            url: "/Dashboard/Delete",
            success: function() {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

                console.log("ok");
                window.location.reload();
            },
            error: function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
                console.log("error");
            }
        })
    })
})