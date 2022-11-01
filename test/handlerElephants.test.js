const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste do argumento "count"', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Teste do argumento "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Teste do argumento "averageAge"', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Teste do argumento "location"', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Teste do argumento "popularity"', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Teste do argumento "availability"', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expected);
  });
  it('Teste sem argumentos', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Teste passando um parâmetro não string', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Teste passando um parâmetro inexistente', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
});
