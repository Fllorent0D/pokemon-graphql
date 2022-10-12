import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsCreateNestedOneWithoutItem_game_indicesInput } from '../generations/generations-create-nested-one-without-item-game-indices.input';
import { itemsCreateNestedOneWithoutItem_game_indicesInput } from '../items/items-create-nested-one-without-item-game-indices.input';

@InputType()
export class item_game_indicesCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generationsCreateNestedOneWithoutItem_game_indicesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutItem_game_indicesInput;

    @Field(() => itemsCreateNestedOneWithoutItem_game_indicesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_game_indicesInput;
}
