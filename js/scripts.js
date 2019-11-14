// function for displaing image
function readURL(input) {
           if (input.files && input.files[0]) {
               var reader = new FileReader();

               reader.onload = function (e) {
                   $('#blah')
                       .attr('src', e.target.result);
               };

               reader.readAsDataURL(input.files[0]);
           }
       }
//Bussiness Logic

    //function for capturing user data and generating the student id
$(document).ready(
    function(){
        $("#create").click(
            function(){
                var fName = $("#first-name").val();
                var lName= $("#second-name").val();
                var admNo= $("#adm-no").val();
                var idNo = $("#id-no").val();
                var course = $("#course").val();
                var gender = $("#gender input:checked").val();
                // alert(fName);
                // alert(lName)
                // alert(admNo)
                // alert(idNo)
                // alert(course)
                // alert(gender)

                  //output details
                $("#names").text(fName+"       "+lName);
                $("#adm-no").text(admNo);
                $("#id-no").text(idNo);
                $("#course").text(course);
                $("#gender").text(gender);




            }
        )
        preventdefault();
    }

)
