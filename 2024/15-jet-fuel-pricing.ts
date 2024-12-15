// Jet Fuel Pricing

// While It's well known that with Christmas spirit at all-time lows, 🎅Santa has had to resort to using jet fuel to help power his sleigh.
// But in this economy, gas prices are through the roof!
// To help keep costs down, the elves came up with a plan to track the distance between each stop on 🎅Santa's route.

// The elves don't really understand "miles" or "kilometers".
// Instead, they just use the dashes they drew on the map to represent a unit of fuel needed to travel between locations.
// They've written out 🎅Santa's entire route as a string of locations separated by these markers.

// For example:
// "north_pole--candycane_forest----gumdrop_sea-------hawaii"

// This means:
// 'candycane_forest' is 2 units from 'north_pole'
// 'gumdrop_sea' is 4 units from 'candycane_forest'
// 'hawaii' is 7 units from 'gumdrop_sea'

// The elves need help building a type that will take their route string and calculate how much fuel is needed to travel between each destination.

// Answer
type TrimLeft<
  Str extends string,
  Char extends string,
> = Str extends `${Char}${infer Tail}` ? TrimLeft<Tail, Char> : Str;

type TrimRight<
  Str extends string,
  Char extends string,
> = Str extends `${infer Head}${Char}` ? TrimRight<Head, Char> : Str;

type Trim<Str extends string, Char extends string> = TrimLeft<
  TrimRight<Str, Char>,
  Char
>;

type NextLocation<
  Route extends string,
  Fuel extends "⛽️"[] = [],
> = Route extends `-${infer Tail}`
  ? NextLocation<Tail, [...Fuel, "⛽️"]>
  : Route extends `${infer Head}-${infer Tail}`
    ? { location: Head; fuel: Fuel["length"]; remainingRoute: `-${Tail}` }
    : { location: Route; fuel: Fuel["length"]; remainingRoute: "" };

type _GetRoute<
  Route extends string,
  Locations extends [string, number][] = [],
> = Route extends ""
  ? Locations
  : NextLocation<Route> extends {
        location: infer L extends string;
        fuel: infer F extends number;
        remainingRoute: infer R extends string;
      }
    ? _GetRoute<R, [...Locations, [L, F]]>
    : never;

type GetRoute<Route extends string> = _GetRoute<Trim<Route, "-">>;

// Tests
import type { Expect, Equal } from "type-testing";

type t0_actual =
  GetRoute<"north_pole--candycane_forest----gumdrop_sea-------hawaii">; // =>
type t0_expected = [
  // =>
  ["north_pole", 0],
  ["candycane_forest", 2],
  ["gumdrop_sea", 4],
  ["hawaii", 7],
];
type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = GetRoute<"a-b-c-d">; // =>
type t1_expected = [
  // =>
  ["a", 0],
  ["b", 1],
  ["c", 1],
  ["d", 1],
];
type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = GetRoute<"🎅--🎄---🏠----🤶">; // =>
type t2_expected = [
  // =>
  ["🎅", 0],
  ["🎄", 2],
  ["🏠", 3],
  ["🤶", 4],
];
type t2 = Expect<Equal<t2_actual, t2_expected>>;

type t3_actual = GetRoute<"">; // =>
type t3_expected = []; // =>
type t3 = Expect<Equal<t3_actual, t3_expected>>;

type t4_actual = GetRoute<"north_pole">; // =>
type t4_expected = [["north_pole", 0]]; // =>
type t4 = Expect<Equal<t4_actual, t4_expected>>;

type t5_actual = GetRoute<"a--b----c-d---e">; // =>
type t5_expected = [
  // =>
  ["a", 0],
  ["b", 2],
  ["c", 4],
  ["d", 1],
  ["e", 3],
];
type t5 = Expect<Equal<t5_actual, t5_expected>>;

type t6_actual = GetRoute<"--a-b">; // =>
type t6_expected = [["a", 0], ["b", 1]]; // =>
type t6 = Expect<Equal<t6_actual, t6_expected>>;

type t7_actual = GetRoute<"a-b--">; // =>
type t7_expected = [["a", 0], ["b", 1]]; // =>
type t7 = Expect<Equal<t7_actual, t7_expected>>;

type t8_actual = GetRoute<"north pole-candy.cane">; // =>
type t8_expected = [["north pole", 0], ["candy.cane", 1]]; // =>
type t8 = Expect<Equal<t8_actual, t8_expected>>;

type t9_actual =
  GetRoute<"a--------------------------------------------------b">; // =>
type t9_expected = [["a", 0], ["b", 50]]; // =>
type t9 = Expect<Equal<t9_actual, t9_expected>>;

type t10_actual = GetRoute<"a--a-a---a">; // =>
type t10_expected = [["a", 0], ["a", 2], ["a", 1], ["a", 3]]; // =>
type t10 = Expect<Equal<t10_actual, t10_expected>>;

// @ts-expect-error should not be a generic array
type e0 = Expect<Equal<t0_actual, Array<[string, number]>>>;

// @ts-expect-error should only accept string input
type e1 = GetRoute<123>;
