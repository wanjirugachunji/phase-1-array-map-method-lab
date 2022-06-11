const tutorials = [
];

const titleCased = () => {
  return tutorials
  return tutorials.map((tutorial)=>{
    const temps = tutorial.split(' ');
    const toMerge = temps.map((word)=>{
      return word[0].toUpperCase() + word.substring(1);
    })
    return toMerge.join(' ')  
  })
}

