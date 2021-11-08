prediction_1="";






Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image"src="' + data_uri + '"/>';
    });
}
console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WtEerXjyA/model.json', modelLoaded);

function modelLoaded() {
    console.log(modelLoaded);
}

function speak() {
    var synth = window.speachSynthisis;
    speak_data_1 = "the first prediciton is" + prediction_1;
    
    var utter_this = newSpeakSynthisisUtterance(speak_data_1);
    synth.speak(utter_this);
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        

    } else {
        console.log(results);

        document.getElementById("emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name").innerHTML = results[1].label;

        prediction_1 = results[0].label;
        

        speak();

        if (results[0].label == "thumbs up") {

            document.getElementById("update_emoji").innerHTML = "&#128077; ";
        }
        if (results[0].label == "perfect") {

            document.getElementById("update_emoji").innerHTML = "&#128076";

        }

        if (results[0].label == "peace") {

            document.getElementById("update_emoji").innerHTML = " &#9996 ";

        }

       
    }
}