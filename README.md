# WK2-Assignment

Creating an image gallery to show case pictures in full screen; responsive and accessible.

🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

🐿️ As a user, I want the website design to adjust using responsive design methods so that it works well on both small mobile screens and larger desktop screens.
🐿️ As a user, I want the website design to adjust so that there is a noticeable change between desktop and mobile view.
🐿️ As a user with accessibility needs, I expect accessible considerations like alternative text for images so my screen reader can interpret and convey the content to me effectively.
🐿️ As a user, I want to easily switch between images in the gallery using buttons so that my experience is smooth and intuitive.

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

Resources
Markdown Cheatsheet, ChapGPT (no code or answer, asking for direction clues only), google, discord with classmates.

Thoughts throughout project.
Started by following the demo and coding along. Had a clear idea of what I wanted to achieve, which is a photo gallery of my dog. Began by going in and finding the images I wanted to include. Began by saving the images to my computer, creating a folder within my V.S.Code and dragging the images into the folder. V.S code doesnt like the code so I asked a fellow student for advice about how img src are laid out in V.S code and he pointed out that images pulled from personal folders can slow down github which might make the loading of my website slower. He recommended pulling the URLS directly from the social media site I got the photos from.
Went back in and changed the img src to URLs pulled from facebook pictures, however the code underlined red so asked Joe about the urls; whether the structure of the urls was different if the imaages were pulled from facebook. Joe recommended using local host, as images from public media sites like facebook might block the images - he then recommended I check on 'go live' if the image would load. The image didnt load so I went back in and changed the facebook URLS to relative file paths. Joe also advised that because I'm only using a small amount of images, it should affect how they load through github, and that later on in the course we would be learning about how to deal with git hub around more images.
Went through all the demonstrations trying to work out how to do the loop for the array of images. Fried my brain, asked lots of questions of peers and teachers - ended up writing code for each image instead of using the i value to call the information from the array. It's abit disorientating not being able to see the images on the page yet.
Came back to the project after a day inbetween doing a different assignement, and looking at the code for this assignement blanked my brain. Immediately felt stressed because I couldn't make sense of my thoughts for how I was supposed to do the second part for making the large images. Went through the class demos and workshops for arrays, functions, loops, got overwhelmed and went out for a walk with the dog while rubber ducking through the porblem with my husband. Still felt stuck when i came back so asked chat GPT to NOT give me the answer or any code but to point me in the right direction. Still felt like the steps weren't clicking in my head so went in discord and asked for a classmate to rubber duck with - talked through it all with joe from class and then worked through repeating the steps for retrieving the images to creat the large images. Got lots of error messages with the code so kept working through them, making little changes trying to work out what was needed - another class mate, Sam, helped by spotting some typos. Eventually got the result of having the images appear on the webpage really big so moved on to formatting them in css.
Joe recommended leaving the images off and using background colours on the containers to format the page so I didn't get overwhelmed with formatting the images, until I'd set the layout.
Struggling with the CSS selectors for the formatting. Can't get my large image container to show up on the page. Have looked at the MDN pade of class selectors for background and nothing I'm trying is working. Went back to the reference/example website and inspected the properties, now going to try a few of the elements on there and see what happens.
I'm now getting an error message on the page when i go live. Currently feeling very stressed and like i have no idea what I'm doing, but clinging desperately to the reminder that TA Joe said it won't be the end of the world and they'll support me if i dont understand. I know i can do this, I'm just currently struggling to see how.
Jumped on a discord call with Will to work out why my css elements werent working - we foudn adn worked through errors and typos in my codem adn managed to get my images to show on screen then worked through why the large images werent deleting.
Managed to get the images to layout as they should, tried used the 'object fit: cover' as used on the example website to fill the screen with the size of the images but found that that stretched the photos so settled on 'contain' instead and added a linear gradient background so that it wasnt such a stark contrast to thhe images, then played around with the positioning of the thumbnail container.
Referred back to the example image gallery and tried out some of the positioning selectors they had in there to see what affects they had on my webpage, and used the MDN website to understand their properties. I found this assignment difficult, and have come to the conclusion its because I understand how all the concepts work seperately but get very overwhelmed when i have to use them together because I don't understand how they affect each other.
I am very appreciate of the support of my classmates, it has been invaluable in talking through ideas and collaborating to spot errors and come up with ideas and solutions to work out the issues. The number of errors I encounter when coding is frustrating, but I'm beginning to appreciate when they appear because it gives me direction when I mistakes that I can't spot and I enjoy figuring out and fixing them.
I feel like collaboration with my classmates went really well. I feel that my understanding of the concepts when not in a classroom environment, and my ability to recall the information in my own time is proving a big challenge and feel that moving forward I may need to ask for copies of the class recordings to revise the information in my own time. Dyslexia sucks, #Doryforthewin. I'm pleased with how this assignment turned out.

The requirements I achieved:
I made the website responsive so that when teh screen is shrunk the images adjust to the new screen size, and hopefully this also achieves the goal of having a noticable difference between desktop and mobile view.
I have included alternative text for the images.
The images easily switch between each other when clicked on.
