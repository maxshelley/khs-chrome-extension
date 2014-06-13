console.log "Ok great, our custom code is working!"

removeExistingContent = ->
  $('#slider-container').remove()
  $('#slider-footer').remove()

insertNewContent = (event) ->
  console.log "in insertNewContent"
  sms_container = $('<div id="sms-iframe-container" style="margin-left: auto; margin-right: auto; text-align: center; width: 960px !important; background-color: #333;" />')
  sms_container.insertAfter '#header'
  $('#sms-iframe-container').html('<iframe id="twilioframe" name="twilioframe" style="width: 900px; height: 400px; overflow-y: auto;" src="http://khs-twilio-demo-120028.euw1.nitrousbox.com/" />')

$('#logo').on 'click', ->
  console.log "Your click on the KHS logo has been detected."
  # Normally, a link would take you to another page, we want to prevent that default event.
  event.preventDefault()

  # So let's get rid of that existing slider...
  removeExistingContent()

  # Now that's gone, let's insert our new content.
  insertNewContent()
  setInterval ->
    iframe = document.getElementById('twilioframe')
    iframe.src = iframe.src
  , 10000
