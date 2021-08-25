Webcam.set({
    height: 300,
    width: 300,
    image_format: 'jpeg',
    jpeg_quality: 91
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(Sc){
        document.getElementById("result").innerHTML = '<img id="img_hd" src="'+Sc+'"/>';
    });
}

console.log("ML5."+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yb38UW-xV/model.json',ModelLoaded);

function ModelLoaded(){
    console.log("Model Loaded");
}
