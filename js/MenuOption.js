class MenuOption {
  constructor(bi="bi-app", url, text) {
    this.bi = bi
    this.url = url
    this.text = text
  }

  append_on(element) {
    $(element).append(`
      <li class="option">
        <a href="${this.url}">
          <i class="bi ${this.bi}"></i>
          <span>${this.text}</span>
          <i class="bi bi-chevron-right"></i>
        </a>
      </li>
    `)
  }
}