import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsCreateNestedOneWithoutPokemon_habitat_namesInput } from '../pokemon-habitats/pokemon-habitats-create-nested-one-without-pokemon-habitat-names.input';

@InputType()
export class pokemon_habitat_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => pokemon_habitatsCreateNestedOneWithoutPokemon_habitat_namesInput, {nullable:false})
    pokemon_habitats!: pokemon_habitatsCreateNestedOneWithoutPokemon_habitat_namesInput;
}
