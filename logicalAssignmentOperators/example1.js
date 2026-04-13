// Practice values
let username = null;
let nickname = "";
let isLoggedIn = true;
let score = 0;

// 🔸 Nullish Coalescing (??)
// Only falls back if value is null or undefined
let displayName = username ?? "Guest";
console.log("Display Name (??):", displayName);

// 🔸 Logical OR (||)
// Falls back on ANY falsy value (null, undefined, "", 0, false)
let nameWithOr = username || "Guest";
console.log("Name with ||:", nameWithOr);

// 🔸 Difference example
let nicknameDisplay = nickname ?? "No nickname"; // "" is NOT null → stays ""
let nicknameWithOr = nickname || "No nickname"; // "" is falsy → replaced

console.log("Nickname with ??:", nicknameDisplay);
console.log("Nickname with ||:", nicknameWithOr);

// 🔸 Logical AND (&&)
// Executes right side ONLY if left side is true
isLoggedIn && console.log("User is logged in");

// 🔸 Short-circuiting with OR (||)
// Stops when it finds the first truthy value
let result = score || 100;
console.log("Score or default:", result);

// 🔸 Short-circuiting with AND (&&)
// Stops when it finds the first falsy value
let check = isLoggedIn && score && "All good!";
console.log("AND chain result:", check);
