export function scale(scale_factor) {
  let p = window.user_p5;
  let base = p.createGraphics(p.width, p.height)
  base.image(window.user, -p.width / scale_factor, -p.height / scale_factor, p.width * scale_factor, p.height * scale_factor)
  return base.get();
}
