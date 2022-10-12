import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-egg-groups-nested.input';

@InputType()
export class pokemon_egg_groupsUpdateWithoutEgg_groupsInput {

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput;
}
