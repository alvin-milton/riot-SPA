<content>
  <div class="content">{ this.content || 'no content yet' }</div>

  <script>

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
      // since I'm remounting the component over and over, this functions like update
      // console.log('updated')
    })

    this.on('update', function() {
      // console.log('updated')
    })

  </script>

</content>
