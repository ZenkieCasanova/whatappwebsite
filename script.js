var audio = new Audio('assets/sentmessage.mp3');
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>RESUME-CULAMBOT.pdf</label></div><a href='assets/RESUME-CULAMBOT.pdf' download='RESUME-CULAMBOT.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15446.371220699266!2d121.0607420706751!3d14.565262987198249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c87ac07141af%3A0xd30b7d4035faeea9!2sBagong%20Ilog%2C%20Pasig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1680884024294!5m2!1sen!2sph' class='map'></iframe></div><label class='add'><address>'#23 Sgt. Santos St. Bagong Ilog Pasig City'<br>Metro Manila<br> NCR, Philippines</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there👋🏻😊,<br><br>My name is <span class='bold'><a class='alink'>Mark Renzkie Culambot</a>.</span><br><br>I'm a Computer Engineering student at <span class='bold'> National University 🏫👨‍🎓</span><br><br>I'd like to hear about potential career opportunities, so that I could hone my skills and gain experience to a productive company.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>Or Send <span class='bold'>'projects'</span> if you want to go to a DIRECT link to my personal website.<br>");
            }, 2000)
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send/Chat Keyword to get what you want to know about me...<br>e.g<br><br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing Bachelor of Science in Computer Engineering.<br><br>I can comfortably write code in the following languages :<br><span class='bold'>-Python<br>-Java<br>-C++<br>-C<br>-Javascript<br>-Kotlin<br>-HTML<br></span><br><br>I've knowledge and experience with the following programs :<span class='bold'><br>-MATLAB<br>-AutoCAD<br>-Arduino<br>-Cisco</span><br><br>I use <span class='bold'>Microsoft Windows 10 and Linux Ubuntu</span> as operating systems on my Lenovo Legion 5, my device is dualbooted <br>");
            break;

        case "education":
            sendTextMessage("I'm 5th year student taking BS degree in Computer Science Engineering from National University - Manila<br>Year : 2015-2023(Current)<br><br>I'm a 1st year transfer student from Rizal Technological University<br>Year:2014<br><br>I have completed my High School and Elementary Diploma from a private school known as La Immaculada Concepcion School in Pasig City<br>Year:2004-2013");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️This portfolio website is built using HTML, CSS and JavaScript<br><br> 🎨Designed and Developed by <a class='alink' target='_blank' href='https://markrenzkie-personalproj-9d62d4.netlify.app/'><span class='bold'>Mark Renzkie Culambot</a></span>");
            break;
        case "contact":
            sendTextMessage("Contact Info: <br><br>Cellphone Number: +639499223803<br>Email Address: marky.aeron@gmail.com");
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then please click into my website so that you could view all the important details.<br><br><div class='social'><a target='_blank' href='https://markrenzkie-personalproj-9d62d4.netlify.app/ '> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hello, I apologize input isn't recognized...😢<br>Send/Chat <span class='bold'>'help'</span> to know more about usage.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

/*UNDER DEVELOPMENT -TAKE RESPONSE AND SEND TO GMAIL!*/
function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "...Waiting for Response...";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
