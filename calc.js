function clr() {
    document.getElementById('tv').value = "";
}

function disp(val) {
    document.getElementById('tv').value += val;
}

function clr1() {
    let b = document.getElementById('tv').value;
    let c = b.slice(0, -1);
    document.getElementById('tv').value = c;
}

function ans() {
    try {
        let x = document.getElementById('tv').value;
        let y = eval(x);
        document.getElementById('tv').value = y;
    } catch (error) {
        document.getElementById('tv').value = "Error";
        setTimeout(function () {
            document.getElementById('tv').value = "";
        }, 1500);
    }
}
