import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesCreateWithoutGenerationsInput } from './location-game-indices-create-without-generations.input';
import { Type } from 'class-transformer';
import { location_game_indicesCreateOrConnectWithoutGenerationsInput } from './location-game-indices-create-or-connect-without-generations.input';
import { location_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput } from './location-game-indices-upsert-with-where-unique-without-generations.input';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { location_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput } from './location-game-indices-update-with-where-unique-without-generations.input';
import { location_game_indicesUpdateManyWithWhereWithoutGenerationsInput } from './location-game-indices-update-many-with-where-without-generations.input';
import { location_game_indicesScalarWhereInput } from './location-game-indices-scalar-where.input';

@InputType()
export class location_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [location_game_indicesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateWithoutGenerationsInput)
    create?: Array<location_game_indicesCreateWithoutGenerationsInput>;

    @Field(() => [location_game_indicesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<location_game_indicesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [location_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<location_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput>;

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

    @Field(() => [location_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<location_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [location_game_indicesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => location_game_indicesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<location_game_indicesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [location_game_indicesScalarWhereInput], {nullable:true})
    @Type(() => location_game_indicesScalarWhereInput)
    deleteMany?: Array<location_game_indicesScalarWhereInput>;
}
