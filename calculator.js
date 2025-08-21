// العمليات الحسابية الأساسية

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

export function percent(value) {
  return value / 100;
}

export function sqrt(value) {
  if (value < 0) throw new Error("Cannot calculate square root of negative number");
  return Math.sqrt(value);
}

// وظيفة تتعامل مع الواجهة (اختيارية)
export function calculate() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const result = add(a, b);
  document.getElementById("result").innerText = `Result: ${result}`;
}

// Make calculate function globally available for onclick (only in browser)
if (typeof window !== 'undefined') {
  window.calculate = calculate;
}
