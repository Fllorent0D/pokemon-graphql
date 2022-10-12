import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutPokemon_game_indicesNestedInput } from '../generations/generations-update-one-required-without-pokemon-game-indices-nested.input';
import { pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-game-indices-nested.input';

@InputType()
export class pokemon_game_indicesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutPokemon_game_indicesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutPokemon_game_indicesNestedInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput;
}
