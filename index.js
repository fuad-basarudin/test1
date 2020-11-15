const axios = require("axios")
const urls = ["https://bella-dong.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 120 * 1000);
