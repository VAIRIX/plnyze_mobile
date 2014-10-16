var ArticlesListView = function () {

    var articles;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.setArticles();
    };

    this.setArticles = function() {
        var local = this;
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://www.plnyze.com/last_articles.json",
            /*url: "http://192.168.1.119:3000/last_articles.json",*/
            success: function(list){
                articles = list;
                local.render();
            },
            error: function(list,status,error){
                alert(list + "-" + status + "-" + error);
            }
        });
    };

    this.render = function() {
        this.$el.html(this.template(articles));
        return this;
    };

    this.initialize();

};

