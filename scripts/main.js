let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/interest2.jpg') {
    myImage.setAttribute ('src','images/interest.jpg');
  }
  else if(mySrc === 'images/interest.jpg') {
      myImage.setAttribute ('src','images/interest3.jpg');  
  } else {
    myImage.setAttribute ('src','images/interest2.jpg');
  }
}