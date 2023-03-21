var waitFor = require('./waitFor.js')
var goToHealthModule = async function (element) {
  const health_btn = await $(element)
  await health_btn.click()
  await browser.pause(5000)
}
var goToHistorySection = async function (element) {
  const history_btn = await $(element)
  await history_btn.click()
  await browser.pause(5000)
}
var goToFeedback = async function (element) {
  const view_feedback_btn = await $(element)
  await view_feedback_btn.click()
  await browser.pause(5000)
}

exports.goToHealthModule = goToHealthModule
exports.goToHistorySection = goToHistorySection
exports.goToFeedback = goToFeedback
