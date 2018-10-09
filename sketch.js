let innerSections;
let counter;
let rotationRate;
let rotationAmount;
let shouldRotate;

function setup() {
    createCanvas(300, 300);
    innerSections = 10;
    counter = 1;
    rotationRate = 360;
    shouldRotate = true;
}

function draw() {
    rotationAmount = TWO_PI * ((counter % rotationRate) / rotationRate);

    translate(height / 2, width / 2);
    background(255);
    fill(0);

    stroke(0, 164, 243);
    makeArc(268, 6, 0, TWO_PI - 0.0001);

    if (shouldRotate) {
        rotate(rotationAmount);
    }
    makeArc(220, 16, PI / 4, PI / 4 + PI);
    makeArc(226, 4, PI / 4 + PI, PI / 4);
    if (shouldRotate) {
        rotate(-rotationAmount);
    }

    stroke(0, 97, 143);
    makeArc(200, 8, PI / 4 + PI, PI / 4);

    if (shouldRotate) {
        rotate(-rotationAmount * 2);
    }
    stroke(0, 31, 46);
    makeArc(140, 60, PI / 4 + PI, PI / 4);

    stroke(0, 85, 126);
    makeArc(160, 22, PI / 2, PI);
    if (shouldRotate) {
        rotate(rotationAmount * 2);
    }

    stroke(0, 166, 246);
    makeArc(125, 5, PI, PI / 2);

    showInnerSpinningParts();

    stroke(0, 162, 240);
    makeArc(50, 20, 0, TWO_PI);
    makeArc(0, 15, 0, TWO_PI);

    if (shouldRotate) {
        counter += 1;
        if (counter === rotationRate) {
            counter = 0;
        }
    }
}

function showInnerSpinningParts() {
    rotate(rotationAmount * 4);
    for (let i = 0; i < innerSections; i++) {
        if (i % 2 != 0) stroke(0);
        else stroke(0, 162, 240);
        makeArc(90, 20, ((TWO_PI / innerSections) * i), (TWO_PI / innerSections) * (i + 1));
    }
    rotate(-rotationAmount * 4);
}

function makeArc(arc_width_inner, width_, start, end) {
    for (let i = arc_width_inner + width_; i > arc_width_inner; i--) {
        arc(0, 0, i, i, start, end);
    }
}