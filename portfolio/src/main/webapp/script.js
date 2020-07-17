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
  var description = document.getElementById("caption")
  let imageArray = [];
  for (i = "1"; i <= "15"; i++) {
    var image = document.getElementById(i);
    image.onclick = function(){
      modal.style.display = "block";
      modal_img.src = this.src;
      description.innerHTML = this.alt;
    }
    imageArray.push(image);
  }

  var close = document.getElementsByClassName("close")[0];
  close.onclick = function() {
    modal.style.display= "none";
  }
}
