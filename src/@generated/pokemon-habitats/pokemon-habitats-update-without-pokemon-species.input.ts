import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput } from '../pokemon-habitat-names/pokemon-habitat-names-update-many-without-pokemon-habitats-nested.input';

@InputType()
export class pokemon_habitatsUpdateWithoutPokemon_speciesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput;
}
