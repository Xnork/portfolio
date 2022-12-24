class CardProject {
  constructor(background, url, title, text, tools="HTML, CSS, JavaScript") {
    this.url = url
    this.title = title
    this.text = text
    this.background = background
    this.tools = tools
  }

  append_on(element) {
    $(element).append(`
      <div class="card-project">
        <div class="card-image" style="background-image: url(${this.background});"></div>
        <div class="card-content">
          <h1 class="card-title">${this.title}</h1>
          <footer class="footer-tools-draft">${this.tools}</footer>
          <p class="card-text"> ${this.text} </p>
        </div>
        <div class="card-action">
          <a class="card-link" href="${this.url}">
            <i class="bi bi-github"></i>
            <span>Visualizar</span>
          </a>
        </div>
      </div>
    `)
  }
}