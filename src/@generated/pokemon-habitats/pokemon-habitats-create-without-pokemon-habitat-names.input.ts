import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput } from '../pokemon-species/pokemon-species-create-nested-many-without-pokemon-habitats.input';

@InputType()
export class pokemon_habitatsCreateWithoutPokemon_habitat_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput;
}
