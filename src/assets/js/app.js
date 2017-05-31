/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/assets/particlesjs-config.json', function() {
  console.log('Particles.js config loaded');
});
 
$(document).ready(function(){
  // console.log("-->" + $myElem.offset().top);
  $avatar = $('#avatar');
  $avatarInfo = $("div[id^='av-']");
   $(document).scroll(function(){
    //  console.log("scroll");
     $avatar.toggleClass('avatar-min', $(this).scrollTop() > 1);
     $avatarInfo.toggleClass('avatar-off', $(this).scrollTop() > 1);
 });
});