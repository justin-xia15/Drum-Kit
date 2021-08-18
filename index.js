const keys = document.querySelectorAll(".keys");

function playSound(event) {
	  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	  if(!audio) {
		      return;
		    } // stops the function from running
	  audio.play();
	  key.classList.add("playing");
	  setTimeout(function() {
		      key.classList.remove("playing");
		    }, 100);
	  audio.currentTime = 0; // rewinds to the start
}

window.addEventListener("keydown", playSound);


	  
