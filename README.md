
## Welcome to FitCheck.

This is a very basic barebones High-Fidelity prototype of FitCheck.

In this demo, item(clothes/accessories) photos are replaced with black boxes. I have not yet added uploading photos to the app.

Most navigation is included, however ceartain pages are left out.

There are a few steps in order to properly test this. The first step is to navigate to this folder in your preferred CLI.  This can be VS Code, Terminal, iTerm2, or any other terminal youd like to use.

Next, you should enter the command ` npm run start ` or just ` npm start `.

This will host my Node JS server on ` localhost:3000 `.

Then you should place that link into your preferred browser to test.

In order to properly test this app in your browser it is highly recommended to enter developer tools and use the 'Resoonsive Design Mode'. This will allow you to select a smartphone to test on as this is the proper size that I have made this app for.

After that you are free to use the app as you feel fit.

You are welcome to sign up and navigate within your own account, but I recommend using the account { username: 'ethan', password: 'pollack' }. If you login with this account there are preloaded items and fits in the account.

The two features that I have included as my depth are the closet search feature and the item edit page. These I spent the most amount of time on and have included in the app.

To navigate to the closet you must first login, then press 'Closet'. From there you will be shown a list of all tags in your closet. You can click on these to filter your closet items and you can input your own with the text box provided. Each item will be displayed with their image(black box) and their tags that you can horizontally scroll through. If you click on the item image you will be navigated to the item edit page. This page shows a more detailed image along with a similar looking tag and search setup. You can add new tags by typing them into the text input. Tags that are blue are active and you can remove them by clicking on them. YOu can also tap on a red tag while typing to add it to the list of active tags. These will be save and you can see them by navigating back to the closet and refreshing.

I have included the visual support for other features such as adding items, fits, social, and more but these features are not yet actually supported.

I hope you enjoy FitCheck. version 1.
