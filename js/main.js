//teclas
const teclaCero = document.querySelector("#cero")
const teclaUno = document.querySelector("#uno")
const teclaDos = document.querySelector("#dos")
const teclaTres = document.querySelector("#tres")
const teclaCuatro = document.querySelector("#cuatro")
const teclaCinco = document.querySelector("#cinco")
const teclaSeis = document.querySelector("#seis")
const teclaSiete = document.querySelector("#siete")
const teclaOcho = document.querySelector("#ocho")
const teclaNueve = document.querySelector("#nueve")
const teclaMas = document.querySelector("#mas")
const teclaMenos = document.querySelector("#menos")
const teclaPor = document.querySelector("#por")
const teclaIgual = document.querySelector("#igual")
const teclaPunto = document.querySelector("#punto")

//resultado
const resultado = document.querySelector("#pantallaResultado")

//teclas operacones
const teclaSuma = document.querySelector("#mas")
const teclaResta = document.querySelector("#menos")
const teclaMultiplicacion = document.querySelector("#por")
const teclaDivision = document.querySelector("#entre")

//tecla eliminar
const teclaReset = document.querySelector("#reset")
const teclaDel = document.querySelector("#del")

//tecla voz
const voice = document.querySelector("#voice")

eventListeners()

function eventListeners(){
    teclaCero.addEventListener("click", cero)
    teclaUno.addEventListener("click", uno)
    teclaDos.addEventListener("click", dos)
    teclaTres.addEventListener("click", tres)
    teclaCuatro.addEventListener("click", cuatro)
    teclaCinco.addEventListener("click", cinco)
    teclaSeis.addEventListener("click", seis)
    teclaSiete.addEventListener("click", siete)
    teclaOcho.addEventListener("click", ocho)
    teclaNueve.addEventListener("click", nueve)
    teclaIgual.addEventListener("click", igual)

    //listeners de operaciones
    teclaSuma.addEventListener("click", suma)
    teclaResta.addEventListener("click", resta)
    teclaMultiplicacion.addEventListener("click", multiplicacion)
    teclaDivision.addEventListener("click", division)
    teclaPunto.addEventListener("click", punto)

    //borrar todo
    teclaReset.addEventListener("click", reset)

    //borrar ultimo numero
    teclaDel.addEventListener("click",borrarUltimo)

    //operacion por voz
    voice.addEventListener("click", operacionVoz)
}

let memoria = []
function punto(){
    memoria.push(teclaPunto.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}

function division(){
    memoria.push(teclaDivision.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}

function multiplicacion(){
    memoria.push(teclaMultiplicacion.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}

function resta(){
    memoria.push(teclaResta.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}

function suma(){
    memoria.push(teclaSuma.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}

function cero(){
    memoria.push(teclaCero.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function uno(){
    memoria.push(teclaUno.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function dos(){
    memoria.push(teclaDos.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function tres(){
    memoria.push(teclaTres.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function cuatro(){
    memoria.push(teclaCuatro.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function cinco(){
    memoria.push(teclaCinco.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function seis(){
    memoria.push(teclaSeis.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function siete(){
    memoria.push(teclaSiete.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function ocho(){
    memoria.push(teclaOcho.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}
function nueve(){
    memoria.push(teclaNueve.value)
    console.log(memoria)
    resultado.innerHTML = memoria.join("")
}


//operaciones
function igual(){
    let result = eval(resultado.innerHTML)
    resultado.innerHTML = result
    memoria =[]
    memoria.push(result)
}

//funcion reset
function reset(){
    memoria = []
    resultado.innerHTML = 0
    console.log(memoria)
}

//borrar ultimo
function borrarUltimo(){
    memoria.pop()
    resultado.innerHTML = memoria.join("")
    if(resultado.innerHTML = " "){
        resultado.innerHTML = 0
    }
}

function operacionVoz(){
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.start()
    recognition.onstart = function(){
        resultado.innerHTML = "escuchando..."
    }
    recognition.onspeechend = function(){
        recognition.stop()
        
    }
    recognition.onresult = function(e){
        const res = e.results[0][0].transcript
        let resultVoz = eval(res)
        resultado.innerHTML = resultVoz
        memoria.push(resultVoz)
    }
    
}