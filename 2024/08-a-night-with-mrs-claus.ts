// A Night With Mrs. Claus

// [🎅Santa's noticed that 💋Crystal Claus (his wife) is a little "on-edge" lately.
// He doesn't know why, but he wants to give her some much needed attention.
// 🎅Santa doesn't know about 💋Crystal's affair with 🪩Jamie Glitterglum]

// [🎅Santa, drawing 💋Crystal in for a kiss] 💋Crystal, my sweet, I thought we'd draw a bath and take the night to ourselves.

// [💋Crystal] Oh, I had plans dear.

// [🎅Santa] Surely you can reschedule?

// [💋Crystal] Um. I guess I could.

// [🎅Santa] Is that a new perfume you're wearing?
// Where have I smelled that before?
// It's heavenly.

// [💋Crystal, quickly and nervously] You know what!
// No problem!
// Let's get to it!

// [🎅Santa] Marvelous, now I just need to freshen up the environment.
// I think I'll turn on the mood lights, prepare some chocolate strawberries, and set the bath to 327.59 degrees.
// Not too cold, not too hot.
// And compliant with ISO 3103 standards for liquid enjoyment.

// Only 🎅Santa, only you could turn romance into a NASA launch checklist.
// Still, let's help 🎅Santa set the environment up for a night with Mrs. Claus.

// Answer
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      MOOD_LIGHTS: "true";
      BATH_TEMPERATURE: "327.59";
      STRAWBERRIES: "chocolate";
    }
  }
}

// Tests
import type { Expect, Equal } from "type-testing";

const { MOOD_LIGHTS } = process.env;
type t0_actual = typeof MOOD_LIGHTS; // =>
type t0_expected = "true"; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const { BATH_TEMPERATURE } = process.env;
type t1_actual = typeof BATH_TEMPERATURE; // =>
type t1_expected = "327.59"; // =>
type t1 = Expect<Equal<t1_actual, t1_expected>>;

const { STRAWBERRIES } = process.env;
type t2_actual = typeof STRAWBERRIES; // =>
type t2_expected = "chocolate"; // =>
type t2 = Expect<Equal<t2_actual, t2_expected>>;
