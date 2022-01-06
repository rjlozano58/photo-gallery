var imageURLs = ["https://www.miramax.com/media/assets/Pulp-Fiction1.png", "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg", "https://upload.wikimedia.org/wikipedia/en/8/8b/Kingsman_The_Secret_Service_poster.jpg"];
for (let images of imageURLs) {
    $(".gallery").append("<img class='added-images' src='" + images + "'>");
}
$(".add").click(function() {
    $(".gallery").empty();
    var newImage = $(".picture-url").val();
        imageURLs.push(newImage);
        console.log(imageURLs);
        for (let images of imageURLs) {
            $(".gallery").append("<img class='added-images' src='" + images + "'>");
        }
});
$(".reset").click(function() {
    imageURLs = [];
    $(".gallery").empty();
});
$(".delete").click(function() {
    var arrayLength = imageURLs.length;
    var deletedMovieIndex = arrayLength - 1;
    imageURLs.splice(deletedMovieIndex);
    $(".gallery").empty();
    for (let images of imageURLs) {
        $(".gallery").append("<img class='added-images' src='" + images + "'>");
    }
});
