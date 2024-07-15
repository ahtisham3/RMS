$(document).ready(function() {
    $('.page-container').on('click', '.editbtn', function() {
        var buttonDataId = $(this).val();
        console.log(buttonDataId);
        var url = `Car/CarController/updateCarajax/${buttonDataId}`;

        // Load the new content into the page-content-wrapper
        $('.page-container').load(url, function(response, status, xhr) {
            if (status == "error") {
                console.error("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });
    });

   
   



    $('#updateCarForm').submit(function(event) {
        console.log('heloo word');
        // event.preventDefault(); // Prevent the form from submitting the traditional way
        // var formData = $(this).serializeArray(); // Get all form values
        // console.log('Form submitted!');
        // console.log(formData); // Log form data to the console
    });
});