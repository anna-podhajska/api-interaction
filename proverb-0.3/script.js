function getProverb() {

$(document).ready(function() {
    $.ajax({
        url: "https://eda-te-reo.herokuapp.com/api/proverbs"
    }).then(function(data) {

     $('.pSource').html(data.source);
     $('.pTranslation').html(data.translation);

    //  random background color:
     var newColor = pickRandomColor();
     $("body").css("background-color",newColor);
      $(".pSource").css("color",newColor);
    // -------

    // update quote to twitter button like: "<quote>"<line feed>"<translation>"
    $(".buttonActions a").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + data.source + '"\n"' + data.translation + '"'));

    });
});

}


//  random background color function:

function pickRandomColor() {
  var colors= [
    "#333333",
    "#444444",
    "#666666",
    "#888888",
    "#999999",
    "222222"
  ]
  var colorIndex = Math.floor(Math.random()*colors.length);
  return colors[colorIndex];
}
