// Help Santa Embezzle Funds

// The shady WiFi installment by Santa's college buddy in Days 12 and 16 aren't the only questionable business dealing Santa is involved in.
// Another of Santa's friends from college, Tod, is a partial owner of the X Games (an "extreme sports" version of the Olympics).
// In recent years, Santa realized that he can use his position of power at the toy factory to embezzle funds through a shell corporation that he started with Tod.
// The shell corporation, Icecap Assets Management, Inc., recently acquired a skateboard and scooter manufacturer, SkateScoot Syndicate.
// It's perfect timing because in 2022 Icecap had acquired another company that makes surfboards and bmx bikes, RideWave Dynamics.

// Now, all that's left to do is make sure that every child gets a skateboard or a scooter!
// Then the funds will be laundered to Icecap via SkateScoot and RideWave, after which Santa and Tod can then take total control of the funds.

// Santa made himself a list like this:

// type List = [2, 1, 3, 3, 1, 2, 2, 1];

// And since Santa doesn't want to raise suspicion (by giving the same thing to every kid) he figures he'll alternate like this:
// 1. 🛹' (skateboard)
// 2. '🚲' (bmx bike)
// 3. '🛴' (scooter)
// 4. '🏄' (surfboard)
// 5. (loop back to skateboard)

// type Result = [
//   '🛹', '🛹',
//   '🚲',
//   '🛴', '🛴', '🛴',
//   '🏄', '🏄', '🏄',
//   '🛹',
//   '🚲', '🚲',
//   '🛴', '🛴',
//   '🏄',
// ]

// Tests
import { Expect, Equal } from "type-testing";

type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
//   ^?
type test_0_expected = ["🛹", "🛹", "🚲", "🛴", "🛴", "🛴", "🏄", "🏄", "🏄", "🛹", "🚲", "🛴", "🛴"];
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
//   ^?
type test_1_expected = ["🛹", "🛹", "🛹", "🚲", "🚲", "🚲", "🛴", "🛴", "🏄", "🛹", "🛹", "🚲", "🛴", "🛴"];
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
//   ^?
type test_2_expected = [
  "🛹",
  "🛹",
  "🚲",
  "🚲",
  "🚲",
  "🛴",
  "🛴",
  "🛴",
  "🏄",
  "🏄",
  "🏄",
  "🏄",
  "🏄",
  "🛹",
  "🚲",
  "🛴",
  "🛴"
];
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

// Answer
type Toys = ["🛹", "🚲", "🛴", "🏄"];

type Rebuild<
  List extends number[],
  CurrentToy extends "+"[] = [],
  Count extends "+"[] = [],
  Result extends Toys[number][] = []
> = List extends [infer First, ...infer Rest extends number[]]
  ? First extends Count["length"]
    ? Rebuild<Rest, [...CurrentToy, "+"]["length"] extends Toys["length"] ? [] : [...CurrentToy, "+"], [], Result>
    : Rebuild<List, CurrentToy, [...Count, "+"], [...Result, Toys[CurrentToy["length"]]]>
  : Result;
