import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsCreateNestedOneWithoutPokemon_egg_groupsInput } from '../egg-groups/egg-groups-create-nested-one-without-pokemon-egg-groups.input';
import { pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-egg-groups.input';

@InputType()
export class pokemon_egg_groupsCreateInput {

    @Field(() => egg_groupsCreateNestedOneWithoutPokemon_egg_groupsInput, {nullable:false})
    egg_groups!: egg_groupsCreateNestedOneWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput;
}
