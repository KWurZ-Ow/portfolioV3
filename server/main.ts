import { Meteor } from "meteor/meteor";
import { Creations } from "../imports/db/Creations";

const SEED_USERNAME = 'admin';
const SEED_PASSWORD = 'aaa';

Meteor.startup(async () => {
  console.log(
    "๐ ๐ตโโโโโ ๐ด โโโโโ๐ทโ โโโโ๐นโโโโโ ๐ซ โโโโโ๐ดโโโโโ ๐ฑโโโโโ ๐ฎ โโโโโ๐ดโโโโโ"
  );
  if (Creations.find().count() === 0) {
    Creations.insert({name: "placeholder creation", img: "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"})
  }
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
