// load csv here


// This function is called once the HTML page is fully loaded by the browser
document.addEventListener('DOMContentLoaded', function () {
     
    Promise.all([d3.csv('data/temp.csv')])
         .then(function (values) {

            // map out data here

         });

         
 });