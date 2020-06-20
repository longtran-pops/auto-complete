function debounce(fn, delay) {
  let timeout

  return function executedFn() {
    const later = () => {
      timeout = null

      fn.apply(this, arguments)
    };

    clearTimeout(timeout)

    timeout = setTimeout(later, delay)
  }
}

export default debounce