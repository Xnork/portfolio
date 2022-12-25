class HireCard {
  constructor(last_price, price, title, text) {
    this.last_price = last_price
    this.price = price
    this.title = title
    this.text = text
  }
  append_on(element) {
    $(element).append(`
      <div class="hire">
        <h1>${this.title}</h1>
        <p>${this.text}</p>
        <div class="price-area">
          <span class="last-hire-price">R$ ${this.last_price}</span>
          <span class="hire-price">12x R$ ${this.price}</span>
        </div>
        <a href="#" class="hire-buy">Comprar</a>
      </div>
    `)
  }
}