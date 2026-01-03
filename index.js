let voltValue;
let Eo;
let R = 8.314; // J/(mol·K)
let F = 96485; // C/mol
let T = 298; // K  
let Ln10 = Math.log(10);



document.getElementById("mySubmit").onclick = function() {
    voltValue = parseFloat(document.getElementById("voltInput").value);
    Eo = parseFloat(document.getElementById("Eo").value);
    document.getElementById("pHtext").textContent = calculatePH(voltValue, Eo);
}

function calculatePH(voltValue, Eo) {
    if (voltValue < 0) {
        document.getElementById("Note").textContent = "Please enter a possible voltage value, the range is between 0.828 & 0.";
    } else {
        document.getElementById("Note").textContent = "";
        let pH = Eo - voltValue / 0.05916;
        return pH.toFixed(2);
    }
}