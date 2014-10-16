(function () {

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    ArticlesListView.prototype.template = Handlebars.compile($("#articles-list-tpl").html());
    ArticleView.prototype.template = Handlebars.compile($("#article-tpl").html());

    var service = new ArticlesService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute('articles/:id', function(id) {
            service.findById(parseInt(id)).done(function(article) {
                slider.slidePage(new ArticleView(article).render().$el);
            });
        });

        router.start();
    });





}());