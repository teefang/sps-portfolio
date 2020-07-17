// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function getComment() {
  fetch('/data').then(response => response.json()).then((comment) => {
    const commentList = document.getElementById('container');
    commentList.innerHTML = '';
    for (let i in comment) {
      commentList.appendChild(WrapWithListFormat(comment[i].message));
    }
  });
}

function WrapWithListFormat(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

window.onload = function() {
  var modal = document.getElementById("myModal");
  var modal_img = document.getElementById("img");
  var image = document.getElementById("1");
  var image2 = document.getElementById("2");
  var image3 = document.getElementById("3");
  var image4 = document.getElementById("4");
  var image5 = document.getElementById("5");
  var image6 = document.getElementById("6");
  var image7 = document.getElementById("7");
  var image8 = document.getElementById("8");
  var image9 = document.getElementById("9");
  var image10 = document.getElementById("10");
  var image11 = document.getElementById("11");
  var image12 = document.getElementById("12");
  var image13 = document.getElementById("13");
  var image14 = document.getElementById("14");
  var image15 = document.getElementById("15");

  var description = document.getElementById("caption");

  image.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image2.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image3.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image4.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image5.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image6.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image7.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image8.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image9.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image10.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image11.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image12.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image13.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image14.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }
  image15.onclick = function(){
    modal.style.display = "block";
    modal_img.src = this.src;
    description.innerHTML = this.alt;
  }

  var close = document.getElementsByClassName("close")[0];
  close.onclick = function() {
    modal.style.display= "none";
  }
}
