//
//This is required to display alerts via jquery
//paste the html code to html file where you want to use jquery alert
//and reference the script
//
//<a class="btn btn-info btn-lg" id="alert-target">Click me!</a>
// $("#alert-target").click(function () {
//     toastr["info"]("I was launched via jQuery!");
// });

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "md-toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 6000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}



// $('.toast').toast('show');
