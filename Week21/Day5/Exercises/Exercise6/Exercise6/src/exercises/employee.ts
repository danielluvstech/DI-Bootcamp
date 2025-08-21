// Base types
export type Person = { name: string; age: number };

// Job variants
export type ManagerJob = { position: "Manager"; department: string; teamSize?: number };
export type DeveloperJob = { position: "Developer"; department: string; languages?: string[] };

// Union + Intersection
export type Job = ManagerJob | DeveloperJob;
export type Employee = Person & Job;

// Type guards
export function isManager(e: Employee): e is Person & ManagerJob {
  return e.position === "Manager";
}
export function isDeveloper(e: Employee): e is Person & DeveloperJob {
  return e.position === "Developer";
}

// Exhaustiveness helper
function assertNever(x: never): never {
  throw new Error("Unhandled job type: " + JSON.stringify(x));
}

export function describeEmployee(e: Employee): string {
  if (isManager(e)) {
    const extra = e.teamSize != null ? `, leading a team of ${e.teamSize}` : "";
    return `${e.name} (age ${e.age}) is a Manager in ${e.department}${extra}.`;
  }
  if (isDeveloper(e)) {
    const extra = e.languages?.length ? `, working with ${e.languages.join(", ")}` : "";
    return `${e.name} (age ${e.age}) is a Developer in ${e.department}${extra}.`;
  }
  return assertNever(e); // ← removes the red squiggles and keeps things safe
}