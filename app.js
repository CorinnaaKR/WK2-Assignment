console.log("hello world");

//TODO: i need to store my image data
//images stored locally or images stored remotely (unsplash...)
//each image is an object (mnost efficient way)

//relative path for local image OR link to the image
//STEP 1

const images = [
  {
    src: "WK2ProjectAssignment/autumn bella.jpg",
    altText: "Bella's close-up autumnal smile",
    className: "BellaAutumnCloseUp",
  },
  {
    src: "WK2ProjectAssignment/bella autumn distance.jpg",
    altText: "Bella's distant autumnal pose",
    className: "BellaAutumnPose",
  },
  {
    src: "WK2ProjectAssignment/bella smile.jpg",
    altText: "Bella's happiest smile",
    className: "BellaHappiestSmile",
  },
  {
    src: "WK2ProjectAssignment/bella bluebell path.jpg",
    altText: "Bella's queenly pose",
    className: "BellaQueen",
  },
  {
    src: "WK2ProjectAssignment/playful field smile.jpg",
    altText: "Bella spring collection smile",
    className: "BellaSpringSmile",
  },
];

// TODO: i need to create my thumbnail
//select DOM element (thumbnail container) to contain our thumbnails
//this is a repetitive task ----> loop through array using length property
//inside the loop, we need
//-create image element
//-update the src and alt attributes to match those in the array(paraments)
//give each image a className (.imgclassName)
// our fresh new img needs attributes to work properly!
//we want the values for them to be pulled from the array above!
//add event listener to each image ---> the event handler of this listener is the function you will write to create large images
// - append the created images to the thumbnail-container
//}

function createThumbnails() {
  document.querySelector(".image-container");
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");

    img.src = images.src[i];
    img.alt = images.altText[i];
    img.className = images.className[i];
    console.log(img);
    function createLargeImages() {}
    img.addEventListener("click", createLargeImages);
  }
  imageContainer.appendChild(img);
}

//TODO: i need to create my large images
//created when click on thumbail which creates a copy underneath
//event handler for thumbnail events
//function createLargeImagesHandler(){
//delete current image
//select the large image-container
//delete the current image in the large-image container
//largeImageContainer.innerHTML = null OR ""
//create an image
//update src and alt values
//add a className for styling
//append the image to the container
//}

//add this event handler to the thumbnail container
//call the createThumbnail function
