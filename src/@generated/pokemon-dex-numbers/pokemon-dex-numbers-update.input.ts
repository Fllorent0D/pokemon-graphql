import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput } from '../pokedexes/pokedexes-update-one-required-without-pokemon-dex-numbers-nested.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-dex-numbers-nested.input';

@InputType()
export class pokemon_dex_numbersUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_number?: IntFieldUpdateOperationsInput;

    @Field(() => pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput;
}
