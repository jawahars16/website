// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"
const $ =  require("jquery")

// in gastby-browser.js
exports.shouldUpdateScroll = ({
                                routerProps: { location },
                                getSavedScrollPosition,
                              }) => {
  const { pathname } = location
  $('body').scroll(0,0)
  console.log('scroll...')
  return false
}
