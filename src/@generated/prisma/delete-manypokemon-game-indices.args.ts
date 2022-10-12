import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereInput } from '../pokemon-game-indices/pokemon-game-indices-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    @Type(() => pokemon_game_indicesWhereInput)
    where?: pokemon_game_indicesWhereInput;
}
