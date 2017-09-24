var btns = document.getElementsByTagName('table')[0].getElementsByClassName('btn');
var myreturns=[];
for ( var i = 0 ; i < btns.length ; i++ ) {
    if ( btns[i].href && ( btns[i].href.search("/share") >= 0 ) ) {
        var rawFile = new XMLHttpRequest();
        var myurl = btns[i].href.replace("share","export.json");
        rawFile.open("GET", myurl , false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    myreturns = myreturns.concat(allText);
                }
            }
        }  
        rawFile.send(null);
    }
}
var link = document.createElement('a');
link.download = "scenarios.json";
link.href = 'data:text/json;base64,' + btoa("[" + myreturns.join(",") + "]");
document.body.appendChild(link)
link.click();
