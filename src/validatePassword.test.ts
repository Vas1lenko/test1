import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test("valid password should pass", () => {
    const result = validatePassword("Abc123!!");
    expect(result.isSuccess).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test("too short password", () => {
    const result = validatePassword("A1b!");
    expect(result.isSuccess).toBe(false);
    expect(result.errors).toContain("Пароль должен содержать минимум 8 символов");
  });

  test("no uppercase letter", () => {
    const result = validatePassword("abc123!!");
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну заглавную букву");
  });

  test("no lowercase letter", () => {
    const result = validatePassword("ABC123!!");
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну строчную букву");
  });

  test("no digits", () => {
    const result = validatePassword("Abcdef!!");
    expect(result.errors).toContain("Пароль должен содержать хотя бы одну цифру");
  });

  test("not enough special symbols", () => {
    const result = validatePassword("Abc123!");
    expect(result.errors).toContain("Пароль должен содержать минимум 2 спец-символа");
  });

  test("too long password", () => {
    const result = validatePassword("Abc123!!Abc123!!A");
    expect(result.errors).toContain("Пароль должен содержать максимум 16 символов");
  });
});
