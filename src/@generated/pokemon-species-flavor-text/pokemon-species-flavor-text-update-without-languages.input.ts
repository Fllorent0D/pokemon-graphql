import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput } from '../versions/versions-update-one-required-without-pokemon-species-flavor-text-nested.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-species-flavor-text-nested.input';

@InputType()
export class pokemon_species_flavor_textUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput;
}
