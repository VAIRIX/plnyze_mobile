var ArticlesService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://www.plnyze.com/last_articles";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    };

    this.findById = function(id) {
        return  $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://www.plnyze.com/show_json/"+ id +".json",
            /*url: "http://192.168.1.119:3000/show_json/"+ id +".json",*/
            success: function(list){
                list
            },
            error: function(list,status,error){
                alert(list + "-" + status + "-" + error);
            }
        });
    }

};

