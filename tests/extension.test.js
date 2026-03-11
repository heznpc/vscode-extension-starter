const { activate, deactivate } = require('../src/extension');

describe('Extension', () => {
  test('exports activate function', () => {
    expect(typeof activate).toBe('function');
  });

  test('exports deactivate function', () => {
    expect(typeof deactivate).toBe('function');
  });
});

describe('Commands', () => {
  test('helloWorld module exports registerHelloWorld', () => {
    const { registerHelloWorld } = require('../src/commands/helloWorld');
    expect(typeof registerHelloWorld).toBe('function');
  });
});
