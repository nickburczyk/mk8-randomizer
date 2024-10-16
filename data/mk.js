import {
  drivers,
  karts,
  wheels,
  gliders,
  ccSpeed,
  computerDifficulty,
  itemsOptions,
  weapons,
  cups,
} from "./";

// this takes a limit (number) as an argument,
// then returns a new random number between 0 and that limit
function randomize(range = 1 /* number */) {
  const random = Math.random();
  return Math.round(random * range);
}

// this takes any array of items and returns a random item from that array.
function getRandomItem(array) {
  const length = array.length;
  return array[randomize(length - 1)];
}

function newPlayer() {
  return {
    driver: getRandomItem(drivers),
    kart: getRandomItem(karts),
    wheels: getRandomItem(wheels),
    glider: getRandomItem(gliders),
  };
}

function getRandomWeapons() {
  const len = weapons.length;
  const number = Math.round(Math.random() * len);

  const weaponsCopy = [...weapons];
  const selected = [];

  for (let i = 1; i <= number; i++) {
    /**
     * 1. Get a random item from available weapons
     * 2. Add it to our selected array
     * 3. Remove that item from available weapons
     */
    const randomIndex = Math.round(Math.random() * weaponsCopy.length);
    const itemToAdd = weaponsCopy[randomIndex];
    if (itemToAdd) {
      selected.push(itemToAdd);
      weaponsCopy.splice(randomIndex, 1);
    }
  }
  return selected;
}

export function newRules() {
  const itemsRule = getRandomItem(itemsOptions);

  let customWeapons;
  if (itemsRule === "Custom") {
    customWeapons = getRandomWeapons();
  }
  return {
    ccSpeed: getRandomItem(ccSpeed),
    computer: getRandomItem(computerDifficulty),
    itemsRule,
    customWeapons,
    teams: Math.random() > 0.5 ? "Teams" : "No teams",
  };
}

export function newGp() {
  const speed = getRandomItem(ccSpeed);
  const cup = getRandomItem(cups);

  return {
    speed,
    cup,
  };
}
// HINT FOR GETTING THE NUMBER OF PLAYERS:
// https://www.codecademy.com/article/getting-user-input-in-node-js

export function newGame(numberOfPlayers = 1) {
  if (isNaN(numberOfPlayers)) {
    // TODO: Make this a loop that allows re-entry
    console.warn("ERROR: Give a number. Dont try with letters.");
    numberOfPlayers = 1;
  }

  if (numberOfPlayers > 4) {
    // TODO: Make invalid entries a loop that asks again
    console.warn(
      "ERROR: too big. 4 is the max number. giving you back just one. nice try guys."
    );
    numberOfPlayers = 1;
  }

  const players = [];

  for (let i = 1; i <= numberOfPlayers; i++) {
    const player = newPlayer();
    const playerWithId = { ...player, id: i };
    players.push(playerWithId);
  }

  return {
    players,
  };
}
