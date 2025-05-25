// Función segura para evaluar expresiones matemáticas básicas
export function evaluateExpression(expr) {
  // Validar que solo contenga caracteres permitidos (números y operadores)
  if (!/^[\d+\-*/().\s]+$/.test(expr)) {
    throw new Error("Expresión inválida");
  }

  // Evaluar de forma segura usando Function (mejor que eval)
  // Esta es una función anónima que retorna el valor evaluado
  try {
    // eslint-disable-next-line no-new-func
    const result = new Function("return " + expr)();
    if (!isFinite(result)) {
      throw new Error("División por cero o resultado inválido");
    }
    return result.toString();
  } catch (e) {
    throw new Error("Error al evaluar");
  }
}
