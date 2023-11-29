function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "static/img/menu_white_36dp.svg"
    }else{
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "static/img/close_white_36dp.svg"
        }
    }

$(document).ready(function() {
  // Handle opening the "Add Task" modal
  $('.add').on('click', function() {
    $('#addTaskModal').modal('show');
  });

  // Handle closing the "Add Task" modal
  $('#addTaskModal .btn-close').on('click', function() {
    $('#addTaskModal').modal('hide');
  });

  // Handle opening the "Add Glossario" modal
  $('#adicionar').on('click', function() {
    $('#addGlossarioModal').modal('show');
  });

  // Handle closing the "Add Glossario" modal
  $('#addGlossarioModal .btn-close').on('click', function() {
    $('#addGlossarioModal').modal('hide');
  });
});