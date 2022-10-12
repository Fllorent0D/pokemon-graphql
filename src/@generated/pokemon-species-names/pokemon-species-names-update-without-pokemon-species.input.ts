import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_species_namesNestedInput } from '../languages/languages-update-one-required-without-pokemon-species-names-nested.input';

@InputType()
export class pokemon_species_namesUpdateWithoutPokemon_speciesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    genus?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_species_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_species_namesNestedInput;
}
