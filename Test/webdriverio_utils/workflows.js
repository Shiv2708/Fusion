var login = async function (user_name, password) {
  const user = await $('[name="login"]')
  await user.addValue(user_name)
  const pass_word = await $('[name="password"]')
  await pass_word.addValue(password)

  const login_button = await $('button=Login')
  await login_button.click()
}

exports.login = login;
