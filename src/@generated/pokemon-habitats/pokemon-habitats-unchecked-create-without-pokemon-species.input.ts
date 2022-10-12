import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_habitat_namesUncheckedCreateNestedManyWithoutPokemon_habitatsInput } from '../pokemon-habitat-names/pokemon-habitat-names-unchecked-create-nested-many-without-pokemon-habitats.input';

@InputType()
export class pokemon_habitatsUncheckedCreateWithoutPokemon_speciesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_habitat_namesUncheckedCreateNestedManyWithoutPokemon_habitatsInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesUncheckedCreateNestedManyWithoutPokemon_habitatsInput;
}
