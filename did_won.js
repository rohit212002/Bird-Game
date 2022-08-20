let row1 = document.getElementById("one");
let row2 = document.getElementById("two");
let row3 = document.getElementById("three");
let row4 = document.getElementById("four");

function didWon() {

    // document.getElementById("your_moves").innerText = cntMoves;
    // document.getElementById("movesOne").style.opacity = 0;
    // add_css();

    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let cnt4 = 0;



    let tt1 = check(row1);
    let tt2 = check(row2);
    let tt3 = check(row3);
    let tt4 = check(row4);

    let sum = (tt1 + tt2 + tt3 + tt4);

    // console.log(sum);


    if (sum == 4) {

        document.getElementById("your_moves").innerText = cntMoves;
        document.getElementById("movesOne").style.opacity = 0;
        add_css();

        return;


    }



}


function check(a) {
    // let tempo = a.childNodes
    // console.log(tempo);

    let x1 = a.childNodes[1].childNodes[1];
    let x2 = a.childNodes[3].childNodes[1];
    let x3 = a.childNodes[5].childNodes[1];

    // console.log(x1);
    // console.log(x2);
    // console.log(x3);

    let id1 = x1.getAttribute("class");
    let id2 = x2.getAttribute("class");
    let id3 = x3.getAttribute("class");

    // console.log(id1);
    // console.log(id2);
    // console.log(id3);

    if (id1 == id2 && id1 == id3) {
        return 1;
    }
    return 0;




    // let xx1 = x1.getElementsByTagName("span");




}





function add_css() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'celebration.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);



}

function remove_css() {


    // let xx = document.getElementsByTagName('HEAD')[0].childNodes;
    let xx = document.getElementsByTagName('HEAD')[0].childNodes[4];
    // console.log(xx);
    if (xx != undefined) {
        xx.remove();
    }

    // document.getElementsByTagName('HEAD')[0].remove();

}





