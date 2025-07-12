console.clear();
// In JavaScript, polymorphism is typically achieved through
// method overriding, where a subclass provides its own implementation
//of a method that is already defined in the parent class.

//Super class
class Anime {
  constructor(title) {
    this.title = title;
  }

  playEpisode() {
    return "random episode";
  }
}

class Manga extends Anime {
  constructor(title) {
    super(title);
  }

  //overriding method
  playEpisode() {
    return "random Chapter";
  }
}

class LiveAction extends Anime {
  constructor(title) {
    super(title);
  }
  //overriding method
  playEpisode() {
    return "NOPE!!!"
  }
}

function playSomething(something) {
    console.log(`Name: ${something.title}`);
    console.log(`Play: ${something.playEpisode()}`);
}

const play1 = new Anime("That time I got reincarnated as a Slime");
playSomething(play1);
// Name: That time I got reincarnated as a Slime
// Play: random episode

let play2 = new Manga("ChainsawMAN");
playSomething(play2);
// Name: ChainsawMAN
// Play: random Chapter

let play3 = new LiveAction("Attack on Titan");
playSomething(play3);
// Name: Attack on Titan
// Play: NOPE!!!