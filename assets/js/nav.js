const nav = `
      <ul class="nav nav-pills">
        <li class="nav-link">
          <a id="nav-projects" href="#">Projects</a></li>
        <li class="nav-link">
          <a id="nav-about" href="#">About</a></li>
        <li class="nav-link">
          <a id="nav-blog" href="#">Blog</a></li>
        <span class="d-flex flex-nowrap" style="font-size: 25px; color: darkgrey ">
          <li class="nav-item">
            <a class="fab fa-linkedin" target="blank" href="https://www.linkedin.com/in/michaeldownssj" SameSite=None;Secure ></a>
          </li>
          <li class="nav-item">
            <a class="fab fa-github-square" target="blank" href="https://github.com/chindowns" SameSite=None;Secure ></a>
          </li>
          <li class="nav-item">
            <a class="fas fa-envelope" target="blank" href="mailto://michael@chindowns.com" SameSite=None;Secure ></a>
          </li>
          <li class="nav-item">
            <a class="far fa-file-pdf" target="blank" href="./assets/Michael_Downs-FullStack-Resume.pdf" SameSite=None;Secure ></a>
          </li>
        </span>
      </ul>
`

$('#nav').html(nav)