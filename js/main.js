riot.tag('built-with', '<div class="bw"><img riot-src="{this.src}" alt="{this.componentTitle}"></div>', '.bw { position: absolute; bottom: 10px; right: 10px; }', function(opts) {

    this.src = 'http://riotjs.com/img/logo/riot60x.png'
    this.componentTitle = 'riot logo'

  
});

riot.tag('content', '<div class="content">{this.content || \'no content yet\'}</div>', function(opts) {

    switch (opts.content) {
      case 'about':
        this.content = 'About Alvin Milton'
        break;

      case 'contact':
        this.content = 'contact page and logic'
        break;

      case 'work':
        this.content = 'Portfolio'
        break;

      default:
        this.content = 'A smattering of my writings'
    }

    this.on('mount', function() {


    })

    this.on('update', function() {

    })

  
});

riot.tag('page-header', '<header><h2>{this.componentTitle}</h2></header>', function(opts) {

    this.componentTitle = 'first riot app';

  
});

riot.tag('site-meta', '<meta http-equiv="X-UA-Compatible" content="IE=edge"><title>testing Riot JS</title><link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.5/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha256-IF1P9CSIVOaY4nBb5jATvBGnxMn/4dB9JNTLqdxKN9w= sha512-UsfHxnPESse3RgYeaoQ7X2yXYSY5f6sB6UT48+F2GhNLqjbPhtwV2WCUQ3eQxeghkbl9PioaTOHNA+T0wNki2w==" crossorigin="anonymous"><link rel="stylesheet" href="css/style.css">', function(opts) {

});
riot.tag('top-menu', '<ul><li each="{menu}" ><a href="#{dest}" class="nav {title.toLowerCase()}">{title}</a></li></ul>', 'li { list-style-type: none; display: inline-block; padding: 10px; background-color: #eee; }', function(opts) {
    this.menu = [
      {
        title: 'Writings',
        dest: 'writings'
      }, {
        title: 'About',
        dest: 'about'
      }, {
        title: 'Work',
        dest: 'work'
      }, {
        title: 'Contact',
        dest: 'contact'
      }
    ]

  
});

