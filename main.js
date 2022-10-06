function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(580, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#000000');
}

function modelLoaded() {
    console.log('PoseNet is Initialized!...')
}

function gotPoses() {
    
}