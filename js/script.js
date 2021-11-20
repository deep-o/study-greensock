
// анимация загрузки страницы {
var tl = gsap.timeline ();

tl
.from(".hero__title", 1, {
      y: 50,
      opacity: 0,
})

.from(".hero__btn", 1, {
      y: 50,
      opacity: 0,
}, "<" )

.from(".hero__descr", 2, {
      opacity: 0,
 }, "-=0.3")

 .from(".photo-one", 1, {
  opacity: 0,
  scale: 0.8,
}, "-=2")

.from(".photo-two", 1, {
  opacity: 0,
  scale: 0.8,
}, "-=1.5")

.from(".photo-three", 1, {
  opacity: 0,
  scale: 0.8,
}, "-=1.1")

.from(".photos__author", 2, {
  opacity: 0,
}, "-=1")

const menuShown = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
burger.addEventListener('click', showMenu);

function closeMenu() {
  menuShown.classList.remove('menu--open')
};

function showMenu() {
  menuShown.classList.add('menu--open');
  let tl1 = new TimelineMax({
    onReverseComplete: closeMenu,
  });

  tl1
  // анимация загрузки бургера {
    .set (".menu-main__bg", {opacity: 0})
    .add("time0", 0)
    .add("time1", 0.2)
    .add("time2", 0.5)
    .add("time3", 1.3)
    .add("time4", 1.6)
    .add("time5", 2.1)

    .fromTo (".menu--open", {opacity: 0}, {opacity: 1})
    .fromTo (".menu-top__bg", {opacity: 0, y: -80}, {opacity: 0.5, y: 0, duration: 0.5}, "time0")
    .fromTo (".menu-top__bg", {opacity: 0.5}, {opacity: 1, duration: 0.3}, "time2")
    .fromTo (".menu-top__content", {opacity: 0,}, {opacity: 1, duration: 0.3},"time1")
    .fromTo (".menu-main__bg", {opacity: 0, y: 200}, {opacity: 0.5, y: 0, duration: 1}, "time2")
    .fromTo (".menu-main__bg", {opacity: 0.5}, {opacity: 1, duration: 0.5}, "time3")
    .fromTo (".nav__list", {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.5}, "time4")
    .fromTo (".social", {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.5}, "time5")
    .fromTo (".menu__right", {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.5}, "time5")

    close.onclick = function() {
    tl1.reverse();
}}










