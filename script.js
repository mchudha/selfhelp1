const between = x => a => b => x >= a && x <= b;

const names = ["threemeals", "twocups", "focused", "good"];
function evaluateGroup(name) {
    let options = document.getElementsByClassName(name);
    return options[0].checked;
};
function surveyComplete() {
    let complete = true;
    for (name in names) {
        let sectionComplete = false;
        for (input in document.getElementsByClassName(names[name])) sectionComplete ||= document.getElementsByClassName(names[name])[input].checked;
        complete &&= sectionComplete;
    };
    return !!complete;
};
function parseTime() {
    let timeRaw = document.getElementById("timeofday").value.split(":");
    let time = Number(timeRaw[0]) + Number(timeRaw[1]);
    if (time <= 6) return "night";
    if (time <= 9) return "early morning";
    if (time <= 12) return "late morning";
    if (time <= 15) return "early afternoon";
    if (time <= 18) return "late afternoon";
    if (time <= 21) return "evening";
    return "evening";
};

const adviceBox = document.getElementById("advice");

function mainloop() {
    adviceBox.innerHTML = "";
    if (surveyComplete) {
        let adviceItems = [];
        let time = parseTime();
        if (evaluateGroup("threemeals")) {
            
        } else {
            adviceItems.push({
                "early morning": "Try to get a healthy breakfast in today - make sure to include some fruit",
                "late morning": "Cooking a quick lunch for yourself is a great break between tasks",
                "early afternoon": "It's a great time for a healthy snack",
                "late afternoon": "If dinner's not too nutritious, maybe prepare some veggies as a side",
                "evening": "It's best not to eat too close to bed, but a light healthy snack never hurt anybody",
                "night": "Craving a midnight snack? Remember to keep it light"
            }[time]);
        };
        if (evaluateGroup("twocups")) {
            
        } else {
            adviceItems.push({
                "early morning": "A glass of water in the morning can help you wake up",
                "late morning": "Cooking a quick lunch for yourself is a great break between tasks",
                "early afternoon": "It's a great time for a healthy snack",
                "late afternoon": "If dinner's not too nutritious, maybe prepare some veggies as a side",
                "evening": "It's best not to eat too close to bed, but a light healthy snack never hurt anybody",
                "night": "Craving a midnight snack? Remember to keep it light"
            }[time]);
        };
        if (evaluateGroup("focused")) {
            
        } else {
            adviceItems.push({
                "early morning": "Try to get a healthy breakfast in today - make sure to include some fruit",
                "late morning": "Cooking a quick lunch for yourself is a great break between tasks",
                "early afternoon": "It's a great time for a healthy snack",
                "late afternoon": "If dinner's not too nutritious, maybe prepare some veggies as a side",
                "evening": "It's best not to eat too close to bed, but a light healthy snack never hurt anybody",
                "night": "Craving a midnight snack? Remember to keep it light"
            }[time]);
        };
        if (evaluateGroup("good")) {
            
        } else {
            adviceItems.push({
                "early morning": "Try to get a healthy breakfast in today - make sure to include some fruit",
                "late morning": "Cooking a quick lunch for yourself is a great break between tasks",
                "early afternoon": "It's a great time for a healthy snack",
                "late afternoon": "If dinner's not too nutritious, maybe prepare some veggies as a side",
                "evening": "It's best not to eat too close to bed, but a light healthy snack never hurt anybody",
                "night": "Craving a midnight snack? Remember to keep it light"
            }[time]);
        };
        adviceBox.innerHTML = "<ul><li>" + adviceItems.join("</li><li>") + "</li></ul>";
    };
    requestAnimationFrame(mainloop);
};
requestAnimationFrame(mainloop);