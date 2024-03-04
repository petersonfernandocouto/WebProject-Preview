const Dia = document.getElementById("Day");
const Horas = document.getElementById("Hours")
const Minutos = document.getElementById("Minutes")
const Segundos = document.getElementById("Seconds")


const lacamentos = "01 dec 2024"

function countDown(){

    const DataLancamento = new Date(lacamentos);
    const ToDay = new Date()

    const SegcondsRemaining = (DataLancamento - ToDay)/1000;

    const DaysRemaining = Math.floor(SegcondsRemaining / 60 / 60 / 24);
    const HoursRemaining = Math.floor(SegcondsRemaining /60 / 60) %24;
    const MinutesRemaining = Math.floor(SegcondsRemaining  / 60) %60;
    const segTotal = Math.floor(SegcondsRemaining) %60;


    Dia.innerHTML = FormatoTempo(DaysRemaining) + "D"
    Horas.innerHTML = FormatoTempo(HoursRemaining) + "H"
    Minutos.innerHTML = FormatoTempo(MinutesRemaining) + "M"
    Segundos.innerHTML = FormatoTempo(segTotal) + "S"
}

function FormatoTempo( tempo ){
    return tempo < 10? `0${tempo}`: tempo;
}


countDown()
setInterval(countDown, 1000)




function VisualBox(selector){

    var box = document.querySelector(selector);
    box.classList.toggle("VisualBox");
    
}

function compraIngresso(){

    document.addEventListener('keydown', (event) => {

        var ticket1 = document.getElementById("Thursday")
        var ticket2 = document.getElementById("Friday")
        var ticket3 = document.getElementById("Saturday")
        var ticket4 = document.getElementById("Sunday")

        var code = event.code;
        if(code == "Digit1" || code == "Numpad1"){

            ticket1.classList.toggle("colorTicket")
            ticket2.classList.remove("colorTicket")
            ticket3.classList.remove("colorTicket")
            ticket4.classList.remove("colorTicket")
        }

        if(code == "Digit2" || code == "Numpad2"){

            ticket1.classList.remove("colorTicket")
            ticket2.classList.toggle("colorTicket")
            ticket3.classList.remove("colorTicket")
            ticket4.classList.remove("colorTicket")
        }

        if(code == "Digit3" || code == "Numpad3"){

            ticket1.classList.remove("colorTicket")
            ticket2.classList.remove("colorTicket")
            ticket3.classList.toggle("colorTicket")
            ticket4.classList.remove("colorTicket")
        }

        if(code == "Digit4" || code == "Numpad4"){

            ticket1.classList.remove("colorTicket")
            ticket2.classList.remove("colorTicket")
            ticket3.classList.remove("colorTicket")
            ticket4.classList.toggle("colorTicket")
        }
    }, false)
}



compraIngresso();