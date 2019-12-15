import $ from "jquery"
import hljs from "highlight.js"

function lazyLoad() {
  highlightCode()
  var images = $("article img")
  var threshold = 300
  images.each(function(_, image) {
    if ($(image).offset().top < window.innerHeight + window.pageYOffset + threshold) {
      $(image).attr("src", $(image).attr("data-src"))
      $(image).addClass("lazy-loaded")
    }
  })
}

function highlightCode() {
  $("pre").each(function(i, block) {
    hljs.highlightBlock(block)
  })
  $("pre code").each(function(i, block) {
    hljs.highlightBlock(block)
  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  $('article section').ready(highlightCode)
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

$(window).on("load", highlightCode)
$(document).ready(lazyLoad)
$(window).on("resize", lazyLoad)
$("html, body").scroll(function() {
  lazyLoad()
})