import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-egg-groups.input';

@InputType()
export class pokemon_egg_groupsCreateWithoutEgg_groupsInput {

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput;
}
