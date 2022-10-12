import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput } from '../languages/languages-update-one-required-without-pokemon-habitat-names-nested.input';

@InputType()
export class pokemon_habitat_namesUpdateWithoutPokemon_habitatsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput;
}
