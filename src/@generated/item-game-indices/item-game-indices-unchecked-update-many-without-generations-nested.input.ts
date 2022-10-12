import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesCreateWithoutGenerationsInput } from './item-game-indices-create-without-generations.input';
import { Type } from 'class-transformer';
import { item_game_indicesCreateOrConnectWithoutGenerationsInput } from './item-game-indices-create-or-connect-without-generations.input';
import { item_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput } from './item-game-indices-upsert-with-where-unique-without-generations.input';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { item_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput } from './item-game-indices-update-with-where-unique-without-generations.input';
import { item_game_indicesUpdateManyWithWhereWithoutGenerationsInput } from './item-game-indices-update-many-with-where-without-generations.input';
import { item_game_indicesScalarWhereInput } from './item-game-indices-scalar-where.input';

@InputType()
export class item_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [item_game_indicesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesCreateWithoutGenerationsInput)
    create?: Array<item_game_indicesCreateWithoutGenerationsInput>;

    @Field(() => [item_game_indicesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<item_game_indicesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [item_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<item_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [item_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => item_game_indicesWhereUniqueInput)
    set?: Array<item_game_indicesWhereUniqueInput>;

    @Field(() => [item_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => item_game_indicesWhereUniqueInput)
    disconnect?: Array<item_game_indicesWhereUniqueInput>;

    @Field(() => [item_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => item_game_indicesWhereUniqueInput)
    delete?: Array<item_game_indicesWhereUniqueInput>;

    @Field(() => [item_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => item_game_indicesWhereUniqueInput)
    connect?: Array<item_game_indicesWhereUniqueInput>;

    @Field(() => [item_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<item_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [item_game_indicesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => item_game_indicesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<item_game_indicesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [item_game_indicesScalarWhereInput], {nullable:true})
    @Type(() => item_game_indicesScalarWhereInput)
    deleteMany?: Array<item_game_indicesScalarWhereInput>;
}
