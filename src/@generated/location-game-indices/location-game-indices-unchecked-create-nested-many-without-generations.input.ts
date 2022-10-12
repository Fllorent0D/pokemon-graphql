import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesCreateWithoutGenerationsInput } from './location-game-indices-create-without-generations.input';
import { Type } from 'class-transformer';
import { location_game_indicesCreateOrConnectWithoutGenerationsInput } from './location-game-indices-create-or-connect-without-generations.input';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';

@InputType()
export class location_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput {

    @Field(() => [location_game_indicesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateWithoutGenerationsInput)
    create?: Array<location_game_indicesCreateWithoutGenerationsInput>;

    @Field(() => [location_game_indicesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<location_game_indicesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [location_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => location_game_indicesWhereUniqueInput)
    connect?: Array<location_game_indicesWhereUniqueInput>;
}
