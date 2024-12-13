// The Reindeer Plan Their Attack

// [❤️Cupid] WHEN I"M DONE WITH HIM THERE WON"T BE NOTHIN" LEFT!!!

// [💨Dasher] Bro, I want the same things you do but you gotta take a chill pill.

// [❤️Cupid] I"M READY TO EXPLODE ON HIS CHIMNEY-CLIMBIN" ASS.

// [💃Dancer] Look, ❤️Cupid.
// Here's the thing.
// We are close.
// We have 💋Crystal Right where we want her.
// We can use her to get what we want.
// And, after all, we'll be doing her a favor because she's also getting what she wants - to keep things about her and 🪩Jamie quiet.

// [❤️Cupid] OUR TERMS BETTER BE BULLETPROOF BECAUSE THAT COOKIE-STEALING MANIAC IS GONNA FIND A WAY TO WEASLE OUT OF IT.

// [💃Dancer] Yes. Absolutely. Let's make sure no term can conflict with any other.
// Think of it like designing a GraphQL Schema - no room for innovation.

// The reindeer are almost ready to make their demands.
// Help the reindeer make terms for their demands in such a way that no term can be conflated with any other term.

// Answer
type Demand<in out T> = {
  demand: T;
};
// type Covariant<V> = () => V;
// V is out

// type Contravariant<V> = (v: V) => void;
// V is in

// type Invariant<V> = (v: V) => V;
// V is in and out

// Tests
import type { Equal, Expect } from "type-testing";

declare let demand1: Demand<unknown>;
declare let demand2: Demand<string>;
declare let demand3: Demand<"Immediate 4% Pay Increase">;
declare let demand4: Demand<"3 Days Paid Time Off Per Year">;

type t1 = Expect<Equal<typeof demand1, { demand: unknown }>>;
demand1 = demand1; // ✅
// @ts-expect-error
demand1 = demand2;
// @ts-expect-error
demand1 = demand3;
// @ts-expect-error
demand1 = demand4;

type t2 = Expect<Equal<typeof demand2, { demand: string }>>;
// @ts-expect-error
demand2 = demand1;
demand2 = demand2; // ✅
// @ts-expect-error
demand2 = demand3;
// @ts-expect-error
demand2 = demand4;

type t3 = Expect<
  Equal<typeof demand3, { demand: "Immediate 4% Pay Increase" }>
>;
// @ts-expect-error
demand3 = demand1;
// @ts-expect-error
demand3 = demand2;
demand3 = demand3; // ✅
// @ts-expect-error
demand3 = demand4;

type t4 = Expect<
  Equal<typeof demand4, { demand: "3 Days Paid Time Off Per Year" }>
>;
// @ts-expect-error
demand4 = demand1;
// @ts-expect-error
demand4 = demand2;
// @ts-expect-error
demand4 = demand3;
demand4 = demand4; // ✅
