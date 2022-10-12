import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput } from '../languages/languages-update-one-required-without-pokemon-species-flavor-summaries-nested.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-species-flavor-summaries-nested.input';

@InputType()
export class pokemon_species_flavor_summariesUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_summariesNestedInput;
}
