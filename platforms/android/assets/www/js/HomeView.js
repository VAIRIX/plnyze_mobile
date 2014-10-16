var HomeView = function (service) {
    var articlesListView;

    this.initialize = function (articles) {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        articlesListView = new ArticlesListView();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(articlesListView.$el);
        return this;
    };

    this.initialize();
}

function renderHomeView() {
    $('body').html(homeTpl());
}