// A $( document ).ready() block.
// Curious about what this is? See: https://learn.jquery.com/using-jquery-core/document-ready/
$( document ).ready(function() {

    // Create an event handler for whenever #like_libraries is changed.
    // What should this selector look like?
    // Need help? Check out: https://api.jquery.com/change/
    $("").on("change", function() {

        // Check to see if this is checked.
        // If it is, slide the #library_list down.
        // If it isn't, slide the #library_list up.

        // Hint: You'll need to use $(this) to select the #like_libraries checkbox.
        // Need help?
        // http://api.jquery.com/prop/
        // http://api.jquery.com/slidedown/ / http://api.jquery.com/slideup/

        // You could also look into http://api.jquery.com/slidetoggle/ as another option.

    });

    // Create an event handler for whenever ANY checkbox is changed.
    // What should this selector look like?
    // Need help?
    // Check out: https://api.jquery.com/change/
    // Also: http://www.w3schools.com/jquery/jquery_ref_selectors.asp
    $("").on("change", function() {

        // I've built this for you! :)
        // This will return the <label></label> element associated with this checkbox.
        var label = getLabelFromCheckbox($(this));

        // Check to see if this is checked.
        // If it is, add the "checked_label" class.
        // If it isn't, remove the "checked_label" class.

        // Need help?
        // http://api.jquery.com/prop/
        // https://api.jquery.com/addclass/

    });

    // Create an event handler for whenever the #gdi_course select box is changed.
    // What should this selector look like?
    $("").on("change", function() {

        // Get the value of the option that's currently selected
        // Need help?
        // http://api.jquery.com/val/

        // Hide all ".hidden_gdi_course_content" divs so only the new one will be visible.
        // Need help?
        // http://api.jquery.com/hide/

        // Finally, have the selected one fade in.
        // Hint: the value of the selected option you got above, is the ID of the div that should fade in. This will help
        // you build the selector for the element that needs to fade in. Remember, all selectors are just strings!

        // Need help?
        // http://api.jquery.com/fadein/

    });

    // Create an event handler for whenever the form is submitted.
    $("form").on("submit", function(e) {

        // A handy little function that let's us stop the browser from doing what it normally would.
        // If you're curious about this, check out: http://api.jquery.com/event.preventdefault/
        e.preventDefault();

        // We're going to build a string that will be the body of our email.
        // This is the initialization for the variable.
        var emailBody = "";

        // Set this variable equal to the value of the #name element.
        // Need help? See: http://api.jquery.com/val/
        // You'll change this line into: var name = [your fancy code here];
        var name;

        emailBody += name + " ";

        // check to see if the #like_libraries checkbox is checked.
        // Need help? See: http://api.jquery.com/prop/
        // You'll change this line into: var likesLibraries = [your fancy code here];
        var likesLibraries;

        if (likesLibraries) {

            emailBody += "likes ";

            var chosenJavaScriptLibraries = [];

            // Find all checkboxes in the #library_list div.
            // Need help? https://api.jquery.com/find/

            // Step through each of these checkboxes.
            // Need help? https://api.jquery.com/each/

            // If that checkbox is checked:
            //  add the text of the label to the chosenJavaScriptLibraries array using the push() method.
            //  Hint: You'll need to use $(this) and the getLabelFromCheckbox() function I wrote for you.

            // Need help?
            //  http://api.jquery.com/prop/
            //  http://api.jquery.com/text/
            //  http://www.w3schools.com/jsref/jsref_push.asp

            // If that checkbox isn't checked:
            //  do nothing.

            // Here, we're just checking to see if the user selected any specific JavaScript libraries.
            // We know that from the chosenJavaScriptLibraries array.
            if (chosenJavaScriptLibraries.length > 0) {

                // They did add libraries!
                // We'll just make a nice comma separated list and add that to our emailBody string.
                // Want to know more about the join() method? See: http://www.w3schools.com/jsref/jsref_join.asp
                emailBody += chosenJavaScriptLibraries.join(", ") + ".";

            }
            else {

                // They didn't add an specific libraries.
                // We'll just say they like them with no specifics.
                emailBody += "JavaScript libraries.";

            }

        }
        else {
            // The user did not select the #like_libraries checkbox.
            emailBody += "does not like JavaScript libraries.";
        }


        // Ready for a tricky one?
        // Find out which #gdi_course option is selected.
        // Instead of getting the _value_, get the _text_ of the selected option.
        // Then, set it to selectedCourseText.
        // Need Help? Try: http://stackoverflow.com/questions/1643227/get-selected-text-from-drop-down-list-select-box-using-jquery
        // You'll change this line into: var selectedCourseText = [your fancy code here];
        var selectedCourseText;

        emailBody += " The next GDI course they are taking is " + selectedCourseText + ".";


        // Last, but not least, we're going to actually do something with the data.
        // "Hitting" a server-side "endpoint" or "web service" is pretty common for
        // JavaScript developers.

        // Let's say we want to send the form submission to a given email.
        // We're going to use a PHP "endpoint" so that a server can send the email.

        // Most of this is done for you, except for one thing...
        // Change the value in quotes to be your email address:
        var emailAddressToSendResponseTo = "amy@gdiminneapolis.com";

        var postData = {
          emailBody: emailBody,
          sendTo: emailAddressToSendResponseTo
        };

        $.post("http://amlyhamm.com/gdi/emailEndpoint.php", postData, function() {
          console.log("PHP request is complete! Email was sent! It may take a few minutes for you to actually see it though :)");
        });

        // Curious about this whole 'post' business? Look up "jquery post or jquery ajax"

    });

    // I've built this for you! :)
    // This will return the <label></label> element associated with the given checkbox.
    function getLabelFromCheckbox(checkboxElement) {
        var id = checkboxElement.attr("id");
        return $("label[for='" + id + "']");
    }

});
