(function($) {
  $(document).ready(function()
  {
    // jQuery uniform controls (http://pixelmatrixdesign.com/uniform)
    $(".uniform select, .uniform input:checkbox, .uniform input:radio, .uniform input:file").uniform();

    // jQuery datepicker for formtastic (http://gist.github.com/271377)
    $('input.ui-datepicker-input').datepicker({ dateFormat: 'dd-mm-yy' });

    // Tooltips (http://onehackoranother.com/projects/jquery/tipsy)
    $('img').each( function() {
      if ($(this).get(0).title != '') {
        $(this).tipsy();
      }
    });

    // Scroll effect for anchors (http://flesler.blogspot.com/2007/10/jqueryscrollto.html)
    $('a').click(function() {
       if ($(this).attr('class') == 'anchor') {
         $.scrollTo(this.hash, 500);
         $(this.hash).find('span.message').text(this.href);
         return false;
       }
    });

    // Initialize jQuery UI widgets for theme preview
    // Accordion
    $("#accordion").accordion({ header: "h4" });
    // Autocomplete
    $("#autocomplete").autocomplete({
      source: ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby", "python", "c", "scala", "groovy", "haskell", "perl"]
    });
    // Button
    $("#button").button();
    $("#radioset").buttonset();
    // Tabs
    $('#tabs').tabs();
    // Dialog
    $('#dialog').dialog({
      autoOpen: false,
      width: 600,
      buttons: {
        "Ok": function() {
          $(this).dialog("close");
        },
        "Cancel": function() {
          $(this).dialog("close");
        }
      }
    });
    // Dialog Link
    $('#dialog_link').button({
      icons: {
        primary: "ui-icon-newwin"
      }
    });
    $('#dialog_link').click(function(){
      $('#dialog').dialog('open');
      return false;
    });
    // Datepicker
    $('#datepicker').datepicker({
      inline: true
    });
    // Slider
    $('#slider').slider({
      range: true,
      values: [17, 67]
    });
    // Progressbar
    $("#progressbar").progressbar({
      value: 20
    });
    //hover states on the static widgets
    $('#dialog_link, ul#icons li').hover(
      function() { $(this).addClass('ui-state-hover'); },
      function() { $(this).removeClass('ui-state-hover'); }
    );

  });
})(jQuery)
