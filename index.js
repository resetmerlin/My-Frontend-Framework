import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", User({ firstName, lastName }));

console.log(User({ firstName, lastName }));
