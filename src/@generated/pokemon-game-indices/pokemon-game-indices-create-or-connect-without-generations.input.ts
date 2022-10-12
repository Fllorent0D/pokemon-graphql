import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateWithoutGenerationsInput } from './pokemon-game-indices-create-without-generations.input';

@InputType()
export class pokemon_game_indicesCreateOrConnectWithoutGenerationsInput {

    @Field(() => pokemon_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    where!: pokemon_game_indicesWhereUniqueInput;

    @Field(() => pokemon_game_indicesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => pokemon_game_indicesCreateWithoutGenerationsInput)
    create!: pokemon_game_indicesCreateWithoutGenerationsInput;
}
