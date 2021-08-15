//Loads the index page automatically when first loading the page.
window.addEventListener('load', showIndex);

//Function that injects the html code into the targetted div.
function showIndex() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
    <div class="header">
        <div>
            <img class="logo" src="../img/logo.png" onclick="showIndex()">
        </div>
        <div class="dropDown">
            <img class="dropBtn" src="../img/menu.png">
            <div class="dropDownMenu">
                <div class="language">
                    <a class="eng" href="../index.html"><img class="flag" src="../img/eng.png">ENG</a>
                    <a class="fin" href="./fi/index.html" onclick="showIndex();return false;"><img class="flag" src="../img/fin.png">FIN</a>
                </div>
                <a href="#" onclick="showAbout();return false;">Minusta</a>
                <a href="#" onclick="showContact();return false;">Yhteydenotto</a>
            </div>
        </div>
    </div>
    <div class="introduction">
        <h1>Opiskeleva Front-end Kehittäjä</h1>
        <h2>Ensimmäisen vuoden opiskelija kiinnostuksen kohteena verkkosuunnittelu.</h2>
        <img src="../img/me.png">
        <!--Image goes here-->
    </div>
    <div class="about">
        <div class="aboutTxt">
            <p>Moikka, olen Tavis!<br>
            Olen ensimmäisen vuoden tieto- ja viestintätekniikan opiskelija Oulun ammattikorkeakoulusta.<br>
            Jos haluat lukea minusta lisää, klikkaa alla olevaa painiketta!</p>
            <button onclick="showAbout();">Klik!</button>
        </div>
    </div>
    <div class="skills">
        <div class="coding">
            <h2>Front-end</h2>
            <img src="../img/code.png">
            <p>Olen aloitteleva ohjelmoija, joka on motivoitunut uusien ohjelmointikielien oppimisesta!</p>
            <p>Osaan:<br><b>HTML</b><br><b>CSS</b></p>
            <p>Opettelen:<br><b>JavaScript</b></p>
            <p>Olen kiinnostunut:<br><b>C++</b><br><b>Java</b><br><b>Python</b></p>
        </div>
        <div class="design">
            <h2>Suunnittelu</h2>
            <img src="../img/design.png">
            <p>Käytän useita ohjelmia verkkosuunnittelussa ja muissa töissäni.</p>
            <p>Verkkosuunnittelu:<br><b>Visual Studio Code</b><br><b>Axure RP 9</b><br><b>Codepen</b><br><b>Github</b></p>
            <p>Kuvaeditointi:<br><b>Adobe Photoshop 2020</b></p>
            <p>Videoeditointi:<br><b>Vegas Pro</b></p>
        </div>
    </div>
    <div class="work">
        <h1>Työni</h1>
        <div class="projects">
            <div class="groupProject1">
                <a href="../Year 1/OOBP Exercise1/mainPage.html" target="_blank"><img class="project1Img" src="../img/atkStore.png"></a>
                <div class="projectText1">
                <p>Ensimmäinen työni oli ryhmäprojekti, joka tuotettiin ammattikorkeakoulussa. Aiheena oli kaupallisen verkkosivun suunnitteleminen. Suunnittelimme ulkoasun yhdessä, ja jokainen projektin jäsen teki yhden osan verkkosivuista.</p>
                <p>Tämän jälkeen työskentelimme itsenäisesti ja lisäsimme JavaScript-koodia parantaaksemme sivuston toimivuutta. Tämä oli ensimmäinen kokemukseni JavaScriptin käytöstä, ja olen todella tyytyväinen lopputulokseen.</p>
                </div>  
            </div>
            <div class="groupProject2">
                <a href="https://xerren09.github.io/OAMK-Notes/" target="_blank"><img class="project2Img" src="../img/oamkNote.png"></a>
                <div class="projectText2">
                    <p>Toinen ammattikorkeakoulussa tuottamani ryhmäprojekti oli mittakaavaltaan laajempi. Tuotoksena syntyi sovellusalusta, jolla OAMK:n opiskelijat voivat kirjoittaa ja tallentaa muistiinpanoja, joita he tekevät luentojen ja opintojen aikana.</p>
                    <p>Tässä projektissa olin eniten vastuussa suunnittelusta. Suunnittelin alustan logon sekä tuotin suurimman osan sivujen HTML- ja CSS-koodista.</p>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>Suunnitellut ja ohjelmoinut <a href="https://github.com/coding-dummy" target="_blank">me</a></p>
    </footer>
    `
};

//Function that injects the html code into the targetted div.
function showAbout() {
    target = document.getElementById('pageContent');
    target.innerHTML = `
    <div class="header">
        <div>
            <img class="logo" src="../img/logo.png" onclick="showIndex()">
        </div>
        <div class="headerCtrl">
            <img class="closeBtn" src="../img/close.png" onclick="showIndex();return false;">
        </div>
    </div>
    <div class="container">
        <div class="aboutMe">
            <h1>Tietoa minusta</h1>
            <h2>Olen Tavis Sinclair, ja olen kotoisin Englannista. Muutin Suomeen muutama vuosi sitten, enkä ole katunut päätöstäni siitä asti.</h2>
            <h2>Olen ensimmäisen vuoden vuoden tieto- ja viestintätekniikan opiskelija Oulun ammattikorkeakoulusta. Ensimmäisen vuoden opinnot olivat haasteelliset COVID-19 -pandemian takia, mutta olen aina panostanut opiskeluun parhaani mukaan. Odotan innolla, miten tulevat opinnot tulevat kehittävämään osaamistani.</h2>
            <h2>Olen erityisesti kiinnostunut verkkosuunnittelusta sekä peliohjelmoinnista- ja kehittämisestä.</h2>
            <h2>Vapaa-ajalla nautin videopelien pelaamisesta ja komediaohjelmien katsomisesta.</h2>
        </div>
        <div class="picture">
            <img class="irlMe" src="../img/irlMe.png">
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
            <img class="logo" src="../img/logo.png" onclick="showIndex()">
        </div>
        <div class="headerCtrl">
            <img class="closeBtn" src="../img/close.png" onclick="showIndex();return false;">
        </div>
    </div>
    <div class="intro">
        <img class="me" src="../img/me.png">
        <h1>Voit ottaa minuun yhteyttä alla olevilla tavoilla!</h1>
    </div>
    <div class="contact">
        <h2>Laita minulle sähköpostia <u>codingdummy@outlook.com</u></h2>
        <h2>TAI</h2>
        <h2>Discord-viestiä: <u>Tavis#2028</u></h2>
    </div>
    `
};