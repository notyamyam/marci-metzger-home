import test from 'node:test'
import assert from 'node:assert/strict'
import { inquiryUrl } from './inquiry.js'

test('inquiry URL includes entered criteria and omits empty fields', () => {
  const url = inquiryUrl('Home search', { Location: 'Pahrump, NV', Bedrooms: '3', Baths: '' })
  assert.equal(url, 'mailto:Marcimetzger@gmail.com?subject=Home%20search&body=Location%3A%20Pahrump%2C%20NV%0ABedrooms%3A%203')
})
