![](images/ga.png)

# CORGI CAROUSEL

![](https://imgur.com/pq7zXBJ.png)

Carousels are essentially slideshows used to cycle through a series of content. Today, we'll be building a very simple one to cycle through a set of images using HTML/CSS/JavaScript.

## Setup

Starter code has been provided for you with all the files linked together.
  1. Open the entire folder in VScode to follow along and create a carousel with cute little corgis.
  2. Open the `index.html` in your browser.

Take a minute to open the developer tools and examine the elements on your page. There are also comments in your HTML file to explain what every tag is doing.
Right now there are no images in your HTML file. Our job is to one of them there at a time and to add event listeners to our buttons so we can cycle through them.


 ## Let's manipulate the DOM!

 **Step 1.** Before we can add images to the page using JS, we have to 'grab' them somehow. Let's look at the 'relative path' that the Carousel Top is using. Look at line 15 in your HTML file to see the relative path of the image.

**Step 2.** Using the same relative path structure, let's declare a variable called 'images' and assign an array as a value. 
<details>
<summary>Spoiler</summary>
<br>

```js
  const images = []
```
</details>

**Step 3.** Now let's add the 'relative path' of each picture of the corgis to our 'images' array. Each relative path should be a string, so remember to wrap them each in quotes.
<details>
<summary>Spoiler</summary>
<br>

```js
  const images = ['images/corgi-boat.png', 'images/corgi-cute.png', 'images/corgi-goggles.png', 'images/corgi-hotdog.png']
```
</details>

**Step 4.** Now that we have our array of images, we can set one to be the picture that our app starts off with when a user visits the page. First, let's grab the element from our HTML that has the 'id' of 'mainImage' and save it to a variable with the same name as the 'id'. Don't forget to 'console.log()' to verify you're grabbing the correct element. 
<details>
<summary>Spoiler</summary>
<br>

```js
  const mainImage = document.getElementById('mainImage')
```
</details>

**Step 5.** COOL! Our mainImage variable is what we call a 'getter'. We use this variable to 'get' an element from our HTML. Now that we have it saved to a variable, let's change its 'src' attribute. There are many, many methods that we haven't talked about. The one we're going to use to change an attribute of an element is `setAttribute()`. It takes two arguments. The first argument is the attribute of the element we want to change. In this case, it's the 'src' attribute because we want to change the image element's source. The second argument is what we want to change the attribute to. In this case, we want the 'src' attribute to become the first image in our 'images' array.

Use the 'setAttribute()' method on your 'mainImage' variable to change the 'src' and set it to the first image in our array. When you do this correctly, you will be able to the see first corgi image on the page!
<details>
<summary>Spoiler</summary>
<br>
Remember, 'src' gets quotes because it is not a variable in our JS. images IS a variable in JS and it is an array so we can pull specific indexes from the array using bracket notation. Don't forget these indexes start at zero.

```js
  mainImage.setAttribute('src', images[0])
```
</details>


**Step 6.** SWEET! We can see our first image on the page! This is DOM manipulation! We just took our plain old HTML page and injected an image to it using ONLY JavaScript. Now we can focus on the buttons to be able to sift through our images array.

**Step 7.** Let's start with the 'next' button. If you examine your HTML, you will see on line 31 that the div has a class of 'next'. Grab that div using 'querySelector()' and set it to a variable called 'next'. Console log your 'next' variable to verify that you grabbed the correct element.
<details>
<summary>Spoiler</summary>
<br>

```js
  const next = document.querySelector('.next')
```
</details>

**Step 8.** Now let's add an event listener to the 'next' variable. Remember that addEventListener() takes two arguments. The first argument is the event that we are listening for, in this case a 'click'. The second argument is a function, just like we used in the last class. Just set up your event listener for now and we'll go over what logic to write inside of the function in the next step.
<details>
<summary>Spoiler</summary>
<br>

```js
  next.addEventListener('click', () => {
    //stuff will go here
  })
```
</details>

 **Step 9.** So let's think about what we want to happen here. When we click the `next` button, we want the image to change to the next index in our array. First, let's declare a global variable, meaning it will live outside of any function. Let's declare a global variable at the top of our JS file called `currentImgIndex` and set it's value to 0. This variable will serve as the index that we want to change the `mainImage` to. We already set it to be the first index of our `images` array, so that's why we gave it a value of 0.
<details>
<summary>Spoiler</summary>
<br>

```js
  let currentImgIndex = 0
```
</details>

**Step 10.** Here is where JS variables REALLY come into play here. Since we have a number value saved to our `currentImgIndex` variable, now we can update our `mainImage` source to be `images[currentImgIndex]`. Go back to Step 5 and update the `src` from `images[0]` to `images[currentImgIndex]`. Save that and you should see no visible change to your page.
<details>
<summary>Spoiler</summary>
<br>

```js
  mainImage.setAttribute('src', images[currentImageIndex])
```
</details>

**Step 11.** Now let's think programmatically what we want to happen. Since we have a variable that has a number value and we are using it to be the index in our array, we can add 1 to it, every time we click on the `next` button. So back inside of our function from Step 8, let's write some logic. First add 1 to currentImgIndex. Next we want to use the same line of code from Step 10 to once again 'set' the new source of our `mainImage`.
<details>
<summary>Spoiler</summary>
<br>
Your event listener should now look like this:

```js
  next.addEventListener('click', () => {
    currentImgIndex += 1
    mainImage.setAttribute('src', images[currentImgIndex])
  })
```
</details>

**Step 12.** THIS WORKS! Now we can iterate over our array of images and update the image in our HTML file just by clicking on the 'next' button. BUT we see it breaks when `currentImgIndex` gets to a value higher that the amount of images in our array. We can fix this with a conditional statement. Let's add an `if` statement inside of our event listener to first check if the value of `currentImgIndex` is higher than the length of our array minus 1. We have to include the 'minus 1' because of how array indices work. Since we start at 0, and there are 4 images; the indices are 0, 1, 2, 3. But the length of the array is 4.
In our event listener BEFORE we add 1 to `currentImgIndex` let's write our `if` statement to first check if `currentImgIndex` is greater than or equal to `images.length - 1`. If that condition is true, then we want to set `currentImgIndex` back to 0 so that we go back to the first image after we cycle through the rest.

But that's only IF that condition is true. What about while it isn't true and we want to cycle through images? Let's also add an `else` statement to say that if the condition above isn't true, then we will continue to add 1 to `currentImgIndex`. The line where we set a new attribute to mainImage should go underneath the if/else statement since we want that line of code to run regardless of what happens in the if/else statement.
<details>
<summary>Spoiler</summary>
<br>
Your event listener should now look like this:

```js
  next.addEventListener('click', () => {
    if(currentImgIndex >= images.length - 1){
        currentImgIndex = 0
    } else {
        currentImgIndex += 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
  })
```
</details>



**Step 13.** Ok, we've got half of this working. Your challenge now is to add the same functionality for the 'previous' button. Make sure to examine your HTML file again to see what class that button has so you can grab it or 'get' it appropriately.


Make sure you have fun, and remember this is YOUR project now. You can use this project as a piece in your portfolio if you'd like to show your understanding of DOM Manipulation!