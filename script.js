document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const image = document.getElementById("imagehehe");
    if (!image) {
      console.error("Image element not found");
      return;
    }
    const propmt = document.querySelector("#prompt");
  
    button.addEventListener("click", function () {
      console.log("first")
      const data = propmt.value;
  
      let encodeDara = encodeURI(data)
  
      image.src = `https://pollinations.ai/p/${encodeDara}`;
      
      console.log(image.src);
  
    });
  });