import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_game_indicesInput } from './items-create-without-item-game-indices.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_game_indicesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_game_indicesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_game_indicesInput)
    create!: itemsCreateWithoutItem_game_indicesInput;
}
