<top-menu>

  <style>
    li {
      list-style-type: none;
      display: inline;
    }
  </style>

  <ul>
    <li each={ menu } >
      <a href="#{ dest }" class="nav { title.toLowerCase() }">{ title }</a>
    </li>
  </ul>

  <script>
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

  </script>

</top-menu>
