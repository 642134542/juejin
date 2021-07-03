import Cookies from 'js-cookie'

const tokenKey = 'vue_admin_template_token'

export function getCookie (key = tokenKey) {
  return Cookies.get(key)
}

export function setCookie (value, key = tokenKey) {
  return Cookies.set(key, value)
}

export function removeCookie (key = tokenKey) {
  return Cookies.remove(key)
}
