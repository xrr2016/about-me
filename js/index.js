new Typed('#name', {
  strings: ['你好......', '我是轻键快码', '很高兴见到你'],
  typeSpeed: 100,
  backSpeed: 0,
  fadeOut: true,
  showCursor: false,
  loop: true
})

const random = function(n) {
  return Math.random() * n
}

let $ = c.getContext('2d'),
  w = (c.width = window.innerWidth),
  h = (c.height = window.innerHeight),
  stars = new Array(800).fill().map(function() {
    return {
      x: random(w),
      y: random(h),
      a: random(Math.PI * 2),
      s: random(0.01),
      r: random(2)
    }
  })

const loop = function() {
  $.fillStyle = 'rgba(0, 0, 0, 0.1)'
  $.fillRect(0, 0, w, h)
  stars.forEach(function(star) {
    star.a += star.s
    $.save()
    $.beginPath()
    $.translate(w / 2, h / 2)
    $.rotate(star.a)
    $.arc(star.x, star.y, star.r, 0, Math.PI * 2)
    $.closePath()
    $.fillStyle = '#fff'
    $.fill()
    $.restore()
  })
  requestAnimationFrame(loop)
}
loop()

window.addEventListener('resize', function() {
  w = c.width = window.innerWidth
  h = c.height = window.innerHeight
})
