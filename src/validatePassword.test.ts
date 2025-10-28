import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test.each([
    "Abc123!!",
    "Qwe456@@",
    "Zxc789##",
    "Password12$$",
    "Strong99!!"
  ])("ValidPassword_ValidatePassword_ReceiveSuccess_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test.each([
    "A1b!",
    "Q2w@",
    "Z3c#",
    "P4s$",
    "Z5x%"
  ])("TooShortPassword_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 8 символов");
  });

  test.each([
    "abc123!!",
    "qwe456@@",
    "zxc789##",
    "password12$$",
    "strong99!!"
  ])("PasswordWithoutUpperCase_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну заглавную букву");
  });

  test.each([
    "ABC123!!",
    "QWE456@@",
    "ZXC789##",
    "PASSWORD12$$",
    "STRONG99!!"
  ])("PasswordWithoutLowerCase_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну строчную букву");
  });

  test.each([
    "Abcdef!!",
    "Qwerty@@",
    "Zxcabc##",
    "Password$$",
    "Strong!!"
  ])("PasswordWithoutDigits_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну цифру");
  });

  test.each([
    "Abc123!",
    "Qwe456@",
    "Zxc789#",
    "Pass123$",
    "Strong99%"
  ])("PasswordWithOneSpecialSymbol_ValidatePassword_ReceveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 2 спец-символа");
  });

  test.each([
    "Abc123!!Abc123!!A",
    "Qwe456@@Qwe456@@Q",
    "Zxc789##Zxc789##X",
    "Password12$$Password1",
    "Strong99!!Strong99!"
  ])("TooLongPassword_ValidatePassword_ReceiveValidationError_%s", (password) => {
    const result = validatePassword(password);
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать максимум 16 символов");
  });
});

