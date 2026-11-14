import "dart:io";

void main() {
  // `dynamic` can hold any type and change type later.
  dynamic name = "hus";
  print(name);

  // `const` values are fixed at compile time.
  const fullName = "hussain";
  print(fullName);

  stdout.write("Enter your name: ");
  final String? nameInput = stdin.readLineSync();

  stdout.write("Enter your age: ");
  final String? ageInput = stdin.readLineSync();

  // `?? "unknown"` gives a fallback when the input is null.
  print("Hello, ${nameInput ?? "unknown"}! You are ${ageInput ?? "unknown"} years old.");
}
