import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesUncheckedCreateNestedManyWithoutPokemon_habitatsInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-pokemon-habitats.input';

@InputType()
export class pokemon_habitatsUncheckedCreateWithoutPokemon_habitat_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutPokemon_habitatsInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutPokemon_habitatsInput;
}
