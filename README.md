_I know you want to watch Netflix, but first let's do some exercise !_

# Move your butt

Combine this page with the LeechBlock NG addon to motivate yourself to do some physical exercise before visiting some websites.

For example, each time you opened Netflix, you could first see a page like this:

![sample page](/img/move-your-butt.png)

## How to use

1. Fork this repo
2. Modify the exercises list at the top of _script.js_
3. Publish the repo as a [Github page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
4. Install the LeechBlock NG addon ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/leechblock-ng/), 
[Chrome](https://chrome.google.com/webstore/detail/leechblock-ng/blaaajhemilngeeffpbfkdjjoefldkok), [Edge](https://microsoftedge.microsoft.com/addons/detail/leechblock-ng/hnncfhodpmpjchmmcnimoimkcojdmfhl))
5. Configure the addon (the correct settings are not obvious, see below)

_That's it !_

### How to configure the LeechBlock NG addon

Create a new "block". In the "what" section, list all the websites for which you want to first show this page.
Add also the url of your exercise page, preceded by a ">".
If you use github page, the url would probably be "your-username.github.io" (you need to specify the subdomain, but not necessarily the full url).

![LeechBlock options: what](/img/what.png)

_N.B.: it works well with youtube, netflix and other websites, but it seems to have problems with facebook and twitter._

Fill in the "when" section as follows (if you want this to be always active):

![LeechBlock options: when](/img/when.png)

Then add the url of your exercise page in the "how" section. 
It's important to have "url=$U" at the end, this is how LeechBlock will communicate the url that you were trying to reach to your exercise page.
![LeechBlock options: how](/img/how.png)

Finally, you have to click on "advanced options", and select "Treat referrers as allow-conditions rather than block-conditions".
This is what will allow you to access the blocked website after showing the exercise page.
![LeechBlock options: advanced](/img/advanced.png)

Save it and it should work !


