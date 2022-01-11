var example = {
    name: 'Austin',
    age: 27,
    height: 6,
};

var timeblocks = [{
    hour: 9,
    ref: 0,
    value: '',
    hourdisp: '9 AM'
}, {
    hour: 10,
    ref: 1,
    value: '',
    hourdisp: '10 AM'
}];

console.log(timeblocks)
var array = [20, {
    hour: 1,
    ref: 1
}, 609, 'victor'];

console.log(array[1].hour);

for (i = 0; i < timeblocks.length; i++) {
    var div = $("<div>", { "class": "col-2 bg-info" }, { "type": "submit" });
    var input = $("<input>", { "class": "col-2 bg-info" }, { "type": "submit" });
    var button = $("<button>", { "class": "col-2 bg-info" }, { "type": "submit" }).text("save");

    $(".container").attr("class", "d-flex");
    $(".container").append(div);
    $(".container").append(input);
    $(".container").append(button)

}

// update the timeblocks array.value with the current input.val when save button is pushed
// save timeblocks to local.storage