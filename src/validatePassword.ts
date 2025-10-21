export type ValidationResult = {
  isSuccess: boolean;
  errors: string[];
};

export const validatePassword = (password: string): ValidationResult => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Пароль должен содержать минимум 8 символов");
  }

  if (password.length > 16) {
    errors.push("Пароль должен содержать максимум 16 символов");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Пароль должен содержать хотя бы одну заглавную букву");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Пароль должен содержать хотя бы одну строчную букву");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Пароль должен содержать хотя бы одну цифру");
  }

  const specialMatches = password.match(/[^A-Za-z0-9]/g);
  if (!specialMatches || specialMatches.length < 2) {
    errors.push("Пароль должен содержать минимум 2 спец-символа");
  }

  return {
    isSuccess: errors.length === 0,
    errors,
  };
};
