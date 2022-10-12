import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput } from '../languages/languages-update-one-required-without-pokemon-species-flavor-text-nested.input';
import { versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput } from '../versions/versions-update-one-required-without-pokemon-species-flavor-text-nested.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-species-flavor-text-nested.input';

@InputType()
export class pokemon_species_flavor_textUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput;

    @Field(() => versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput;
}
