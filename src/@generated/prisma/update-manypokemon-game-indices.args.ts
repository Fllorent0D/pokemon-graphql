import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesUpdateManyMutationInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesWhereInput } from '../pokemon-game-indices/pokemon-game-indices-where.input';

@ArgsType()
export class UpdateManypokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_game_indicesUpdateManyMutationInput)
    data!: pokemon_game_indicesUpdateManyMutationInput;

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    @Type(() => pokemon_game_indicesWhereInput)
    where?: pokemon_game_indicesWhereInput;
}
