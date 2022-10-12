import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-game-indices-nested.input';

@InputType()
export class pokemon_game_indicesUpdateWithoutGenerationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput;
}
