ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [48.872, 2.354],
    zoom: 14,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: '../images/place.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-5, -38]
  });

  myMap.geoObjects.add(myPlacemark);
}