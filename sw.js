var sw = $('body').attr("redmine-preview");

console.log('Change position of preview');

if(sw == 'active') {
  $('body').attr('redmine-preview', 'disable');
  $('#wiki_form').css('float', '');
  $('#preview').css('float', '');
  $('#wiki_form').css('width', '');
  $('#preview').css('width', '');
  $('#sidebar').css('display', 'block');
  $('#content').css('width', '75%');
} else {
  $('body').attr('redmine-preview', 'active');
  $('#wiki_form').css('float', 'left');
  $('#preview').css('float', 'left');
  $('#wiki_form').css('width', '50%');
  $('#preview').css('width', '50%');
  $('#sidebar').css('display', 'none');
  $('#content').css('width', '100%');
}
