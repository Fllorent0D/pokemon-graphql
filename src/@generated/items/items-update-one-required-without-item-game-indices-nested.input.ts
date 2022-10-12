import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_game_indicesInput } from './items-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_game_indicesInput } from './items-create-or-connect-without-item-game-indices.input';
import { itemsUpsertWithoutItem_game_indicesInput } from './items-upsert-without-item-game-indices.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutItem_game_indicesInput } from './items-update-without-item-game-indices.input';

@InputType()
export class itemsUpdateOneRequiredWithoutItem_game_indicesNestedInput {

    @Field(() => itemsCreateWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_game_indicesInput)
    create?: itemsCreateWithoutItem_game_indicesInput;

    @Field(() => itemsCreateOrConnectWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_game_indicesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_game_indicesInput;

    @Field(() => itemsUpsertWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => itemsUpsertWithoutItem_game_indicesInput)
    upsert?: itemsUpsertWithoutItem_game_indicesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => itemsUpdateWithoutItem_game_indicesInput)
    update?: itemsUpdateWithoutItem_game_indicesInput;
}
