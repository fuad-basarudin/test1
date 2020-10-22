const axios = require("axios")
const urls = ["https://bella-dong.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("SIAP GAN BOTNYA " + Date.now())).catch(() => {});
        })
    }, 100 * 1000);
