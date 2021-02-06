//Function to insert defined CSS
function injectStyles(rule) {
  var div = $("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");
}

// POST form data to zapier on submit
$('#myForm').submit(function(e){
    console.log("This is being triggered.");
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/3981722/0icrzs/',
        //Test endpoint url:'https://hooks.zapier.com/hooks/catch/3981722/px346m/',
        type:'post',
        data:$('#myForm').serialize(),
        success:function(){
          injectStyles('.form-initial { display: none; } .form-submitted { display: block; }');
        }
    });
});

//todo: add method to remove the code on resubmit. I don't like that the tabs for writing section get reset.
