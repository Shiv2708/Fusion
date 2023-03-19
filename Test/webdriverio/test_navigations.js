// var workflow = require('../webdriverio_utils/workflows.js')

describe('Oppia landing pages tour', function() {
  it('should visit the Fractions landing page', async function() {
    await browser.url('http://127.0.0.1:8000/dashboard/')
    await browser.pause(5000)
    // await workflow.login('neelam.dayal@iiitdmj.ac.in', 'admin@123')

     const user = await $('[name="login"]')
     await user.addValue('neelam.dayal@iiitdmj.ac.in')
     const pass_word = await $('[name="password"]')
     await pass_word.addValue('user@123')
     await browser.pause(5000)

     const login_button = await $('button=Login')
     await login_button.click()
    await browser.pause(10000)
  });
});
