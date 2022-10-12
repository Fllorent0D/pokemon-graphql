import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsWhereInput } from '../item-pockets/item-pockets-where.input';
import { Type } from 'class-transformer';
import { item_pocketsOrderByWithAggregationInput } from '../item-pockets/item-pockets-order-by-with-aggregation.input';
import { Item_pocketsScalarFieldEnum } from './item-pockets-scalar-field.enum';
import { item_pocketsScalarWhereWithAggregatesInput } from '../item-pockets/item-pockets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemPocketsArgs {

    @Field(() => item_pocketsWhereInput, {nullable:true})
    @Type(() => item_pocketsWhereInput)
    where?: item_pocketsWhereInput;

    @Field(() => [item_pocketsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_pocketsOrderByWithAggregationInput>;

    @Field(() => [Item_pocketsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_pocketsScalarFieldEnum>;

    @Field(() => item_pocketsScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_pocketsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
