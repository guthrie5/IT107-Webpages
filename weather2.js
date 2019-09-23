var weather2 = {
    temperature: 70,
    conditions: "rainy.",
    sunriseTime: "7:01 AM",
    sunsetTime: "8:00 PM.",
    highTemperatures: [84, 80, 86, 80, 90, 91],
    lowTemperatures: [54, 54, 64, 57, 68, 66],
}

var highaverage = (weather2.highTemperatures[0] + weather2.highTemperatures[1] + weather2.highTemperatures[2] + weather2.highTemperatures[3] + weather2.highTemperatures[4] + weather2.highTemperatures[5]) / 6;
var lowaverage = (weather2.lowTemperatures[0] + weather2.lowTemperatures[1] + weather2.lowTemperatures[2] + weather2.lowTemperatures[3] + weather2.lowTemperatures[4] + weather2.lowTemperatures[5]) / 6;
var highaveragerounded = Math.round(highaverage);
var lowaveragerounded = Math.round(lowaverage);

console.log("It is currently", weather2.temperature, "degrees outside and", weather2.conditions, "The sun rose at", weather2.sunriseTime, "and will set tonight at", weather2.sunsetTime);
console.log("The high temperature for today is", weather2.highTemperatures[0], "and the low temperature for today will be", weather2.lowTemperatures[0]);
console.log("The average high temperature for this week is", highaveragerounded, "and the average low temperature for this week is", lowaveragerounded);