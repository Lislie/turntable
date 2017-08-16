export function addClass(el, className) { // 添加 class 的 Dom
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function removeClass(el, className) { // 添加 class 的 Dom
  if (!hasClass(el, className)) {
    return
  }
  let oldClass = el.className.split(' ')
  oldClass.pop(className)
  el.className = oldClass
}
