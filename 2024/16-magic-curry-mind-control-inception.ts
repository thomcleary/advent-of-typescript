// Magic Curry Mind Control Inception

// [The reindeer have made it clear: they will expose 💋Crystal Claus for her affair with 🪩Jamie Glittergum to 🎅Santa if 💋Crystal can't convince 🎅Santa how to give the reindeer a raise.]

// [🎅Santa] Across the whole internet, all I see is adult children!
// WHAT'S IT GOING TO TAKE TO GET PIPELINE OPERATORS INTO THIS FORSAKEN LANGUAGE!?!

// [💋Crystal] Dear, stop reading the Node.JS release notes.
// The TC-39 is gonna keep pipeline operators at stage 2 for the next 100 years at this point.
// Come. Have some some dinner. I've made curry.

// [The two eat dinner together, but 🎅Santa starts to feel a little strange..]

// [💋Crystal] Are you feeling alright, Dear?

// [🎅Santa] No, in fact.. I'm not. I'm feeling a bit fuzzy.

// [💋Crystal] That's great to hear.

// [🎅Santa, eyelids getting heavy] What?

// [💋Crystal] I had a friend of mine, 🪩Jamie Glitterglum, brew a magic memory implanting glitter potion.
// This will all be over soon, Dear.

// [🎅Santa, fading] How could you... do... that...

// [💋Crystal] You'll fall asleep, and then I'm going to have a little talk with your subconscious mind.
// Christopher Nolan can't hold a candle to what 🪩Jamie can do.

// Well that took a dark turn.
// You're an accessory to the crime, now. Congrats.
// Now you have no choice but to help 💋Crystal with the coverup.

// The originalCurry had to have some special ingredients added to it, but 💋Crystal couldn't be sure if 🎅Santa would see her cooking.
// So, to avoid raising suspicion, she had to find a way to be able to add the ingredients at different times.

// Tests
const originalCurry = (
  ingredient1: number,
  ingredient2: string,
  ingredient3: boolean,
  ingredient4: Date,
) => true;

const spikedCurry = DynamicParamsCurrying(originalCurry);

// Direct call
const t0 = spikedCurry(0, "Ziltoid", true, new Date());

// Partially applied
const t1 = spikedCurry(1)("The", false, new Date());

// Another partial
const t2 = spikedCurry(0, "Omniscient", true)(new Date());

// You can keep callin' until the cows come home: it'll wait for the last argument
const t3 = spikedCurry()()()()(0, "Captain", true)()()()(new Date());

// currying is ok
const t4 = spikedCurry(0, "Spectacular", true);

// @ts-expect-error arguments provided in the wrong order
const e0 = spikedCurry("Nebulo9", 0, true)(new Date());

// Answer
declare function DynamicParamsCurrying<T extends (...args: any[]) => any>(
  fn: T,
): Curry<T>;

type Curry<T extends (...args: any[]) => any> = <
  P extends Partial<Parameters<T>> & { length: number },
>(
  ...args: P
) => P["length"] extends Parameters<T>["length"]
  ? ReturnType<T>
  : Curry<(...args: Drop<Parameters<T>, P["length"]>) => ReturnType<T>>;

type Drop<
  T extends any[],
  P extends number,
  Acc extends "+"[] = [],
> = Acc["length"] extends P
  ? T
  : T extends [infer _, ...infer Rest]
    ? Drop<Rest, P, [...Acc, "+"]>
    : T;
