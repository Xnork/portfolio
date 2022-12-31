load_projects_card();
load_skills_bar();
load_menu_option();
load_hire_cards();
load_details();

banners_image = [
  '/portfolio/assets/james-webb.webp',
  '/portfolio/assets/nebula.jpg'
];


// banner
let index = 0;
$('.banner').css('background-image', `url(${banners_image[index++]})`)
setInterval(() => {
  if(index > 1) {
    index = 0;
  }
  $('.banner').css('background-image', `url(${banners_image[index++]})`)
}, 5000)