import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereUniqueInput } from '../pokemon-game-indices/pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateInput } from '../pokemon-game-indices/pokemon-game-indices-create.input';
import { pokemon_game_indicesUpdateInput } from '../pokemon-game-indices/pokemon-game-indices-update.input';

@ArgsType()
export class UpsertOnepokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    where!: pokemon_game_indicesWhereUniqueInput;

    @Field(() => pokemon_game_indicesCreateInput, {nullable:false})
    @Type(() => pokemon_game_indicesCreateInput)
    create!: pokemon_game_indicesCreateInput;

    @Field(() => pokemon_game_indicesUpdateInput, {nullable:false})
    @Type(() => pokemon_game_indicesUpdateInput)
    update!: pokemon_game_indicesUpdateInput;
}
