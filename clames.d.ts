export type ClassValue = string | number | boolean | undefined | null;
export type ClassObject = Record<string, any>;
export type ClassArray = Array<ClassValue>;
export type Arg = ClassValue | ClassArray | ClassObject;

const clames = (...args: Arg[]) => string;
export default clames;
