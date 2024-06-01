import ENGLISH_DESCRIPTION from "@/data/en";
import Description from "@/model/Description";

function getDescription(key: string): Description {
  const movement = ENGLISH_DESCRIPTION.findLast((x) => x.key === key);
  if (!movement) return {} as Description;

  return {
    useSymbol: false,
    name: movement.pokemon,
    description: movement.description,
  };
}

export default getDescription;
