// JS to retrieve hardware specs

// Runs the logNetworkInfo function on page load.
document.addEventListener("DOMContentLoaded",logNetworkInfo)

// Get IP address
var getIPFromAmazon = () => {
    fetch("https://checkip.amazonaws.com/", { mode: 'no-cors'}).then(res => res.text()).then(data => {
        console.log(data)
        document.getElementById("ipadd").innerHTML = data
    })
}

function logNetworkInfo() {

    var connection = window.navigator;
    
    logicalProcessors = connection.hardwareConcurrency

    // Check for Chrome or Firefox browser
    var agent = connection.userAgent.toLocaleLowerCase();
    if (agent.search("chrome") > -1 ) {
        browser = "Chrome";
        deviceRAM = connection.deviceMemory
    }
    else if (agent.search("firefox") > -1) {
        console.log("firefox")
        window.alert("You are not using a Chromium-based browser.  You may have no or limited functionality.")
        browser = "Firefox"
        deviceRAM = "Only supported on Chrome Browser"
    }
    else {
        browser = "Browser is not Chrome or Firefox"
    }

    var effectiveType = window.navigator.connection.effectiveType

    if (effectiveType == "4g") {
        connectionQuality = "The network is suited for HD video, real-time video, etc."
    }
    else if ( effectiveType == "3g") {
        connectionQuality = "The network is suited for transfers of large assets such as high resolution images, audio, and SD video."
    }
    else ( connectionQuality = "Your connection quality is either poor or unreadable.")

    // Print information to the webpage
    document.getElementById("cpu-cores").innerHTML=logicalProcessors
    document.getElementById("ram").innerHTML= deviceRAM
    document.getElementById("browser").innerHTML= browser
    document.getElementById("internet").innerHTML= connectionQuality
    document.getElementById("downlink").innerHTML= connection.connection.downlink +" Mb/s"
    getIPFromAmazon()
}

// logNetworkInfo();
