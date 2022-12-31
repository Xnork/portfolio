const load_projects_card = () => {
  let projects = [
    {url: '#', background: 'https://github.com/Xnork/BlogExemple-v2/blob/main/screenshots/1.png?raw=true',
    title: 'Blog v1', text: 'Este blog é simples, mas alguns conceitos nele presente favorece a responsividade do site para ambos os dispositívos.'},
    {url: '#', background: 'https://github.com/Xnork/xnork-blog-site/blob/main/screenshots/2022-08-21-113855_1360x768_scrot.png?raw=true',
    title: 'Blog v2 - Com posts', text: 'Este é um dos projetos bem feito, que dediquei focar em layouts e estilo do site. Sendo um blog simples, pode ser usado como base para desenvolver algo novo.'},
    {url: '#', background: 'https://github.com/Xnork/SDL2-Platform-Game-Learning/blob/main/assets/screenshots/1.png?raw=true',
    title: 'Load TileMap System', text: 'Um sistema simples de carregar um TileMap de IDs de um Array, projeto simples para entender alguns conceitos.', tools: 'C++, SDL2'},
    {url: '#', background: 'https://github.com/Xnork/RocketSimulator/blob/main/data/screenshots/2.png?raw=true',
    title: 'Rocket Simulation', text: 'Simulação de foguete usando a equação da lei da gravitação universal de Newton. O Projeto conta com um sistema de partículas e traçamento de orbita.', tools: 'C++, SDL2'},
    {url: '#', background: 'https://github.com/Xnork/SDL2-2D-Game-Plataform/blob/main/prints/image_2.png?raw=true',
    title: 'Random World System', text: 'Um mundo aleatório é gerado, conta com sistema de câmera, colisão, gravidade e um sistema de geração de minérios.', tools: 'C++, SDL2'},
    {url: '#', background: 'https://github.com/Xnork/SDL2-Load-TMX-From-Tiled/blob/main/data/screenshots/2.png?raw=true',
    title: 'TileMap TMX Loader', text: 'Um sistema de carregar o TileMap de um arquivo XML (TMX), o projeto conta com um sistema de carregar o mapa a partir de um array de 1 dimensão.', tools: 'C++, SDL2, XML'},
    {url: '#', background: 'https://github.com/Xnork/ProgressBar/blob/main/screenshots/1-fix.png?raw=true',
    title: 'Progress Bar Library', text: 'Uma simples "progress bar" usando conceitos SOLID, para fazer uma aplicação escalável e de fácil manutenção.', tools: 'C++'},
    {url: '#', background: 'https://github.com/Xnork/TODO-List-Cpp/blob/main/data/screenshots/3.png?raw=true',
    title: 'To-Do List', text: 'Um sistema de tarefas com banco de dados, ele armazena as informações em uma banco de dados e tem uma interface simples.', tools: 'C++, ncurses'}
  ]
  
  if($('.cards').length) {
    projects.map((project) => {
      let card = new CardProject(project.background, project.url, project.title, project.text, project.tools)
      card.append_on('.cards')
    })
  }
}

const load_skills_bar = () => {
  let skills = [
    {percent: '98', text: '- C++'},
    {percent: '94', text: '- C'},
    {percent: '76', text: '- Python3'},
    {percent: '34', text: '- SQL'},
    {percent: '79', text: '- JavaScript'},
    {percent: '83', text: '- SDL2'},
    {percent: '47', text: '- ReactJS'},
    {percent: '89', text: '- CSS'},
    {percent: '88', text: '- HTML'},
    {percent: '34', text: '- Rust'},
    {percent: '40', text: '- Assembly'},
    {percent: '52', text: '- Lua'},
    {percent: '50', text: '- TypeScript'},
    {percent: '62', text: '- Java'}
  ]
  if($('.bars').length) {
    skills.map((skill) => {
      let bar = new SkillBar(skill.percent, skill.text)
      bar.append_on('.bars')
    })
  }
}
const load_menu_option = () => {
  let options = [
    {bi: 'bi-house', url: '/portfolio', text: 'Home'},
    {bi: 'bi-newspaper', url: '#', text: 'Blog (em breve)'},
    {bi: 'bi-credit-card', url: '/portfolio/hire', text: 'Contratar'},
    {bi: 'bi-chat-dots', url: '/portfolio/contact', text: 'Contato'},
    {bi: 'bi-person-vcard', url: '/portfolio/certificate', text: 'Certificados'},
  ]

  if($('.side-menu .options').length) {
    options.map((menu_option) => {
      let option = new MenuOption(menu_option.bi, menu_option.url, menu_option.text)
      option.append_on('.side-menu .options')
    })
  }
}

const load_hire_cards = () => {
  let cards = [
    {title: 'Básico', last_price: 600, price: 39, 
    text: 'Um site simples que seu propósito é apenas divulgar algo, com propósitos simples, onde não deve ter solicitações de uso de banco de dados ou mais de 4 páginas.'},
    {title: 'Pro', last_price: 000, price: 00, 
    text: 'Este pacote está sendo desenvolvido...'},
    {title: 'Avançado', last_price: 000, price: 00, 
    text: 'Este pacote está sendo desenvolvido...'},
  ]
  
  if($('.hire-cards').length) {
    cards.map((card) => {
      let c = new HireCard(card.last_price, card.price, card.title, card.text);
      c.append_on('.hire-cards')
    })
  }
}

const load_details = () => {
  $('.version').text('Portfólio 0.7.1v')
}