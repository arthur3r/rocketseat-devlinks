function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector('#profile img')

  if (html.classList[1] === 'light') {
    img.setAttribute('src', 'https://github.com/diego3g.png')
  } else {
    img.setAttribute('src', 'https://github.com/arthur3r.png')
  }
}