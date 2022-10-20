const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });


  test('00:00 => midnight',()=>{
    let response = timeWord("00:00")
    expect(typeof response).toBe("string");
    expect(response).toEqual("midnight")
  });
    
  test('00:12 => twelve twelve am"',()=>{
    let response = timeWord("00:12");
    expect(typeof response).toBe("string");
    expect(response).toEqual("twelve twelve am")
  });

  test('12:00 => noon"',()=>{
    let response = timeWord("12:00");
    expect(typeof response).toBe("string");
    expect(response).toEqual("noon")
  });

  test('12:09 => noon"',()=>{
    let response = timeWord("12:09")
    expect(typeof response).toBe("string");
    expect(response).toEqual("twelve oh nine pm")
  });

  test('23:23 => noon"',()=>{
    let response = timeWord("23:23")
    expect(typeof response).toBe("string");
    expect(response).toEqual("eleven twenty three pm")
  });

});
