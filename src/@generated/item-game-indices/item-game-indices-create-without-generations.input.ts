import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutItem_game_indicesInput } from '../items/items-create-nested-one-without-item-game-indices.input';

@InputType()
export class item_game_indicesCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => itemsCreateNestedOneWithoutItem_game_indicesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_game_indicesInput;
}
