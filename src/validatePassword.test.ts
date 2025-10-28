import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test.each([
    ["ValidPassword_ValidatePassword_ReceiveSuccess", "Abc123!!"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test.each([
    ["TooShortPassword_ValidatePassword_ReceiveValidationError", "A1b!"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 8 символов");
  });

  test.each([
    ["PasswordWithoutUpperCase_ValidatePassword_ReceiveValidationError", "abc123!!"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну заглавную букву");
  });

  test.each([
    ["PasswordWithoutLowerCase_ValidatePassword_ReceiveValidationError", "ABC123!!"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну строчную букву");
  });

  test.each([
    ["PasswordWithoutDigits_ValidatePassword_ReceiveValidationError", "Abcdef!!"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну цифру");
  });

  test.each([
    ["PasswordWithOneSpecialSymbol_ValidatePassword_ReceiveValidationError", "Abc123!"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 2 спец-символа");
  });

  test.each([
    ["TooLongPassword_ValidatePassword_ReceiveValidationError", "Abc123!!Abc123!!A"],
  ])("%s", (_caseName, password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать максимум 16 символов");
  });
});
