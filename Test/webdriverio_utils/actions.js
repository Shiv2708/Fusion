

var waitFor = require('./waitFor.js')



var click = async (elementName, clickableElement) => {
  await waitFor.visibilityOf(clickableElement, `${elementName} is not visible.`)
  await waitFor.elementToBeClickable(
    clickableElement,
    `${elementName} is not clickable.`
  )
  await clickableElement.click()
}


exports.click = click
