import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-species-flavor-summaries-nested.input';

@InputType()
export class pokemon_species_flavor_summariesUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput;
}
