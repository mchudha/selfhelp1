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
    let time = Number(timeRaw[0]) + Number(timeRaw[1]) / 60;
    if (time <= 6) return "night";
    if (time <= 9) return "early morning";
    if (time <= 12) return "late morning";
    if (time <= 15) return "early afternoon";
    if (time <= 18) return "late afternoon";
    if (time <= 21) return "evening";
    return "night";
};

const adviceBox = document.getElementById("advice");

function mainloop() {
    adviceBox.innerHTML = "";
    if (surveyComplete()) {
        let adviceItems = [];
        let time = parseTime();
        if (evaluateGroup("threemeals")) {
            adviceItems.push({
                "early morning": "A healthy breakfast is a great start to a great day!",
                "late morning": "A healthy breakfast is a great start to a great day!",
                "early afternoon": "Good on you for eating a healthy lunch!",
                "late afternoon": "Good on you for eating a healthy lunch!",
                "evening": "Amazing job - you deserve to treat yourself.",
                "night": "I'll bet you can eat just as healthy tomorrow!"
            }[time]);
        } else {
            adviceItems.push({
                "early morning": "Try to get a healthy breakfast in today - make sure to include some fruit.",
                "late morning": "Cooking a quick lunch for yourself is a great break between tasks.",
                "early afternoon": "It's a great time for a healthy snack.",
                "late afternoon": "If dinner's not too nutritious, maybe prepare some veggies as a side.",
                "evening": "It's best not to eat too close to bed, but a light healthy snack never hurt anybody.",
                "night": "Craving a midnight snack? Remember to keep it light."
            }[time]);
        };
        if (evaluateGroup("twocups")) {
            adviceItems.push({
                "early morning": "Great job staying hydrated, keep it up!",
                "late morning": "Keep drinking water!",
                "early afternoon": "Don't forget water with your lunch!",
                "late afternoon": "Keep drinking water!",
                "evening": "Don't forget to hydrate with your dinner!",
                "night": "Drink a bit of water before bed!"
            }[time]);
        } else {
            adviceItems.push({
                "early morning": "A glass of water in the morning can help you wake up.",
                "late morning": "Remember to stay hydrated throughout the day!",
                "early afternoon": "Remember to stay hydrated throughout the day!",
                "late afternoon": "Remember to stay hydrated throughout the day!",
                "evening": "A cup of tea is a great choice for the evening.",
                "night": "There's always tomorrow to stay hydrated."
            }[time]);
        };
        if (evaluateGroup("focused")) {
            adviceItems.push({
                "early morning": "Good on you - strong start to the day!",
                "late morning": "Keep it up!",
                "early afternoon": "A break would do you good - gotta revitalize for a productive afternoon!",
                "late afternoon": "Keep it up!",
                "evening": "Good on you, but remember to take time to rest and relax",
                "night": "Remember to get to bed soon - you can lock in in the morning."
            }[time]);
        } else {
            adviceItems.push({
                "early morning": "Starting the day strong is very important. Making your bed in the morning is an excellent start.",
                "late morning": "Using a \"productivity ladder\" can help you stay productive. Start small, then work your way up.",
                "early afternoon": "Take a break while the sun's high in the sky - maybe go for a walk, clear your head.",
                "late afternoon": "Getting chores done when you get home is an excellent way to end the day satisfied.",
                "evening": "Good on you for winding down. Just remember to take a valuable break - get recovery time, not wasted time.",
                "night": "Tomorrow is another day. Set a goal to focus hard tomorrow even if you didn't today."
            }[time]);
        };
        if (evaluateGroup("good")) {
            adviceItems.push({
                "early morning": "Someone woke up on the right side of the bed.",
                "late morning": "Good work!",
                "early afternoon": "Happy for you.",
                "late afternoon": "Now could be a good time to get some exercise",
                "evening": "Now could be a good time to get some exercise",
                "night": "Sleep well!"
            }[time]);
        } else {
            adviceItems.push({
                "early morning": "If you have the time, getting your body moving with a walk will do you some good.",
                "late morning": "Take it easy - make sure you're comfortable.",
                "early afternoon": "Take it easy - make sure you're comfortable.",
                "late afternoon": "Stretching will get your blood flowing, helping your body and mind to feel better.",
                "evening": "Perhaps an early night would be best.",
                "night": "Sleep it off - let your body naturally recover."
            }[time]);
        };
        adviceBox.innerHTML = "<ul><li>" + adviceItems.join("</li><li>") + "</li></ul>";
    };
    requestAnimationFrame(mainloop);
};
requestAnimationFrame(mainloop);