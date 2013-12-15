//Planitari Temporary Page
//Home Page jQuery Code

//Set It Off
$(document).ready(function() {
   //Spectrum
   function spectrum(){
      var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 156)) + ',' + (Math.floor(Math.random() * 156)) + ')';
      var hue2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 156)) + ',' + (Math.floor(Math.random() * 156)) + ')';
      $('').animate( { backgroundColor: hue }, 5000);
 

      spectrum(); 
   }


   //Form Submit Button Button
   $('#submit-button').click(function() {
      $("#submit-button").button('loading');
      $.ajax({
        type: "POST",
        url: "email.php",
        data: {
         email : $("#email").val(),
         timestamp : (new Date).getTime()
        },
        success: function(data) {
            if(data=="Success") {
               alert("Email added");
            }
            else {
               alert(data);
            }
        },
        error: function(e) {
            alert("Error");
            alert(e);
        }
      });
   });

   //Start the Spectrum
   spectrum();

   //OK, We're Done Here
});