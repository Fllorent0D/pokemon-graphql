import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesUpdateInput } from '../pokemon-game-indices/pokemon-game-indices-update.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesWhereUniqueInput } from '../pokemon-game-indices/pokemon-game-indices-where-unique.input';

@ArgsType()
export class UpdateOnepokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesUpdateInput, {nullable:false})
    @Type(() => pokemon_game_indicesUpdateInput)
    data!: pokemon_game_indicesUpdateInput;

    @Field(() => pokemon_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    where!: pokemon_game_indicesWhereUniqueInput;
}
