import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_species_namesNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-species-names-nested.input';

@InputType()
export class pokemon_species_namesUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    genus?: NullableStringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_species_namesNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_species_namesNestedInput;
}
