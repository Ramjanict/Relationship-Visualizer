import { create } from "zustand";

export interface Relation {
  id: number;
  relation: string;
}

export interface Person {
  id: number;
  name: string;
  age: number;
  relations: Relation[];
}

interface PersonState {
  persons: Person[];
  setPersons: (text: string) => void;
}

export const usePersonStore = create<PersonState>((set) => ({
  persons: [],
  setPersons: (text) => {
    try {
      const objects: string[] = [];
      let depth = 0;
      let current = "";

      for (const char of text) {
        if (char === "{") depth++;
        if (depth > 0) current += char;
        if (char === "}") {
          depth--;
          if (depth === 0 && current.trim()) {
            objects.push(current);
            current = "";
          }
        }
      }

      const parsed: Person[] = [];

      for (const raw of objects) {
        const jsonLike = raw
          .replace(/(\w+)\s*:/g, '"$1":')
          .replace(/“|”|‘|’/g, '"')
          .replace(/'/g, '"')
          .replace(/,\s*}/g, "}")
          .replace(/,\s*]/g, "]");

        try {
          const obj = JSON.parse(jsonLike);

          if (
            typeof obj.id === "number" &&
            typeof obj.name === "string" &&
            typeof obj.age === "number" &&
            Array.isArray(obj.relations)
          ) {
            parsed.push(obj);
          }
        } catch {}
      }

      set({ persons: parsed });
    } catch (err) {
      console.error(err);
      set({ persons: [] });
    }
  },
}));
