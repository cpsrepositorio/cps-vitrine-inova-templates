function throttle(callback, delay = 100) {
  let timeoutId = 0
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => callback.apply(this, args), delay)
  }
}

function isEllipsisActive(element) {
  return element.offsetWidth + 1 < element.scrollWidth
}

function isClampActive(element) {
  return element.offsetHeight + 1 < element.scrollHeight
}

function resizeObserverCallback() {
  const updateTitleAttribute = (element, checkFunction) =>
    (element.title = checkFunction(element)
      ? element.textContent
          .toString()
          .replace(/\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : '')

  const truncatedElements = [...document.querySelectorAll('.truncate')]
  truncatedElements.forEach((element) =>
    updateTitleAttribute(element, isEllipsisActive)
  )

  const clampedElements = [...document.querySelectorAll('.clamp')]
  clampedElements.forEach((element) =>
    updateTitleAttribute(element, isClampActive)
  )
}

const resizeObserver = new ResizeObserver(throttle(resizeObserverCallback))
resizeObserver.observe(document.body)
