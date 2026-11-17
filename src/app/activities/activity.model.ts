export type Game = "shoulder" | "surfing";
export type Side = "left" | "right";
export type Level = number | { left: number; right: number };
export interface Plan {
  id: string;
  version: number;
  patientId: string;
  displayName: string;
  title: string;
  gameId: Game;
  config: {
    targets?: Level[];
    repetitions: number;
    holdMs: number;
    timeLimitMs: number;
    tolerance: number;
    sessionDurationMs: number;
    pointsPerHit: number;
    side?: Side;
  };
}
