
let main_btn = document.getElementById("main_btn");


let restart = sessionStorage.getItem("restart")


function randamising() {



    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];



    let temp;

    // let dd1 = document.getElementById("10");
    // let ss1 = document.getElementById("6");
    // let dd2 = document.getElementById("11");
    // let ss2 = document.getElementById("9");


    // temp = dd1.innerHTML;
    // dd1.innerHTML = ss1.innerHTML;
    // ss1.innerHTML = temp;

    // temp = ss1.getAttribute("class");


    // ss1.setAttribute("class", dd1.getAttribute("class"));
    // dd1.setAttribute("class", temp);

    // temp = dd2.innerHTML;
    // dd2.innerHTML = ss2.innerHTML;
    // ss2.innerHTML = temp;

    // temp = ss2.getAttribute("class");

    // ss2.setAttribute("class", dd2.getAttribute("class"));
    // dd2.setAttribute("class", temp);

    let ind = 1;

    let mappp = new Map();

    for (let i = 0; i < 9; i++) {
        mappp.set(arr[i], false);
    }

    // console.log(mappp);

    let num = 10;
    while (num--) {
        let xxx = 10;

        while (1) {

            let x = Math.floor(Math.random() * 9);
            let y = Math.floor(Math.random() * 9);

            if (mappp.get(arr[x]) == false && mappp.get(arr[y]) == false && x != y) {
                mappp.set(arr[x], true);
                mappp.set(arr[y], true);


                let to_swap1 = document.getElementById(arr[x]);
                let to_swap2 = document.getElementById(arr[y]);

                // console.log(x, y);
                // console.log(arr[x], arr[y]);


                // console.log(to_swap1.innerHTML);
                // console.log(to_swap2.innerHTML);



                temp = to_swap1.innerHTML;
                to_swap1.innerHTML = to_swap2.innerHTML;
                to_swap2.innerHTML = temp;



                break;
            }

            if (xxx == 0) {
                break;
            }
            xxx--;
        }
    }

    let dd1 = document.getElementById("10");
    let ss1 = document.getElementById("6");
    let dd2 = document.getElementById("11");
    let ss2 = document.getElementById("9");


    temp = dd1.innerHTML;
    dd1.innerHTML = ss1.innerHTML;
    ss1.innerHTML = temp;

    // console.log(dd1.innerHTML);
    // console.log(ss1.innerHTML);


    temp = ss1.getAttribute("class");

    ss1.setAttribute("class", dd1.getAttribute("class"));
    dd1.setAttribute("class", temp);

    temp = dd2.innerHTML;
    dd2.innerHTML = ss2.innerHTML;
    ss2.innerHTML = temp;

    temp = ss2.getAttribute("class");

    ss2.setAttribute("class", dd2.getAttribute("class"));
    dd2.setAttribute("class", temp);


    remove_css();

}



main_btn.addEventListener("click", () => {

    sessionStorage.setItem("restart", "true")
    location.reload()

})

window.onload = () => {
    if (restart) {
        randamising();
        sessionStorage.clear()
    }
};