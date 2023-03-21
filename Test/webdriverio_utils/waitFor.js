var visibilityOf = async function (element, errorMessage) {
  await element.waitForDisplayed({
    timeout: 10000,
    timeoutMsg: errorMessage + '\n' + new Error().stack + '\n',
  })
}
var elementToBeClickable = async function (element, errorMessage) {
  await element.waitForClickable({
    timeout: 10000,
    timeoutMsg: errorMessage + '\n' + new Error().stack + '\n',
  })
  var enabled = await element.isEnabled()
  if (!enabled) {
    throw new Error('Element ' + element + ' is not enabled.')
  }
}
var textToBePresentInElement = async function (element, text, errorMessage) {
  await browser.waitUntil(await until.textToBePresentInElement(element, text), {
    timeout: DEFAULT_WAIT_TIME_MSECS,
    timeoutMsg: errorMessage + '\n' + new Error().stack + '\n',
  })
}
exports.visibilityOf = visibilityOf
exports.elementToBeClickable = elementToBeClickable
exports.textToBePresentInElement=textToBePresentInElement