
// Enums

// String Enums
enum size {
  XS = 'xs',
  S = 's',
  M = 'm',
  XL = 'xl'
}

function sayTShirtSize(size: size) {
    console.log('My T-shirt size is ' + size)
}

sayTShirtSize(size.XL)


// Numeric Enums

enum UserResponse {
    yes,
    no
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
  }