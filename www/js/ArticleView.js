var ArticleView = function(article) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(article));
        return this;
    };

    this.initialize();

};