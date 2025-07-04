import { signal } from '@angular/core';

export function createCounter(initial = 0) {
  const count = signal(initial);
  const inc = () => count.update(v => v + 1);
  const dec = () => count.update(v => v - 1);
  return { count, inc, dec };
}
