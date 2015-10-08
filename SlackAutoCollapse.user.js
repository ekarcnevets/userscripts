// ==UserScript==
// @name        Slack Auto Collapse
// @namespace   ekarcnevets
// @description Collapses all embeds in your current Slack channel at a set interval
// @include     https://smartrak.slack.com/*
// @version     1
// @grant       none
// ==/UserScript==
$('document').ready(function () {
  function collapseAll() {
    TS.inline_videos.collapseAllInCurrent();
    TS.inline_others.collapseAllInCurrent();
    TS.inline_imgs.collapseAllInCurrent();
    TS.inline_file_previews.collapseAllInCurrent();
    TS.inline_audios.collapseAllInCurrent();
    TS.inline_attachments.collapseAllInCurrent();
  }
  $(window).on('blur focus', function (e) {
    var prevType = $(this).data('prevType'); // getting identifier to check by
    if (prevType != e.type) { //  reduce double fire issues by checking identifier
      switch (e.type) {
        case 'blur':
          setTimeout(collapseAll, 5000);
          break;
        case 'focus':
          break;
      }
    }
    $(this).data('prevType', e.type); // reset identifier
  });
});
