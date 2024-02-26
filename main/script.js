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