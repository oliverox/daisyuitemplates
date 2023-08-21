export function getInitialsFromName(name:string) {
  return name.split(' ').map(part => part[0]).join('').slice(0,2);
}