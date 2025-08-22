console.log("hello world");

//TODO: i need to store my image data
//images stored locally or images stored remotely (unsplash...)
//each image is an object (mnost efficient way)

//relative path for local image OR link to the image
//STEP 1
const images = [
  {
    url: "url",
    altText: "altTest1",
  },
  {
    url: "url",
    altText: "altTest2",
  },
  {
    url: "url",
    altText: "altTest3",
  },
];

// TODO: i need to create my thumbnail
//function createThumbnails(){
//select DOM element (thumbnail container) to contain our thumbnails
//this is a repetitive task ----> loop through through array using length property
//inside the loop, we need
//-create image element
//-update the src and alt attributes to match those in the array(paraments)
//give each image a className (.imgclassName)
//add event listener to each image ---> the event handler of this listener is the function you will write to creat large images
// - append the created images to the thumbnail-container
//}

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
