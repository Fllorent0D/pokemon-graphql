import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput } from '../pokedexes/pokedexes-update-one-required-without-pokemon-dex-numbers-nested.input';

@InputType()
export class pokemon_dex_numbersUpdateWithoutPokemon_speciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_number?: IntFieldUpdateOperationsInput;

    @Field(() => pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput;
}
