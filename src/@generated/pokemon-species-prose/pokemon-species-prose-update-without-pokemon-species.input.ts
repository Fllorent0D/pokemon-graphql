import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_species_proseNestedInput } from '../languages/languages-update-one-required-without-pokemon-species-prose-nested.input';

@InputType()
export class pokemon_species_proseUpdateWithoutPokemon_speciesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_species_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_species_proseNestedInput;
}
