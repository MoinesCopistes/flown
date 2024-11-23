export function rotate(angle) {
  let p = window.user_p5;
  let base = p.createGraphics(p.width, p.height);
  base.translate(p.width / 2, p.height / 2);
  base.rotate(angle)
  base.image(window.user, -p.width / 2, -p.height / 2, p.width, p.height);
  return base.get();
}
