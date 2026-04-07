export type Solutions = {
    x1: number;
    x2: number | "Complex";
    x3: number | "Complex";
  };

export type Save = {
    a: number;
    b: number;
    c: number;
    d: number;
  };

export type Point = {
    x: number | "DNE";
    y: number | "DNE";
  };
  
export type Extrema = {
    max: Point;
    min: Point;
  };