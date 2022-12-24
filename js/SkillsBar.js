class SkillBar {
  constructor(percent, text) {
    this.percent = percent
    this.text = text
  }

  append_on(element) {
    $(element).append(`
      <div class="progress">
        <div class="bar" style="width: ${this.percent}%;">${this.percent}% ${this.text}</div>
      </div>
    `)
  }
}