import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesCreateNestedManyWithoutPokemon_habitatsInput } from '../pokemon-habitat-names/pokemon-habitat-names-create-nested-many-without-pokemon-habitats.input';
import { pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput } from '../pokemon-species/pokemon-species-create-nested-many-without-pokemon-habitats.input';

@InputType()
export class pokemon_habitatsCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_habitat_namesCreateNestedManyWithoutPokemon_habitatsInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesCreateNestedManyWithoutPokemon_habitatsInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput;
}
