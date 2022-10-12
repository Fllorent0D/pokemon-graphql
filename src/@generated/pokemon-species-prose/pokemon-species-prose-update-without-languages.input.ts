import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_species_proseNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-species-prose-nested.input';

@InputType()
export class pokemon_species_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_species_proseNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_species_proseNestedInput;
}
