import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesCreateWithoutLocationsInput } from './location-game-indices-create-without-locations.input';
import { Type } from 'class-transformer';
import { location_game_indicesCreateOrConnectWithoutLocationsInput } from './location-game-indices-create-or-connect-without-locations.input';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';

@InputType()
export class location_game_indicesUncheckedCreateNestedManyWithoutLocationsInput {

    @Field(() => [location_game_indicesCreateWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateWithoutLocationsInput)
    create?: Array<location_game_indicesCreateWithoutLocationsInput>;

    @Field(() => [location_game_indicesCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<location_game_indicesCreateOrConnectWithoutLocationsInput>;

    @Field(() => [location_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => location_game_indicesWhereUniqueInput)
    connect?: Array<location_game_indicesWhereUniqueInput>;
}
