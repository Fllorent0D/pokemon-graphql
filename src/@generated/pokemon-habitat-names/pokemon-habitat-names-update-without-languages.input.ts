import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_habitatsUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput } from '../pokemon-habitats/pokemon-habitats-update-one-required-without-pokemon-habitat-names-nested.input';

@InputType()
export class pokemon_habitat_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_habitatsUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput, {nullable:true})
    pokemon_habitats?: pokemon_habitatsUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput;
}
