// Generated by CoffeeScript 1.7.1
(function() {
  var insertNewContent, removeExistingContent;

  console.log("Ok great, our custom code is working!");

  removeExistingContent = function() {
    $('#slider-container').remove();
    return $('#slider-footer').remove();
  };

  insertNewContent = function(event) {
    var sms_container;
    console.log("in insertNewContent");
    sms_container = $('<div id="sms-iframe-container" style="margin-left: auto; margin-right: auto; text-align: center; width: 960px !important; background-color: #333;" />');
    sms_container.insertAfter('#header');
    return $('#sms-iframe-container').html('<iframe id="twilioframe" name="twilioframe" style="width: 900px; height: 400px; overflow-y: auto;" src="http://khs-twilio-demo-120028.euw1.nitrousbox.com/" />');
  };

  $('#logo').on('click', function() {
    console.log("Your click on the KHS logo has been detected.");
    event.preventDefault();
    removeExistingContent();
    insertNewContent();
    return setInterval(function() {
      var iframe;
      iframe = document.getElementById('twilioframe');
      return iframe.src = iframe.src;
    }, 10000);
  });

}).call(this);