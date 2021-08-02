// JS to retrieve hardware specs

// Runs the logNetworkInfo function on page load.
document.addEventListener("DOMContentLoaded",logNetworkInfo)

// Get IP address
/* var getIPFromAmazon = () => {
    fetch("https://checkip.amazonaws.com/", { mode: 'no-cors'}).then(res => res.text()).then(data => {
        console.log(data)
        document.getElementById("ipadd").innerHTML = data
    })
}
 */
function logNetworkInfo() {
    console.log(navigator)
    var connection = window.navigator;
    
    logicalProcessors = connection.hardwareConcurrency

    // Check for Chrome or Firefox browser
    var agent = connection.userAgent.toLocaleLowerCase();
    if (agent.search("chrome") > -1 ) {
        browser = "Chrome";
        deviceRAM = connection.deviceMemory
        var effectiveType = window.navigator.connection.effectiveType
        dlspeed = connection.connection.downlink +" Mb/s"

        if (effectiveType == "4g") {
            connectionQuality = "The network is suited for HD video, real-time video, etc."
        }
        else if ( effectiveType == "3g") {
            connectionQuality = "The network is suited for transfers of large assets such as high resolution images, audio, and SD video."
        }
        else ( connectionQuality = "Your connection quality is either poor or unreadable.")
    }
    else if (agent.search("firefox") > -1) {
        console.log("firefox")
        window.alert("You are not using a Chromium-based browser.  You may have no or limited functionality.")
        browser = "Firefox"
        deviceRAM = "Only supported on Chromium Browsers"
        var effectiveType = "Only supported on Chromium Browsers"
        dlspeed = "Only supported on Chromium Browsers"
        connectionQuality = "Only supported on Chromium Browsers"
    }
    else {
        browser = "Browser is not Chrome or Firefox"
    }

    



    // Print information to the webpage
    document.getElementById("cpu-cores").innerHTML=logicalProcessors
    document.getElementById("ram").innerHTML= deviceRAM
    document.getElementById("browser").innerHTML= browser
    document.getElementById("internet").innerHTML= connectionQuality
    document.getElementById("downlink").innerHTML= dlspeed
    // getIPFromAmazon()
}

// logNetworkInfo();
