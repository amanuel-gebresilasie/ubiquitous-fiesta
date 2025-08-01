function loadHome(alreadyBooted=false){
    if (!alreadyBooted){
        // Booting...
        const dot1 = document.querySelector("#dot1")
        const dot2 = document.querySelector("#dot2")
        const dot3 = document.querySelector("#dot3")
        const booting = document.querySelector("#booting")
        const home = document.querySelector(".intro")
        const loc = document.querySelector("#loc")

        function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function animateDots() {
        const dots = [dot1, dot2, dot3];
        let cycles = 2;

        while (cycles > 0) {

            for (let dot of dots) {
            dot.style.display = "block";
            console.log(dot.id + " shown");
            await sleep(500);
            }

            dots.forEach(dot => dot.style.display = "none");
            console.log("All dots off");
            await sleep(700);

            cycles--;
        }

  async function typeEffect(text, element, dur = 100) {
    element.innerHTML = ""; // Clear any existing content
    for (let char of text) {
      element.innerHTML += char;
      await sleep(dur); // Wait between characters
    }
  }

  await typeEffect("~>whoami", booting);
  await sleep(500)
  home.style.display = 'block'
  await typeEffect("~>pwd",document.getElementById("pwd"))
  await sleep(500)
  loc.style.display='block'
        }

        animateDots();

    }
    else{
        console.log("Already Booted!");
    }
}

loadHome()




