import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesCreateWithoutLocationsInput } from './location-game-indices-create-without-locations.input';
import { Type } from 'class-transformer';
import { location_game_indicesCreateOrConnectWithoutLocationsInput } from './location-game-indices-create-or-connect-without-locations.input';
import { location_game_indicesUpsertWithWhereUniqueWithoutLocationsInput } from './location-game-indices-upsert-with-where-unique-without-locations.input';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { location_game_indicesUpdateWithWhereUniqueWithoutLocationsInput } from './location-game-indices-update-with-where-unique-without-locations.input';
import { location_game_indicesUpdateManyWithWhereWithoutLocationsInput } from './location-game-indices-update-many-with-where-without-locations.input';
import { location_game_indicesScalarWhereInput } from './location-game-indices-scalar-where.input';

@InputType()
export class location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput {

    @Field(() => [location_game_indicesCreateWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateWithoutLocationsInput)
    create?: Array<location_game_indicesCreateWithoutLocationsInput>;

    @Field(() => [location_game_indicesCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<location_game_indicesCreateOrConnectWithoutLocationsInput>;

    @Field(() => [location_game_indicesUpsertWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesUpsertWithWhereUniqueWithoutLocationsInput)
    upsert?: Array<location_game_indicesUpsertWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [location_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => location_game_indicesWhereUniqueInput)
    set?: Array<location_game_indicesWhereUniqueInput>;

    @Field(() => [location_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => location_game_indicesWhereUniqueInput)
    disconnect?: Array<location_game_indicesWhereUniqueInput>;

    @Field(() => [location_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => location_game_indicesWhereUniqueInput)
    delete?: Array<location_game_indicesWhereUniqueInput>;

    @Field(() => [location_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => location_game_indicesWhereUniqueInput)
    connect?: Array<location_game_indicesWhereUniqueInput>;

    @Field(() => [location_game_indicesUpdateWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesUpdateWithWhereUniqueWithoutLocationsInput)
    update?: Array<location_game_indicesUpdateWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [location_game_indicesUpdateManyWithWhereWithoutLocationsInput], {nullable:true})
    @Type(() => location_game_indicesUpdateManyWithWhereWithoutLocationsInput)
    updateMany?: Array<location_game_indicesUpdateManyWithWhereWithoutLocationsInput>;

    @Field(() => [location_game_indicesScalarWhereInput], {nullable:true})
    @Type(() => location_game_indicesScalarWhereInput)
    deleteMany?: Array<location_game_indicesScalarWhereInput>;
}
