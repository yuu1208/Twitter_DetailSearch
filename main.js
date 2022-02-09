let t_id;
    let t_since;
    let t_until;
    let t_word;
    let t_type = "";
    
    let search_url = "https://twitter.com/search?q=";

    let result;

$(function() {
    console.log("[INFO] " + getDay() + " Starting...");
    console.log("[INFO] done!");
});

function getDay() {
    var dt = new Date();
            var y = dt.getFullYear();
            var m = ("00" + (dt.getMonth()+1)).slice(-2);
            var d = ("00" + dt.getDate()).slice(-2);
            var r = y + "-" + m + "-" + d;
            return r;
}

function run() {
    if(!form.id.value) {
        alert('[ERROR] Search Failed.');
        console.log("[WARN] User ID is Empty.");
        return false;
    }
    
    else {

        let t_id = form.id.value;
        let t_word = form.word.value;

        let t_since = form.since.value;
        let t_until = form.until.value;

        if(form.since.value == "") {
            t_since = "2000-01-01";
        }
        if(form.until.value == "") {
            t_until = getDay();
        }

        console.log("[INFO] Input data:\n   ID:" + t_id + "\nSINCE:" + t_since + "\nUNTIL:" + t_until + "\n WORD:" + t_word);

        console.log("[INFO] Preparting...");

        let result = search_url + "from:" + t_id + "%20since:" + t_since + "%20until:" + t_until + " " + t_word;

        console.log("[INFO] Completed!\n" + result);

        window.open(result,'_blank');

    }
}