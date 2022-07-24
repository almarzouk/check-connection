// selecting all required elements
let wrapper = document.querySelector(".wrapper");
let toast = document.querySelector(".toast");
let wifiIcon = document.querySelector(".icon");
let title = document.querySelector("span");
let subTitle = document.querySelector("p");
let closeBtn = document.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://jsonplaceholder.typicode.com/todos/1", true);
    xhr.onload = (event) => {
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Harry! Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeBtn.onclick = () => {
          wrapper.classList.add("hide");
        };
      } else {
        offline();
      }
    };
    xhr.onerror = () => {
      offline();
    };
    xhr.send();
  }
  function offline() {
    toast.classList.add("offline");
    title.innerText = "you're offline now";
    subTitle.innerText = "Opps! Internet is disconnected.";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }
  setInterval(() => {
    ajax();
  }, 1000);
};
