import {login, logout} from '../../actions/auth'

test('login action should return object with id', () => {
  const uid = '123'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})
test('logout action should return empty object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT',
  })
})