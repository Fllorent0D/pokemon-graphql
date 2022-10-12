import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereUniqueInput } from '../pokemon-game-indices/pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    where!: pokemon_game_indicesWhereUniqueInput;
}
