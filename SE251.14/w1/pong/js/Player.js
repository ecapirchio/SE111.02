class Player
{
    constructor(name, score = 0, highScore = 0, pad = 0)
    {
        this.name = name;
        this.score = score;
        this.highScore = highScore;
        this.pad = pad;
    }
}

// Example usage:
const player1 = new Player("name");
console.log(player1.name);       // Output: Name
console.log(player1.score);      // Output: 0 (default value)
console.log(player1.highScore);  // Output: 0 (default value)
console.log(player1.pad);        // Output: 0 (default value)
      