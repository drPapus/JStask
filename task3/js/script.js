$(document).ready(function(){
    showStartModal();
});

function showStartModal(){

  if(localStorage.getItem('modalYes')!=1){

    setTimeout(function(){
        $('#exampleModal').modal('show');
        $('#modal-yes').on('click', function(){
            localStorage.setItem('modalYes', 1);
            $('#exampleModal').modal('hide');
        });
    }, 5000);
 }
}