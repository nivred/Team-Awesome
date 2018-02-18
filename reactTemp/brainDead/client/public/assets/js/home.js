$(document).ready(function() {

    $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  });
  
 
  $('#login').on("click", function(event){
    event.preventDefault();
    $.post({
      url: "/login",
      data: {
        email: $("#email").val(),
        password: $("#password").val()
      }
    }).done(function(response){
      console.log(response);
      if(response.status === "success"){
        window.location.href = response.url;
      } else{
        $(".error-msg").html("Incorrect Email or Password");
      }
    });
  });

        
  
});