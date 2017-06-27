/*** Custom Javascript ***/ 

$(document).ready(function () {

  // Load Particles library
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'src/assets/particlesjs-config.json', function () {
    console.log('Particles.js config loaded');
  });

  // Set Avatar style/position on window scroll
  $avatar = $('#avatar');
  $avatarInfo = $("div[id^='av-']");
  $(document).scroll(function () {
    $avatar.toggleClass('avatar-min', $(this).scrollTop() > 1);
    $avatarInfo.toggleClass('avatar-off', $(this).scrollTop() > 1);
  });

  // Modal with Project Image (Website mockup)
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the image and insert it inside the modal
  var imgModal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");
  $('.modalImg').each(function() {
    $(this).click(function() {
      event.preventDefault();
      modal.style.display = "block";
      imgModal.src = 'src/assets/img/' + modalImg.alt + '.png';   
    });
  });
  // Get the <span> element that closes the modal
  $('.close').first().click(function() { 
      modal.style.display = "none";
  });  

});
