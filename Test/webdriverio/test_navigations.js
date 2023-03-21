// const { clear } = require('../webdriverio_utils/actions')
//var login = import('../webdriverio_utils/workflows.js')
var workflow = require('../webdriverio_utils/workflows.js')
var healthCenterTestUtils = require('../webdriverio_utils/healthCenterTestUtils')

describe('Oppia landing pages tour', function () {
  it('should visit the Fractions landing page', async function () {
    
    
    await workflow.url('http://127.0.0.1:8000/dashboard/')
    await workflow.login('20bcs203', 'user@123')
    await healthCenterTestUtils.goToHealthModule('.e2e-test-health-care-btn')
    
    await healthCenterTestUtils.goToHistorySection('.e2e-test-history-btn')
    
    await healthCenterTestUtils.goToFeedback('.e2e-test-view-feedback-btn')
    
  })
})
