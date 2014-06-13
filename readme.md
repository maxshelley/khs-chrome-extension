# KHS Chrome Extension

I was invited to speak at my old high school, [Kesgrave High School](http://www.kesgrave.suffolk.sch.uk), to speak to two groups of Year 9 and Year 10 Computing students (13-15 years old) about “what goes on in the real world”.

We played around with web inspector on the school website and then I showed them we could take this further by using [Twilio](http://www.twilio.com) to have their text messages show up on the home page.

This simple Chrome extension does some simple tasks. It checks to see if it's on  `http://www.kesgrave.suffolk.sch.uk/*`, if it is, it waits for you to click on the school logo. When you click, it removes the carousel from the home page and replaces it with an iFrame with a quick Twilio Rails app I built to show the messages.

It sets a quick loop to refresh the iFrame every 10 seconds.

## Roundup

This was an interesting glimpse into how surprisingly easy it is to get started with Chrome extensions. This just took a few minutes and [the docs](https://developer.chrome.com/extensions/getstarted) from Google were good.

I got a little lost when it came to content_scripts vs. background script/page, and I'm not sure I used this the right way, but it worked and I didn't have much time to look into it.
