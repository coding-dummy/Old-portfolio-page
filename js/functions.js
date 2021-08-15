//Loads the index page automatically when first loading the page.
window.addEventListener('load', showIndex);

//Function that injects the html code into the targetted div.
function showIndex() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
    <div class="header">
        <div>
            <img class="logo" src="./img/logo.png" onclick="showIndex()">
        </div>
        <div class="dropDown">
            <img class="dropBtn" src="./img/menu.png">
            <div class="dropDownMenu">
                <div class="language">
                    <a class="eng" href="#" onclick="showIndex();return false;"><img class="flag" src="./img/eng.png">ENG</a>
                    <a class="fin" href="./fi/index.html"><img class="flag" src="./img/fin.png">FIN</a>
                </div>
                <a href="#" onclick="showAbout();return false;">About Me</a>
                <a href="#" onclick="showContact();return false;">Contact</a>
            </div>
        </div>
    </div>
    <div class="introduction">
        <h1>Student Front-end Developer</h1>
        <h2>1st year student with an interest in web design.</h2>
        <img src="./img/me.png">
        <!--Image goes here-->
    </div>
    <div class="about">
        <div class="aboutTxt">
            <p>Hello there, I'm Tavis!<br>
            I am a first year student and I am currently studying BEng in IT at OAMK.<br>
            If you wish to find out more about me, you can click below!</p>
            <button onclick="showAbout();">Click me!</button>
        </div>
    </div>
    <div class="skills">
        <div class="coding">
            <h2>Front-end</h2>
            <img src="./img/code.png">
            <p>I am fairly new to programming but I am highly motivated to learning new languages!</p>
            <p>I am comfortable with:<br><b>HTML</b><br><b>CSS</b></p>
            <p>I am learning:<br><b>JavaScript</b></p>
            <p>I am interested in:<br><b>C++</b><br><b>Java</b><br><b>Python</b></p>
        </div>
        <div class="design">
            <h2>Design</h2>
            <img src="./img/design.png">
            <p>I enjoy using a wide variety of tools to help me with web design and other things.</p>
            <p>Web design:<br><b>Visual Studio Code</b><br><b>Axure RP 9</b><br><b>Codepen</b><br><b>Github</b></p>
            <p>Image editing:<br><b>Adobe Photoshop 2020</b></p>
            <p>Video editing:<br><b>Vegas Pro</b></p>
        </div>
    </div>
    <div class="work">
        <h1>My Work</h1>
        <div class="projects">
            <div class="groupProject1">
                <a href="./Year 1/OOBP Exercise1/mainPage.html" target="_blank"><img class="project1Img" src="./img/atkStore.png"></a>
                <div class="projectText1">
                    <p>The first group project I did in university, which was designing an e-commerce website. We worked together on the design, each working on an individual page as the first part of the assignment.</p>
                    <p>Later, we worked individually and implemented JavaScript to give the site more functionality. It was my first time using JavaScript and I was proud of the results I got.</p>
                </div>  
            </div>
            <div class="groupProject2">
                <a href="https://xerren09.github.io/OAMK-Notes/" target="_blank"><img class="project2Img" src="./img/oamkNote.png"></a>
                <div class="projectText2">
                    <p>The second group project I did in university and was a lot bigger in scale, creating a platform for students at OAMK, where they can write and save notes that they make during their lectures and studies.</p>
                    <p>I was mostly in charge of the design, creating the logo and dealing with HTML and CSS for all the pages for our project.</p>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>Designed and coded by <a href="https://github.com/coding-dummy" target="_blank">me</a></p>
    </footer>
    `
};

//Function that injects the html code into the targetted div.
function showAbout() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
    <div class="header">
        <div>
            <img class="logo" src="./img/logo.png" onclick="showIndex()">
        </div>
        <div class="headerCtrl">
            <img class="closeBtn" src="./img/close.png" onclick="showIndex();return false;">
        </div>
    </div>
    <div class="container">
        <div class="aboutMe">
            <h1>About me</h1>
            <h2>My name is Tavis Sinclair, I was born and raised in the United Kingdom but I moved to Finland a few years back and haven't regretted the choice since.</h2>
            <h2>I am a first year student and I am currently studying BEng in IT at OAMK here in Oulu. This first study year has been rather tough with having to study remotely due to COVID-19, but I have made sure to apply myself and put my all into my work. I am very excited for what I am going to be learning in the next following years.</h2>
            <h2>I have a keen interest in web design and I am also interested in the gaming industry.</h2>
            <h2>My hobbies include playing a wide variety of video games and watching comedy shows.</h2>
        </div>
        <div class="picture">
            <img class="irlMe" src="./img/irlMe.png">
        </div>
    </div>
    `
};

//Function that injects the html code into the targetted div.
function showContact() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
    <div class="header">
        <div>
            <img class="logo" src="./img/logo.png" onclick="showIndex()">
        </div>
        <div class="headerCtrl">
            <img class="closeBtn" src="./img/close.png" onclick="showIndex();return false;">
        </div>
    </div>
    <div class="intro">
        <img class="me" src="./img/me.png">
        <h1>If you wish to get in touch with me for any reason, feel free to!</h1>
    </div>
    <div class="contact">
        <h2>You can send me an email at <u>codingdummy@outlook.com</u></h2>
        <h2>OR</h2>
        <h2>You can send me a message on Discord, at <u>Tavis#2028</u></h2>
    </div>
    `
};