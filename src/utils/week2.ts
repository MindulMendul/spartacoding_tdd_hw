export const findMostFrequentChar=(str: string)=>{
  const radix=new Map();
  radix.set('a',0); radix.set('b',0); radix.set('c',0); radix.set('d',0); radix.set('e',0);
  radix.set('f',0); radix.set('g',0); radix.set('h',0); radix.set('i',0); radix.set('j',0);
  radix.set('k',0); radix.set('l',0); radix.set('m',0); radix.set('n',0); radix.set('o',0);
  radix.set('p',0); radix.set('q',0); radix.set('r',0); radix.set('s',0); radix.set('t',0);
  radix.set('u',0); radix.set('v',0); radix.set('w',0); radix.set('x',0); radix.set('y',0);
  radix.set('z',0);
  
  str.split("").map((e)=>{
    const c=e.toLowerCase();
    radix.set(c, radix.get(c)+1);
  });


}