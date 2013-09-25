$(function() {
  $('#mysalary').click(function(e) {
    $(this).animate({ top: (e.clientY + 500) + 'px' }).animate({ top: (e.clientY + 10) + 'px' });
  });
});

