window.onload = setup;


function setup() {
    document.getElementById('inkmoms').addEventListener("keyup", handleKeyUp);
    document.getElementById('exmoms').addEventListener("keyup", handleKeyUp);
    document.getElementById('momssumma').addEventListener("keyup", handleKeyUp);
}

function handleKeyUp(event) {
    if (event.key === "Enter") {
        let answer = event.target.value;
        let inkMomsInput = document.getElementById("inkmoms")
        let exMomsInput = document.getElementById("exmoms")
        let momsSummaInput = document.getElementById("momssumma")
        if (inkMomsInput.value === answer) {
            let exMoms = answer * 0.8;
            let momsSumma = answer - exMoms;
            exMomsInput.value = exMoms;
            momsSummaInput.value = momsSumma;
        }

        else if (exMomsInput.value === answer) {
            console.log(answer)
            let inkMoms = answer * 1.25
            let momsSumma1 = inkMoms - answer;
            inkMomsInput.value = inkMoms;
            momsSummaInput.value = momsSumma1;

        }

    }
}


