const nav = `
      <ul class="nav nav-pills flex-nowrap">
        <li class="nav-link d-flex flex-nowrap">
          <a id="nav-projects" href="#">Projects</a></li>
        <li class="nav-link d-flex flex-nowrap">
          <a id="nav-about" href="#">About</a></li>
        <li class="nav-link d-flex flex-nowrap">
          <a id="nav-blog" href="#">Blog</a></li>
        <span class="d-flex flex-nowrap" style="font-size: 25px; color: darkgrey ">
          <li class="nav-item d-flex flex-nowrap">
            <a class="nav-link fab fa-linkedin" target="blank" href="https://www.linkedin.com/in/michaeldownssj"></a>
          </li>
          <li class="nav-item d-flex flex-nowrap">
            <a class="nav-link fab fa-github-square " target="blank" href="https://github.com/chindowns"></a>
          </li>
          <li class="nav-item d-flex flex-nowrap">
            <a class="nav-link fas fa-envelope-open-text " target="blank" href="mailto://michael@chindowns.com"></a>
          </li>
          <li class="nav-item d-flex flex-nowrap">
            <a class="nav-link far fa-file-pdf " target="blank" href="./assets/Michael_Downs-FullStack-Resume.pdf"></a>
          </li>
        </span>
      </ul>
`

$('#nav').html(nav)