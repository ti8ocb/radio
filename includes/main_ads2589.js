var AACURLPLAYER;
var MP3URLPLAYER;
var userAgent = navigator.userAgent.toLowerCase();
var zones = {};
var artist = "Desde Perez /";
var isAdsPlaying = false;
// if (navigator.userAgent.match(/Android/i)) {
//     pathStream = 'audiohls/playlist.m3u8'
// }
AACURLPLAYER = "https://centova.hostingtico.com:7016/;stream.mp3" + "/";
MP3URLPLAYER = "https://centova.hostingtico.com:7016/;stream.mp3" + "/mp3/icecast.audio";
var playURL = AACURLPLAYER;
if (
  navigator.appName == "Microsoft Internet Explorer"
  || !!(
    navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)
  )
  || (typeof $.browser !== "undefined" && $.browser.msie == 1)
) {
  playURL = MP3URLPLAYER;
}
if (userAgent.indexOf('safari') != -1) {
  if (userAgent.indexOf('chrome') > -1) {
    isChrome = true;
  } else {
    isSafari = true;
  }
}
isFirefox = typeof InstallTrigger !== 'undefined';
isEdge = navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == 'Netscape' && navigator.appVersion.indexOf('Edge') > -1) || (navigator.appName == 'Netscape' && navigator.appVersion.indexOf('Trident') > -1);
var st = 0;
var rem = 0;
var remOld = 1;
var isBuffer = false;
var preRoll_actived = false;
var interval;
var volume = 0.5;

function CenterMode() {
  $(".slick-slide").removeClass("slick-middle");
  var $elements = $(".slick-active");
  var elementsLength = $elements.length;
  var midElement = Math.round(elementsLength / 2) - 1;
  $elements.eq(midElement).addClass("slick-middle");
}

function othersInit() {
  $(".marquee").show();

  $(".js-marquee").marquee({
    duration: 15000,
    duplicated: true,
  });

  $(".js-toggle-signal").on("click", function (e) {
    e.preventDefault();

    $(".signal-modal").toggleClass("is-visible");
    CenterMode();
  });
}

function setupPlayer() {
  checkBufferTimer = $.timer(function () {
    checkBuffer();
  });
  checkBufferTimer.set({
    time: 1000,
    autostart: true
  });
  song = zones[zone];
  $(".caption__title").html(artist);

  var player = videojs('laradio');
  var options = {
    id: 'laradio',

  };
  player.src({
    src: playURL,
    type: 'audio/aac'
  });

  var startEvent = 'click';
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i)) {
    startEvent = 'touchend';
  }


  player.one('play', function (e) {
    $("#status").html("...BUFFER...");
    $("#status").show();
    $(".main-player").addClass("is-buffering");
    $(".js-play-stop").removeClass("is-actived");
    $(".js-pause").addClass("is-actived");
  });
  player.on('pause', function () {
    $("#status").html("DETENIDO");
    $("#status").show();
    st = 0;
  });
  player.on('playing', function () {
    st = 1;
  });
  player.on('timeupdate', function () {
    rem = player.currentTime();
  });
  $(".js-slider").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 100,
    value: 70,
    slide: function (event, ui) {
      var value = ui.value / 100;
      player.volume(value);
      volume = value;
    },
  });

  player.on('adtimeout', function () {
    isAdsPlaying = false;
    $(".player__center select").prop("disabled", false);
    playPromise();
  });
  player.on('adserror', function () {
    isAdsPlaying = false;
    $(".player__center select").prop("disabled", false);
    playPromise();
  });

  $(".js-volume").on("click", function (e) {
    e.preventDefault();
    $(".slider").fadeToggle(200);
  });

  $(".js-play-stop").on("click", function (e) {
    if (isAdsPlaying == false) {
      e.preventDefault();
      $(".js-pause").addClass("is-actived");
      $(this).removeClass("is-actived");
      playplayer();
    }
  });

  $(".js-pause").on("click", function (e) {
    if (isAdsPlaying == false) {
      e.preventDefault();
      $(".js-play-stop").addClass("is-actived");
      $(this).removeClass("is-actived");
      stopplayer();
    }
  });

  $(".signal-link").on("click", function (e) {
    e.preventDefault();
    var currentIndex = parseInt($(".slick-middle").attr("data-slick-index"));
    var index = parseInt($(this).parent().attr("data-slick-index"));
    var $elements = $(".slick-active");
    var elementsLength = $elements.length;
    var diffElement = elementsLength - Math.round(elementsLength / 2);
    if (index !== 0) {
      $(".js-carousel").slick("slickGoTo", index - diffElement);
    } else {
      $(".slick-prev").trigger("click");
    }
    trackName = $(this).data("track");
  });

  function stopplayer() {
    firstTimePlay = true;
    player.pause();
  }

  function playplayer() {
    player.play();
  }

  function mutePlayer() {
    player.muted(true);
  }

  function unMutePlayer() {
    player.muted(false);
  }

  function checkBuffer() {
    if (rem == remOld && st == 1) {
      $("#status").html("...BUFFER...");
      isBuffer = true;
      $(".main-player").addClass("is-buffering");
    } else {
      if (st == 1) {
        $("#status").html("EN VIVO");
        $(".main-player").removeClass("is-buffering");
      }
      isBuffer = false;
    }
    remOld = rem;
  }

  function playerZone(id) {
    var zone = id;
    stopplayer();
    AACURLPLAYER = "" + zone;
    MP3URLPLAYER = "";
    playURL = AACURLPLAYER;
    song = zones[zone];


    player.src({
      type: 'audio/aac',
      src: playURL
    });
    playplayer();
  }
  var theZone = zone.replace(/-/g, "");
  $('.player__center select option[value="0"]').remove();
  $('.player__center select option[value="' + theZone + '"]').prop(
    "selected",
    true
  );

  $(".player__center select").on("change", function (e) {
    var selectZone = $(this).find("option:selected").val();
    playerZone(selectZone);
  });

  $(".js-feedback").on("click", function (e) {
    e.preventDefault();
  });
}

$(function () {
  setupPlayer();

  function pushNoty(msg) {


  }
});
