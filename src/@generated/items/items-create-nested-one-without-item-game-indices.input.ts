import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_game_indicesInput } from './items-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_game_indicesInput } from './items-create-or-connect-without-item-game-indices.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutItem_game_indicesInput {

    @Field(() => itemsCreateWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_game_indicesInput)
    create?: itemsCreateWithoutItem_game_indicesInput;

    @Field(() => itemsCreateOrConnectWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_game_indicesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_game_indicesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
