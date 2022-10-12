import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesCreateInput } from '../pokemon-game-indices/pokemon-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesCreateInput, {nullable:false})
    @Type(() => pokemon_game_indicesCreateInput)
    data!: pokemon_game_indicesCreateInput;
}
