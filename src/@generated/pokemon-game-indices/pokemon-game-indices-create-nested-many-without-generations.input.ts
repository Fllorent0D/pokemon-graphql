import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesCreateWithoutGenerationsInput } from './pokemon-game-indices-create-without-generations.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateOrConnectWithoutGenerationsInput } from './pokemon-game-indices-create-or-connect-without-generations.input';
import { pokemon_game_indicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';

@InputType()
export class pokemon_game_indicesCreateNestedManyWithoutGenerationsInput {

    @Field(() => [pokemon_game_indicesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateWithoutGenerationsInput)
    create?: Array<pokemon_game_indicesCreateWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<pokemon_game_indicesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    connect?: Array<pokemon_game_indicesWhereUniqueInput>;
}
