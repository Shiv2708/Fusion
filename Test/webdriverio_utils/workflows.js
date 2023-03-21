var actions = require('./actions.js')

var waitFor = require('./waitFor.js')
var login = async (user_name, password) => {
  console.log(user_name, password)
  const user = await $('[name="login"]')
  await user.addValue(user_name)
  const pass_word = await $('[name="password"]')
  await pass_word.addValue(password)

  const login_button = await $('button=Login')
  await actions.click('login button', login_button)
}
var url = async (url) => {
  await browser.url('http://127.0.0.1:8000/dashboard/')
  const login_button = await $('button=Login')
  await waitFor.visibilityOf(login_button, `element is not visible.`)
}
// export default login
exports.login = login
exports.url = url
