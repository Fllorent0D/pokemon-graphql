import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesCreateWithoutItemsInput } from './item-game-indices-create-without-items.input';
import { Type } from 'class-transformer';
import { item_game_indicesCreateOrConnectWithoutItemsInput } from './item-game-indices-create-or-connect-without-items.input';
import { item_game_indicesUpsertWithWhereUniqueWithoutItemsInput } from './item-game-indices-upsert-with-where-unique-without-items.input';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { item_game_indicesUpdateWithWhereUniqueWithoutItemsInput } from './item-game-indices-update-with-where-unique-without-items.input';
import { item_game_indicesUpdateManyWithWhereWithoutItemsInput } from './item-game-indices-update-many-with-where-without-items.input';
import { item_game_indicesScalarWhereInput } from './item-game-indices-scalar-where.input';

@InputType()
export class item_game_indicesUncheckedUpdateManyWithoutItemsNestedInput {

    @Field(() => [item_game_indicesCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesCreateWithoutItemsInput)
    create?: Array<item_game_indicesCreateWithoutItemsInput>;

    @Field(() => [item_game_indicesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_game_indicesCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_game_indicesUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<item_game_indicesUpsertWithWhereUniqueWithoutItemsInput>;

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

    @Field(() => [item_game_indicesUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<item_game_indicesUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_game_indicesUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => item_game_indicesUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<item_game_indicesUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [item_game_indicesScalarWhereInput], {nullable:true})
    @Type(() => item_game_indicesScalarWhereInput)
    deleteMany?: Array<item_game_indicesScalarWhereInput>;
}
