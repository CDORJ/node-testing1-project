const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  it("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[2] returns a copy, leaving the original object intact", () => {});
  const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
  const actual = utils.trimProperties(input);
  expect(actual).not.toEqual(input);
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  it("[3] returns an object with the properties trimmed", () => {
    const input = { cat: "  promise ", dog: "fido ", bird: " pretty" };
    const expected = { cat: "promise", dog: "fido", bird: "pretty" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });

  it("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  it("[5] returns the largest number in an array of numbers", () => {
    // ✨ test away
    const numbArray = [1, 2, 3, 4, 5];

    const returnedNumber = utils.findLargestInteger(numbArray);
    expect(returnedNumber).toBe(5);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  it("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const actual = counter.countDown();
    expect(actual).toBe(3);
  });
  it("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    const first = counter.countDown();
    const second = counter.countDown();
    expect(second).toBe(2);
  });
  it("[8] the count eventually reaches zero but does not go below zero", () => {
    // ✨ test away
    const first = counter.countDown();
    const second = counter.countDown();
    const third = counter.countDown();
    const fourth = counter.countDown();
    const fifth = counter.countDown();
    const sixth = counter.countDown();
    expect(third).toBe(1);
    expect(fourth).toBe(0);
    expect(fifth).toBe(0);
    expect(sixth).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    const first = seasons.next();
    console.log(first);
    expect(first).toBe("summer");
  });
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    const first = seasons.next();
    const second = seasons.next();
    console.log(second);
    expect(second).toBe("fall");
  });
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    const first = seasons.next();
    const second = seasons.next();
    const third = seasons.next();
    console.log(third);
    expect(third).toBe("winter");
  });
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    const first = seasons.next();
    const second = seasons.next();
    const third = seasons.next();
    const fourth = seasons.next();
    console.log(fourth);
    expect(fourth).toBe("spring");
  });
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    const first = seasons.next();
    const second = seasons.next();
    const third = seasons.next();
    const fourth = seasons.next();
    const fifth = seasons.next();
    console.log(fifth);
    expect(fifth).toBe("summer");
  });
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    for (let i = 0; i < 40; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  it("[15] driving the car returns the updated odometer", () => {
    // ✨ test away
  });
  it("[16] driving the car uses gas", () => {
    // ✨ test away
  });
  it("[17] refueling allows to keep driving", () => {
    // ✨ test away
  });
  it("[18] adding fuel to a full tank has no effect", () => {
    // ✨ test away
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  it("[19] resolves true if passed an even number", async () => {
    // ✨ test away
    // const input = 2;
    // const result = true;
    // const actual = utils.isEvenNumberAsync(input);
    // expect(result).toEqual(true);
    const data = await utils.isEvenNumberAsync(2);
    expect(data).toBe(true);
  });
  it("[20] resolves false if passed an odd number", async () => {
    // ✨ test away
    const data = await utils.isEvenNumberAsync(3);
    expect(data).toBe(false);
  });
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    // ✨ test away
    await expect(utils.isEvenNumberAsync("hello")).rejects.toThrow(
      "number must be a number"
    );
  });
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    // ✨ test away

    let answer = utils.isEvenNumberAsync(NaN).catch((err) => {
      expect(err.message).toEqual("number must be a number");
    });
  });
});
