import { type SchemaTypeDefinition } from "sanity";
import fallenType from "./fallenType";
import memberType from "./memberType";
import officerType from "./officerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [memberType, officerType, fallenType],
};
