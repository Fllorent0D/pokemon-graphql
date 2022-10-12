import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesWhereInput } from '../item-game-indices/item-game-indices-where.input';
import { Type } from 'class-transformer';
import { item_game_indicesOrderByWithAggregationInput } from '../item-game-indices/item-game-indices-order-by-with-aggregation.input';
import { Item_game_indicesScalarFieldEnum } from './item-game-indices-scalar-field.enum';
import { item_game_indicesScalarWhereWithAggregatesInput } from '../item-game-indices/item-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemGameIndicesArgs {

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    @Type(() => item_game_indicesWhereInput)
    where?: item_game_indicesWhereInput;

    @Field(() => [item_game_indicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_game_indicesOrderByWithAggregationInput>;

    @Field(() => [Item_game_indicesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_game_indicesScalarFieldEnum>;

    @Field(() => item_game_indicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_game_indicesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
