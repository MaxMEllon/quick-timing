export function measure<R>(f: () => R): R {
  const name = f.name || '<anonymous>';
  const uniqTag = Math.random()
    .toString(36)
    .slice(-8);
  const start = `${name}-start-${uniqTag}`;
  const end = `${name}-end-${uniqTag}`;
  window.performance.mark(start);
  const r = f();
  window.performance.mark(end);
  window.performance.measure(name, start, end);
  return r;
}
