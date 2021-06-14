function isTouching(o1,o2){
  
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
    return true
}
else {
  return false
}}
function bo(o,w){
  
  if (o.x - w.x < w.width/2 + o.width/2
    && w.x - o.x < w.width/2 + o.width/2) {
  o.velocityX = o.velocityX * (-1);
  w.velocityX = w.velocityX * (-1);
}
if (o.y - w.y < w.height/2 + o.height/2
  && w.y - o.y < w.height/2 + o.height/2){
  o.velocityY = o.velocityY * (-1);
  w.velocityY = w.velocityY * (-1);
}

}