const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste do objeto retornado ao chamar a função sem parâmetros', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Teste com os argumentos Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Teste com os argumentos Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Teste com os argumentos Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Teste se a função retorna erro quando dataHour é um parâmetro inválido', () => {
    expect(() => getOpeningHours('Wednesday', 'Hora inválida')).toThrow('The hour should represent a number');
  });
  it('Teste se a função retorna erro quando não se coloca AM ou PM no parâmetro dataHour', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-XX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste se a função retorna erro quando se coloca a hora menor que 0 ou maior que 12', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Teste se a função retorna erro quando se coloca os minutos menor que 0 ou maior que 59', () => {
    expect(() => getOpeningHours('Wednesday', '09:60-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Teste se a função retorna erro quando se coloca um dia inexistente', () => {
    expect(() => getOpeningHours('Trybeday', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
});
