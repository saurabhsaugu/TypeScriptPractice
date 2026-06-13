//1. Numaric Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let move: Direction = Direction.Up;
console.log(`Move: ${Direction[move]}`);
console.log(Direction.Up);

//2. String Enum
enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Pending = "PENDING"
}
let currentStatus: Status = Status.Success;
console.log(`Current Status: ${currentStatus}`);
console.log(Status.Error);

//3. Heterogeneous Enum
enum Mixed {
    No = 0,
    Yes = "YES"
}
let answer: Mixed = Mixed.Yes;
console.log(`Answer: ${answer}`);
console.log(Mixed.No);
