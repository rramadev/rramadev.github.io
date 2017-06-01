/*** Custom Javascript ***/ 

// Load Particles library
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/assets/particlesjs-config.json', function () {
  console.log('Particles.js config loaded');
});

// Set Avatar style/position on window scroll
$(document).ready(function () {
  $avatar = $('#avatar');
  $avatarInfo = $("div[id^='av-']");
  $(document).scroll(function () {
    $avatar.toggleClass('avatar-min', $(this).scrollTop() > 1);
    $avatarInfo.toggleClass('avatar-off', $(this).scrollTop() > 1);
  });
});