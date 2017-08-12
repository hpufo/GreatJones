function fillArray(len: number) {
  const array = new Array(len);
  for (let i = 0; i < len; i++) {
    array.push(0);
  }
  return array;
}

describe('Karma', () => {
  // tslint:disable-next-line:no-console
  console.log('DESCRIBE');
  it('runs a test and prints', () => {
    const array = fillArray(1);
    // tslint:disable-next-line:no-console
    console.log(array.length);
    expect(true).toBe(true);
  });
});
