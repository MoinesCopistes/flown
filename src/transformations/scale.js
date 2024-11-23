export function scale(scale_factor) {
  let p = window.user_p5;
  let base = p.createGraphics(p.width, p.height);
  
  p.noSmooth();
  
  base.image(
    window.user,
    (p.width - p.width * scale_factor) / 2,
    (p.height - p.height * scale_factor) / 2,
    p.width * scale_factor,
    p.height * scale_factor
  );

  return base.get();
}
