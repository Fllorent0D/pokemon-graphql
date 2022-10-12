import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesWhereInput } from '../item-game-indices/item-game-indices-where.input';

@InputType()
export class Item_game_indicesListRelationFilter {

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    every?: item_game_indicesWhereInput;

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    some?: item_game_indicesWhereInput;

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    none?: item_game_indicesWhereInput;
}
