function calc_P_ohm() {
    let voltaje_P = parseFloat(document.getElementById("voltaje_P").value);
    let corriente_P = parseFloat(document.getElementById("corriente_P").value);
    const P_ohm = voltaje_P * corriente_P;
    let resultado_P = P_ohm.toFixed(2);
    document.getElementById("resultado_P").innerHTML = "P = " + resultado_P + " [W]";
}

function calc_res_ohm() {
    let voltaje_R = parseFloat(document.getElementById("voltaje_R").value);
    let corriente_R = parseFloat(document.getElementById("corriente_R").value);
    const res_ohm = voltaje_R / corriente_R;
    let resultado_R = res_ohm.toFixed(2);
    document.getElementById("resultado_R").innerHTML = "R = " + resultado_R + " [Ohm]";
}

function calc_I_ohm() {
    let voltaje_I = parseFloat(document.getElementById("voltaje_I").value);
    let resistencia_I = parseFloat(document.getElementById("resistencia_I").value);
    const I_ohm = voltaje_I / resistencia_I;
    let resultado_I = I_ohm.toFixed(2);
    document.getElementById("resultado_I").innerHTML = "I = " + resultado_I + " [A]";
}

function calc_V_ohm() {
    let resistencia_V = parseFloat(document.getElementById("resistencia_V").value);
    let corriente_V = parseFloat(document.getElementById("corriente_V").value);
    const V_ohm = resistencia_V * corriente_V;
    let resultado_V = V_ohm.toFixed(2);
    document.getElementById("resultado_V").innerHTML = "V = " + resultado_V + " [V]";
}
