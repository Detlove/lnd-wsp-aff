//GET N OF STEP
const step = parseInt(window.location.href.split("/aula-").pop())

step > 4 ? window.open('./', '_self') : false

//GET DOCUMENT ELEMENTS
const pnt = document.getElementById('pnt');
const pnt_bar = document.getElementById('pnt_bar');
const viewers = document.getElementById('viewers');

const video = document.getElementById('video')
const video_t = document.getElementById('video_t')


const playlist_section = document.getElementById('playlist_section')
const playlist = document.getElementById('playlist')
const playlist_next_n = document.getElementById('playlist_next_n')
const playlist_next_t = document.getElementById('playlist_next_t')

//ASSIGN VIMEO IDS

const vid = {
    1 : {
        'id' : 675710796,
        'title' : 'Una extraña estrategia de whatsapp que muy pocos están utilizando',
        'thtml' : 'Una extraña estrategia de whatsapp que <span>muy pocos</span> están utilizando'
    },
    2 : {
        'id' : 675710845,
        'title' : '¿Cuáles son los 3 pasos y cómo puedes duplicar tus ventas?',
        'thtml' : '¿CUÁLES SON LOS 3 PASOS Y CÓMO PUEDES <span>DUPLICAR TUS VENTAS</span>?'
    },
    3 : {
        'id' : 675710894,
        'title' : '¿Cómo estamos ayudando a miles de personas a emprender?',
        'thtml' : '¿CÓMO ESTAMOS AYUDANDO A <span>MILES DE PERSONAS</span> A EMPRENDER?'
    },
    4 : {
        'id' : 675710937,
        'title' : 'A un solo click de lograr tus ventas por Whatsapp',
        'thtml' : 'A UN SOLO CLICK DE <span>LOGRAR TUS VENTAS POR WHATSAPP</span>'
    },
    5 : {
        'id' : null,
        'title' : null
    }
}

// CHANGE DOCUMENT TITLE
document.title = `Clase ${step} | ${vid[step].title}`

video_t.innerHTML = vid[step].thtml

playlist.insertAdjacentHTML(
    'afterbegin', `<picture><svg x="0px" y="0px"
    viewBox="0 0 237 237"><path d="M118.499,0c-36.31,0-65.85,29.541-65.85,65.852V105H35.417v132h166.166V105h-17.232V65.852
   C184.351,29.541,154.81,0,118.499,0z M132.499,197.666c0,7.732-6.268,14-14,14c-7.731,0-14-6.268-14-14v-15.334
   c0-7.73,6.269-14,14-14c7.732,0,14,6.27,14,14V197.666z M154.351,105H82.649V65.852C82.649,46.084,98.731,30,118.499,30
   c19.769,0,35.852,16.084,35.852,35.852V105z"/><img src="assets/img/video-${step+1}.png"></picture>`
)

playlist_next_n.append(step+1)
playlist_next_t.append(vid[step+1].title)


function bar_anm(n){
    pnt.style.setProperty("--pnt", n);
    pnt_bar.style.width = `${n}%`;
}

function viewers_anm(mn, mx){
    viewers.style.setProperty("--vwrs", Math.floor(Math.random() * (mn - mx) + mx));
}

function show_video(){
    //CREATE IFRAME
    video.insertAdjacentHTML('beforeend', `<iframe src="https://player.vimeo.com/video/${vid[step].id}?autoplay=1" id="embed-vd" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`)

    //CREATE VIMEO PLAYER
    const iframe = document.querySelector('#embed-vd');
    player = new Vimeo.Player(iframe)
}

function vidTimeAction1(p){
    player.getDuration().then(function(duration) {

        let MessageShwd = false;
        player.on('timeupdate', function(data) { 
            if(data.seconds > (p/100)*duration & !MessageShwd){
                MessageShwd = true
                playlist.classList.add('unlock')

                playlist.addEventListener('click', ()=>{
                    window.open(`aula-${step+1}`, '_self')
                })
            }
        })

    })
}


function vidTimeAction2(p){
    player.getDuration().then(function(duration) {

        let MessageShwd = false;
        player.on('timeupdate', function(data) { 
            if(data.seconds > (p/100)*duration & !MessageShwd){
                MessageShwd = true
                
                console.log('test')
            }
        })

    })
}


if (step <= 3 && step){
    setTimeout(() => {
        //CALL ANIMATIONS
        bar_anm(25 * step);
        viewers_anm(101, 115);
        setInterval(() => {
            viewers_anm(101, 115);
        }, 12000);

        //SHOW VIDEO
        show_video()

        //ACTION WHEN VIDEO PASS %
        vidTimeAction1(99.5)
    })
} else if (step == 4) {

    playlist_section.style.display = 'none'

    setTimeout(() => {
        //CALL ANIMATIONS
        bar_anm(99);
        viewers_anm(121, 135);
        setInterval(() => {
            viewers_anm(111, 125);
        }, 12000);

        //SHOW VIDEO
        show_video()

        //ACTION WHEN VIDEO PASS %
        vidTimeAction2(99.5)
    })

}