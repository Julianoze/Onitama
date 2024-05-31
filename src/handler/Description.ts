import ENGLISH_DESCRIPTION from "@/data/en";
import PORTUGUESE_DESCRIPTION from "@/data/pt";
import Description from "@/model/Description";

function getDescription(key: string): Description {
  const locale = undefined;
  const usePokemon = true;
  const data = !locale ? ENGLISH_DESCRIPTION : PORTUGUESE_DESCRIPTION;

  const movement = data.findLast((x) => x.key === key);
  if (!movement) return {} as Description;

  return {
    useSymbol: !usePokemon,
    name: usePokemon ? movement.pokemon : movement.name,
    description: movement.description,
  };
}

export default getDescription;
