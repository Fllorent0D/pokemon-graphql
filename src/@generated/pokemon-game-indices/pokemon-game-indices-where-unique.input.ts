import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesPokemon_idGeneration_idCompoundUniqueInput } from './pokemon-game-indices-pokemon-id-generation-id-compound-unique.input';

@InputType()
export class pokemon_game_indicesWhereUniqueInput {

    @Field(() => pokemon_game_indicesPokemon_idGeneration_idCompoundUniqueInput, {nullable:true})
    pokemon_id_generation_id?: pokemon_game_indicesPokemon_idGeneration_idCompoundUniqueInput;
}
