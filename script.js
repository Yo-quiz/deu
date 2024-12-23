// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Pfannes", img: "alcaldero.png" },
    { name: "Stocher", img: "sinna.png" },
    { name: "Rambizambi", img: "sinnareno.png" },
    { name: "Faulheld", img: "katano.png" },
    { name: "Maujor", img: "katananai.png" },
    { name: "Gähneral", img: "katakroken.png" },
    { name: "Mochismo", img: "mochimacho.png" },
    { name: "Misskunz", img: "machimio.png" },
    { name: "Helmchen", img: "yelmandante.png" },
    { name: "Hybritter", img: "juntollero.png" },
    { name: "Corptain", img: "genedaver.png" },
    { name: "Leodrio", img: "flamileon.png" },
    { name: "Seismo", img: "tembloleon.png" },
    { name: "Stimmuleo", img: "sirleon.png" },
    { name: "Wettaran", img: "ludorai.png" },
    { name: "Schimma", img: "lustre.png" },
    { name: "Fiesa", img: "Furtre.png" },
    { name: "Glitza", img: "dortre.png" },
    { name: "Benkei", img: "benkei.png" },
    { name: "B3-NK1", img: "b3-nk1.png" },
    { name: "Sushiyama", img: "sushiyama.png" },
    { name: "Kapunki", img: "kapunki.png" },
    { name: "Hornboxa", img: "lucharabajo.png" },
    { name: "Kneiferer", img: "camperabajo.png" },
    { name: "Zangenzar", img: "chafarabajo.png" },
    { name: "Serberker", img: "osfurio.png" },
    { name: "Butzemon", img: "sacoco.png" },
    { name: "Drotzel", img: "mokopavo.png" },
    { name: "Katarrnich", img: "pachus.png" },
    { name: "Amnesimon", img: "komemo.png" },
    { name: "Doofkapp", img: "tontolin.png" },
    { name: "Willnich", img: "yopaso.png" },
    { name: "Genuk", img: "puf.png" },
    { name: "Habssat", img: "yanomas.png" },
    { name: "Kicha", img: "algazara.png" },
    { name: "Blabia", img: "labizula.png" },
    { name: "Petzmeralda", img: "cotilleja.png" },
    { name: "Stereoma", img: "marulleja.png" },
    { name: "Omakabra", img: "esquelleja.png" },
    { name: "Pistoleros", img: "cupistolo.png" },
    { name: "Casanovo", img: "casanovo.png" },
    { name: "Casalusa", img: "casanono.png" },
    { name: "Spannsel", img: "ondivoro.png" },
    { name: "Signalabim", img: "coberturo.png" },
    { name: "Dynamon", img: "estatinarca.png" },
    { name: "Portalex", img: "telespejo.png" },
    { name: "Spekulump", img: "malpejismo.png" },
    { name: "Eulusionist", img: "iluho.png" },
    { name: "Uhudini", img: "eluho.png" },
    { name: "Vagabuhu", img: "ubiuho.png" },
    { name: "Dreiseha", img: "trilepata.png" },
    { name: "Vierseha", img: "tetrariosa.png" },
    { name: "Tengu", img: "tengu.png" },
    { name: "Sengu", img: "flamngu.png" },
    { name: "Kyubi", img: "kyubi.png" },
{ name: "Kryo", img: "nievacolas.png" },
{ name: "Dösuma", img: "tentelento.png" },
{ name: "Darumacho", img: "tentemacho.png" },
{ name: "Goruma", img: "tenterila.png" },
{ name: "Nixda", img: "nihablar.png" },
{ name: "Sperrich", img: "impas.png" },
{ name: "Wallter", img: "murallin.png" },
{ name: "Panza", img: "lorigon.png" },
{ name: "Zappelfant", img: "inquielifante.png" },
{ name: "Zitterfant", img: "perselefante.png" },
{ name: "Barricardp", img: "globqueo.png" },
{ name: "Haltan", img: "globtundente.png" },
{ name: "Der Brocken", img: "montaña_loca.png" },
{ name: "Der Vulkan", img: "lord_lava.png" },
{ name: "Rebelzebub", img: "rebelcebu.png" },
{ name: "Bandido", img: "caporrista.png" },
{ name: "Grobro", img: "hermanion.png" },
{ name: "Rhinfanterist", img: "pegarabajo.png" },
{ name: "Rhinoberst", img: "enormarabajo.png" },
{ name: "Rhinozerboss", img: "cuernarabajo.png" },
{ name: "Kastellan III", img: "castelius_III.png" },
{ name: "Kastellan II", img: "castelius_II.png" },
{ name: "Kastellan I", img: "Castelius_I.png" },
{ name: "Oberkastellan", img: "Maxicastelius.png" },
{ name: "Robonyan", img: "robonyan.png" },
{ name: "Goldinyan", img: "aureonyan.png" },
{ name: "Schtompf", img: "pom.png" },
{ name: "Brausch", img: "flus.png" },
    { name: "Glitzelle", img: "deslumbrella.png" },
    { name: "Klapperika", img: "rechinella.png" },
    { name: "Skelebelle", img: "esquelebella.png" },
    { name: "Winzikado", img: "ningarra.png" },
    { name: "Ninzikado", img: "habilgarra.png" },
    { name: "Singzikado", img: "cantigarra.png" },
    { name: "Schlotterrier", img: "escanlofrio.png" },
    { name: "Kalteser", img: "frihuahua.png" },
    { name: "Puhdel", img: "lavadenco.png" },
    { name: "Jibanyan", img: "jibanyan.png" },
    { name: "Dornyan", img: "espinyan.png" },
    { name: "Grobianyan", img: "pelochnyan.png" },
    { name: "Wandakappa", img: "kappandante.png" },
    { name: "Nomakappa", img: "kappadachin.png" },
    { name: "Wassgeht", img: "kapparfista.png" },
    { name: "Komasan", img: "komasan.png" },
    { name: "Komähne", img: "komaleon.png" },
    { name: "Komajiro", img: "komajiro.png" },
    { name: "Komatigga", img: "komatigrado.png" },
    { name: "Baku", img: "baku.png" },
    { name: "Wapir", img: "blanpir.png" },
    { name: "Knuffiwuffi", img: "pufipatitas.png" },
    { name: "Schnuckiputz", img: "pufilindo.png" },
    { name: "Shunuckiwatz", img: "pufimaloso.png" },
    { name: "Frostina", img: "fristina.png" },
    { name: "Glazia", img: "granizia.png" },
    { name: "Dämona", img: "damona.png" },
{ name: "Walza", img: "cimbron.png" },
{ name: "Plattla", img: "pasodon.png" },
{ name: "Tschatscha", img: "ritma.png" },
{ name: "Sabba", img: "kieroto.png" },
{ name: "Nascha", img: "zampo.png" },
{ name: "Opa Gusto", img: "abuzampa.png" },
{ name: "Nimmersatt", img: "gargazampa.png" },
{ name: "Reisgreis", img: "aburroz.png" },
{ name: "Blanko", img: "nomeda.png" },
{ name: "Heita", img: "opti.png" },
{ name: "Freundsfalta", img: "enerposa.png" },
{ name: "Freundspalta", img: "eneposa.png" },
{ name: "Besserling", img: "mejorposa.png" },
{ name: "Feinschwing", img: "vivariposa.png" },
{ name: "Frohland", img: "felisonte.png" },
{ name: "Labiliese", img: "reversa.png" },
{ name: "Labilotte", img: "reversada.png" },
{ name: "Trickolaus", img: "tricotom.png" },
{ name: "Wunderwilli", img: "dadivo.png" },
{ name: "Knobold", img: "bolilete.png" },
{ name: "Pascha", img: "doblilete.png" },
{ name: "Papa Blitzig", img: "papa_rayo.png" },
{ name: "Onkel Omni", img: "tio_infinito.png" },
{ name: "Mama Aura", img: "mama_aura.png" },
{ name: "Tante Herzi", img: "tita_corazon.png" },
{ name: "Wirreführer", img: "noguio.png" },
{ name: "Schieba", img: "topami.png" },
{ name: "Autschi", img: "algio.png" },
{ name: "Peyn", img: "agujeto.png" },
{ name: "Agon", img: "machaka.png" },
{ name: "Miesmücke", img: "negatisquito.png" },
{ name: "Schlimskito", img: "deprisquito.png" },
{ name: "Juckmuck", img: "picorron.png" },
{ name: "Simpel", img: "nomeven.png" },
{ name: "Huschemen", img: "nostoy.png" },
{ name: "Nihilo", img: "nul_.png" },
{ name: "Fledalein", img: "encielago.png" },
{ name: "Flederhaus", img: "caserielago.png" },
{ name: "Flederemit", img: "ermicielago.png" },
{ name: "Argwoni", img: "suspicioni.png" },
{ name: "Renitoni", img: "pataletoni.png" },
{ name: "Onimich", img: "contrarioni.png" },
{ name: "Finstengu", img: "tengulecto.png" },
{ name: "Schmöka", img: "tengullon.png" },
{ name: "Negasus", img: "negasus.png" },
{ name: "Schandmähre", img: "pifiasus.png" },
{ name: "Schämon", img: "timidiablo.png" },
{ name: "Muzifer", img: "osademonio.png" },
{ name: "Graf Karies", img: "conde_caries.png" },
{ name: "König Knausa", img: "avarqueroso.png" },
{ name: "Maximalefiz", img: "diables.png" },
{ name: "Hustanie", img: "ejemtos.png" },
{ name: "Wehigel", img: "erizlor.png" },
{ name: "Stibitza", img: "cartepollo.png" },
{ name: "Wampsel", img: "rafaz.png" },
{ name: "Jammsel", img: "ayay.png" },
{ name: "Schlabat", img: "horterraro.png" },
{ name: "Dunkelfeder", img: "alarcion.png" },
{ name: "Möter", img: "cantonio.png" },
{ name: "Dobbelmann", img: "multiniche.png" },
{ name: "Sir Berus", img: "ser_bero.png" },
{ name: "Tropfi", img: "goto.png" },
{ name: "Don Densato", img: "sirimiri.png" },
{ name: "Zapfi", img: "copo.png" },
{ name: "Don Gelato", img: "ventisquero.png" },
{ name: "Gusstav", img: "coagulon.png" },
{ name: "Schnattalie", img: "reboca.png" },
{ name: "Nörgelika", img: "pilicajosa.png" },
{ name: "Tristine", img: "negatalia.png" },
{ name: "Pupsi", img: "cuesco.png" },
{ name: "Furzfürst", img: "peditum.png" },
{ name: "Floppo", img: "graciosno.png" },
{ name: "Kalaua", img: "hilarion.png" },
{ name: "Dörrte", img: "arruñona.png" },
{ name: "Glamourella", img: "belladona.png" },
{ name: "Eternia", img: "eterna.png" },
{ name: "Insomnina", img: "insomna.png" },
{ name: "Sandy", img: "morfea.png" },
{ name: "Noko", img: "noko.png" },
{ name: "Florinoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Aalbernd", img: "anjijila.png" },
{ name: "Laalaalaal", img: "tenongrio.png" },
{ name: "Urnakonda", img: "urnaconda.png" },
{ name: "Ätzardine", img: "pezqueroso.png" },
{ name: "Makrekel", img: "pezgativo.png" },
{ name: "Amokrele", img: "pezquiciado.png" },
{ name: "Dracki", img: "draqui.png" },
{ name: "Drachenfürst", img: "lord_dragon.png" },
{ name: "Azurdrache", img: "dragon_azur.png" },
{ name: "Tranatol", img: "ido.png" },
{ name: "Wirrtropf", img: "turdido.png" },
{ name: "Lungerhai", img: "pelluron.png" },
{ name: "Meermassler", img: "pringuron.png" },
{ name: "Prassa", img: "boquirroto.png" },
{ name: "Zauster", img: "yopago.png" },
{ name: "Labernase", img: "charlaton.png" },
{ name: "Bananase", img: "tochaplatano.png" },
{ name: "Kobramotz", img: "mandicoro.png" },
{ name: "Griesgrmba", img: "ciniserpe.png" },
{ name: "Schiriviper", img: "arfidio.png" },
{ name: "Viptor", img: "venocto.png" },
{ name: "Schattenato", img: "venoctoscuro.png" },
{ name: "Shogunyan", img: "shogunyan.png" },
{ name: "Komasura", img: "komasura.png" },
{ name: "Dandackel", img: "dandiniche.png" },
{ name: "Vati Blum", img: "abuflorido.png" },
{ name: "Gilgaros", img: "dorantuo.png" },
{ name: "Saphinyan", img: "zafinyan.png" },
{ name: "Smaranyan", img: "esmenyan.png" },
{ name: "Rubinyan", img: "rubinyan.png" },
{ name: "Topanyan", img: "topanyan.png" },
{ name: "Diamanyan", img: "diamanyan.png" },
{ name: "Glibbamanda", img: "babamandra.png" },
{ name: "Wabbelwutz", img: "termascino.png" },
{ name: "Kutterkahn", img: "bergantin.png" },
{ name: "Harleking", img: "animanstruo.png" },
{ name: "Phantasmurai", img: "fantasmurai.png" },
{ name: "Tarantutor", img: "tarantutor.png" },
{ name: "Dr. Kling", aliases: ["dr. kling", "dr kling", "doktor kling"], img: "dr._majarov.png" },
{ name: "McKraken", img: "mckraken.png" },
{ name: "McKraken", img: "mckraken_2.png" },
{ name: "Janusrad", img: "duoleta.png" },
{ name: "Flechtigall", img: "cantaderna.png" },
{ name: "Glotzmanda", img: "ojimandra.png" },
{ name: "Dunkelwutz", img: "jabalupo.png" },
{ name: "Käpt'n Karon", aliases: ["Käpt'n Karon", "Käptn Karon", "Kapitän Karon"], img: "estigio_vi.png" },
{ name: "Eklipsopath", img: "clipso.png" },
{ name: "Dr. Nogut", aliases: ["dr. nogut", "dr nogut", "doktor nogut"], img: "dr._sintripas.png" },
{ name: "Shogunhold", img: "terrormadura.png" },
{ name: "Tintrigant", img: "calarrupto.png" },
{ name: "Awolkalypso", img: "caldewok.png" },
{ name: "Gargaros", img: "gargantuo.png" },
{ name: "Ogralus", img: "cazamentires.png" },
{ name: "Orcanos", img: "demoniorco.png" },

];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "img/congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "Sind Sie sicher, dass Sie ausgehen wollen? Du würdest den ganzen Fortschritt verpassen.";
    }
});
