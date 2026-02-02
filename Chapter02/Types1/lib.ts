export class Point {
  x: number = 0;
  protected y: number = 0;

  public static DIMENSIONS: number = 2;

  constructor(arg1: number, arg2: number) {
    this.x = arg1;
    this.y = arg2;
  }
}

export class Point3d extends Point {
  z: number = 0;
  public static override DIMENSIONS: number = 3;
  constructor(arg1: number, arg2: number, arg3: number) {
    super(arg1, arg2);
    this.z = arg3;
  }
}
