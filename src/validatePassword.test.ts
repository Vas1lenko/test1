import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test.each([
    "Abc123!!",
  ])("ValidPassword_ValidatePassword_ReceiveSuccess_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test.each([
    "A1b!",
  ])("TooShortPassword_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 8 символов");
  });

  test.each([
    "abc123!!",
  ])("PasswordWithoutUpperCase_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну заглавную букву");
  });

  test.each([
    "ABC123!!",
  ])("PasswordWithoutLowerCase_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну строчную букву");
  });

  test.each([
    "Abcdef!!",
  ])("PasswordWithoutDigits_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну цифру");
  });

  test.each([
    "Abc123!",
  ])("PasswordWithOneSpecialSymbol_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 2 спец-символа");
  });

  test.each([
    "Abc123!!Abc123!!A",
  ])("TooLongPassword_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать максимум 16 символов");
  });
});
