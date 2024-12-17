// Mind Control Is Surprisingly Effective

// [🎅Santa was the victim of a magical mind-control potion, prepared by his own Mrs. Claus: 💋Crystal Claus.
// It's the next morning and 🎅Santa is just walking into the break room where all the reindeer were preparing for the day's chores.]

// [🎅Santa] My dear wonderful reindeer!
// How truly magnificent you all are!
// I don't do enough to show my appreciation for you!

// [🔴Rudolph] Um. Are you feeling ok?
// Also, if the answer is "yes", you better not be about to give us $15 starbucks gift cards again as our "big bonus this season".

// [🎅Santa] 🔴Rudolph, 🔴Rudolph, sweet 🔴Rudolph.
// I have had an awakening!
// It actually is $15 dollars!
// But it's a $15 dollar per hour salary increase for every reindeer!!

// [Silence. Utter silence in the room. The reindeer are in shock. Several long moments pass.
// The reindeer are expecting 🎅Santa to laugh in their faces and say it's all a joke...]

// [🎅Santa] draw up some composable contracts!
// I'll sign them all today!

// You heard him!
// We need to make a general purpose compose function.
// This particular (simplified) function just takes functors, and returns the result of calling each, passing the result of the previous.

// Answer
const compose =
  <Farg, Garg, Harg, Hret>(
    f: (arg: Farg) => Garg,
    g: (arg: Garg) => Harg,
    h: (arg: Harg) => Hret,
  ) =>
  (a: Farg) =>
    h(g(f(a)));

const upperCase = <T extends string>(x: T): Uppercase<T> =>
  x.toUpperCase() as Uppercase<T>;
const lowerCase = <T extends string>(x: T): Lowercase<T> =>
  x.toLowerCase() as Lowercase<T>;
const firstChar = <T extends string>(x: T): FirstChar<T> =>
  x[0] as FirstChar<T>;
const firstItem = <T extends any[]>(x: T): T[0] => x[0];
const makeTuple = <T>(x: T) => [x];
const makeBox = <T>(value: T) => ({ value });

type FirstChar<T extends string> = T extends `${infer First}${infer _Rest}`
  ? First
  : "";

// Tests
import type { Equal, Expect } from "type-testing";

const t0 = compose(upperCase, makeTuple, makeBox)("hello!").value[0];
//    ^?
type t0_actual = typeof t0; // =>
type t0_expected = "HELLO!"; // =>
type t0_test = Expect<Equal<t0_actual, t0_expected>>;

const t1 = compose(makeTuple, firstItem, makeBox)("hello!" as const).value;
type t1_actual = typeof t1; // =>
type t1_expected = "hello!"; // =>
type t1_test = Expect<Equal<t1_actual, t1_expected>>;

const t2 = compose(upperCase, firstChar, lowerCase)("hello!");
type t2_actual = typeof t2; // =>
type t2_expected = "h"; // =>
type t2_test = Expect<Equal<t2_actual, t2_expected>>;
