function cl(x) {
    let y = "b" + x;
    if (document.getElementById(y).innerHTML == "") {
        document.getElementById(y).innerHTML = "O";
        let left = 0;
        for (let i = 1; i <= 9; i++) {
            let y = "b" + i;
            if (document.getElementById(y).innerHTML == "") {
                left = 1;
                break;
            }
        }
        if (left == 0) {
            document.getElementById('pop_up3').style.display = "flex";
            document.getElementById('rest').style.display = "none";
        }
        else if (left == 1) {
            let z = 0;
            let zz = "b" + z;
            let ch = 0;
            while (ch == 0) {
                z = Math.floor((Math.random() * 10) + 1);

                zz = "b" + z;
                if (z == 0 || z == 10 || document.getElementById(zz).innerHTML == "O" || document.getElementById(zz).innerHTML == "X") {
                    continue;
                }
                else {
                    ch = 1;
                    break;
                }
            }

            let c1 = document.getElementById('b1').innerHTML;
            let c2 = document.getElementById('b2').innerHTML;
            let c3 = document.getElementById('b3').innerHTML;
            let c4 = document.getElementById('b4').innerHTML;
            let c5 = document.getElementById('b5').innerHTML;
            let c6 = document.getElementById('b6').innerHTML;
            let c7 = document.getElementById('b7').innerHTML;
            let c8 = document.getElementById('b8').innerHTML;
            let c9 = document.getElementById('b9').innerHTML;
            let winnar=0;
            if ((c1 == "O" && c2 == "O" && c3 == "O") || (c4 == "O" && c5 == "O" && c6 == "O") || (c7 == "O" && c8 == "O" && c9 == "O") || (c1 == "O" && c4 == "O" && c7 == "O") || (c2 == "O" && c5 == "O" && c8 == "O") || (c3 == "O" && c6 == "O" && c9 == "O") || (c1 == "O" && c5 == "O" && c9 == "O") || (c3 == "O" && c5 == "O" && c7 == "O")) {
                document.getElementById('pop_up').style.display = "flex";
                document.getElementById('rest').style.display = "none";
                winnar=1;
            }
            if (ch == 1 && winnar==0) {
                document.getElementById(zz).innerHTML = "X";
                c1 = document.getElementById('b1').innerHTML;
                c2 = document.getElementById('b2').innerHTML;
                c3 = document.getElementById('b3').innerHTML;
                c4 = document.getElementById('b4').innerHTML;
                c5 = document.getElementById('b5').innerHTML;
                c6 = document.getElementById('b6').innerHTML;
                c7 = document.getElementById('b7').innerHTML;
                c8 = document.getElementById('b8').innerHTML;
                c9 = document.getElementById('b9').innerHTML;
            }
            if ((c1 == "X" && c2 == "X" && c3 == "X") || (c4 == "X" && c5 == "X" && c6 == "X") || (c7 == "X" && c8 == "X" && c9 == "X") || (c1 == "X" && c4 == "X" && c7 == "X") || (c2 == "X" && c5 == "X" && c8 == "X") || (c3 == "X" && c6 == "X" && c9 == "X") || (c1 == "X" && c5 == "X" && c9 == "X") || (c3 == "X" && c5 == "X" && c7 == "X")) {
                document.getElementById('pop_up2').style.display = "flex";
                document.getElementById('rest').style.display = "none";
            }

        }
    }
}

function click_button() {
    for (let i = 1; i <= 9; i++) {
        let z = "b" + i;
        document.getElementById(z).innerHTML = "";
    }
    // if(document.getElementById('pop_up').style.display == "flex"||document.getElementById('pop_up2').style.display == "flex"){
    //     document.getElementById('pop_up1').style.display = "none";
    //     document.getElementById('pop_up2').style.display = "none";
    //     document.getElementById('rest1').setAttribute('display','none');}



}
