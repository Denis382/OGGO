
const filterButtons = document.querySelector(".event-filters");
const filterButton = document.querySelectorAll('.filter-button')
const activeButton = document.querySelectorAll('.filter-button.active')
console.log(activeButton)


function addACtive(){
  if (event.target.closest(".filter-button")){
      console.log('Switch'); //для проверки - срабатывает ор нот;
      event.target.classList.toggle('active');
  }
};

filterButtons.addEventListener("click", addACtive)

//Появление по удалению класса (скрытия)
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.remove('hidden_p');
        change.target.classList.remove('hidden-sub');
      }
    });
  }
  const options = { threshold: [1.0] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll('.title');
  for (let elm of elements) {
    observer.observe(elm);
  }
  const paragraph = document.querySelectorAll('.subtitle');
  for (let elm of paragraph) {
    observer.observe(elm);
  }
  const footerTitle = document.querySelectorAll('.column-title');
  for (let elm of footerTitle){
    observer.observe(elm)
  }


