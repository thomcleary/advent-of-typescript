// The Reindeer Hatch A Plan

// [🌟Vixen tells the other reindeer of his plan to use Mrs. Claus' affair with 🪩Jamie as leverage to get the reindeer fair pay.]

// [🦌Prancer] Holy crapy, 🌟Vixen, this is going to change everything for us!

// [☄️Comet] It ain't gonna change a damn thing if we don't get these priority flags sorted out!

// [🔴Rudolph] Why is it that every time we have work to do you all come up with some crazy plan like this instead of doing work??

// [🌟Vixen] This one is huge, though!
// This is the motherload!!

// [🔴Rudolph] We're gonna be in a motherload of pain if we can't finish writing this enum!

// [🌟Vixen] Ok ok ok ok.
// Let's just get it done.
// What's the rules we got from the elves?
// Something about bitwise operators?
// I swear, those little jerks just invent rules to mess with us.

// Most TypeScript users and experts agree that you should avoid using TypeScript Enums.
// But there is one very specific thing they're really valuable for: flags!

// The staff at the North Pole use bitwise enum flags to organize the different gift categories.

// Here are the rules to the logic:
// - Coal, Train, Bicycle, SuccessorToTheNintendoSwitch, TikTokPremium Vape are all unique gifts
// - Traditional can be either Train or Bycicle
// - OnTheMove can be any of Coal, Bicycle, TikTokPremium, or Vape
// - OnTheCouch is like OnTheMove except instead of Bicycle it's got SuccessorToTheNintendoSwitch

// Note: DO NOT simply copy the literal values for each flag from the tests.
// Instead, think about the rules and create a system of bitwise enum flags that will satisfy the tests.

// Answer
enum Gift {
  Coal = 0,
  Train = 1,
  Bicycle = 1 << 1,
  SuccessorToTheNintendoSwitch = 1 << 2,
  TikTokPremium = 1 << 3,
  Vape = 1 << 4,
  Traditional = Gift.Train | Gift.Bicycle,
  OnTheMove = Gift.Bicycle | Gift.TikTokPremium | Gift.Vape,
  OnTheCouch = Gift.SuccessorToTheNintendoSwitch |
    Gift.TikTokPremium |
    Gift.Vape,
}

// Tests
const test = <F extends Gift>(flag: F) => flag;

test<Gift.Coal>(0);
test<Gift.Train>(1);
test<Gift.Bicycle>(2);
test<Gift.SuccessorToTheNintendoSwitch>(4);
test<Gift.TikTokPremium>(8);
test<Gift.Vape>(16);
test<Gift.Traditional>(3);
test<Gift.OnTheMove>(26);
test<Gift.OnTheCouch>(28);

// @ts-expect-error
test<Gift.Coal>(10);
// @ts-expect-error
test<Gift.Train>(11);
// @ts-expect-error
test<Gift.Bicycle>(12);
// @ts-expect-error
test<Gift.SuccessorToTheNintendoSwitch>(14);
// @ts-expect-error
test<Gift.TikTokPremium>(18);
// @ts-expect-error
test<Gift.Vape>(116);
// @ts-expect-error
test<Gift.Traditional>(13);
// @ts-expect-error
test<Gift.OnTheMove>(126);
// @ts-expect-error
test<Gift.OnTheCouch>(124);
