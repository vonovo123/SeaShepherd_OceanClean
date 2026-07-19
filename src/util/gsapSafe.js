import gsap from 'gsap';

/** null/undefined 타겟이면 GSAP 호출을 건너뜁니다. */
export function animateTo(target, vars) {
  if (!target) return null;
  return gsap.to(target, vars);
}

export function animateFromTo(target, fromVars, toVars) {
  if (!target) return null;
  return gsap.fromTo(target, fromVars, toVars);
}
