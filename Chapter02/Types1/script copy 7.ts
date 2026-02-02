// import { Point3d, Point } from "./lib";

import * as localGeo from "./lib";

const p2 = new localGeo.Point(5, 5);
const p3 = new localGeo.Point(10, 10);
const p4 = new localGeo.Point3d(10, 10, 15);

console.log(p2);
console.log(p2.x);

console.log(localGeo.Point.DIMENSIONS);
console.log(localGeo.Point3d.DIMENSIONS);

// console.log(p2.y);
