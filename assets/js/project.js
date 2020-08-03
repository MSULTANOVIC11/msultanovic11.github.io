(function ($) {

    $(function () {
        GIT_API_URL = 'https://api.github.com';



        jQuery.get(GIT_API_URL + "/users/maidsultanovic/repos", function (data) {
            console.log(data[0]["description"]);
        });


        //console.log(data[0]['name']);

        //console.log(data[0]["created_at"].substring(0, 4));

        // jQuery.get(data[0]["languages_url"], function (dataa) {
        //     console.log(dataa);
        // })

        //console.log(data[0]["description"]);


        var card = "<div class=\"card\"></div>";
        $("body#post#inner#ensemble-card").append(card);

        var img = "<img src=\"images/Gitlab.png\" alt=\"Avatar\" style=\"width:100%; height: 100%;\"></img>";
        $("card").append(img);

        var container = "<div class=\"container\"></div>";
        $("card").append(container);
        var title = "<h4><b>Titre_repo</b></h4>";
        var date = "<p class=\"fin\">Année</p>";
        var language = "<p class=\"fin2\"><span>Python</span> <span>API</span></p>";
        var githubLink = "<p><a href=\"https://github.com/MSULTANOVIC11/gitSync\" target=\"_blank\"><img style=\"width: 20%; height: 9%; position:absolute; right:2%;\" src=\"../msultanovic11.github.io/images/GitHub-Logos/GitHub_Logo.png\"></img></a></p>";
        var description = "<p>A script that use gitlab's API to create a repository for a new project. Used to automate the project creation</p>";

        $("container").append(title, date, language, githubLink, description);


    });



})(jQuery);
