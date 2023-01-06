import { hello } from "@Src";

describe('hello func', () => {
  it('should return hello world', () => {
    // GIVEN
    // WHEN
    const asis = hello();
    // THEN
    expect(asis).toBe(`Hello world!`);
  });
  it('should return hello name when specifying name', () => {
    // GIVEN
    const who = 'mike';
    // WHEN
    const asis = hello(who);
    // THEN
    expect(asis).toBe(`Hello ${who}!`);
  });
})
