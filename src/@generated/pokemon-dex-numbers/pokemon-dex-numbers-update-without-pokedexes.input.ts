import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-dex-numbers-nested.input';

@InputType()
export class pokemon_dex_numbersUpdateWithoutPokedexesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_number?: IntFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput;
}
