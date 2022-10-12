import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { itemsOrderByWithAggregationInput } from './items-order-by-with-aggregation.input';
import { ItemsScalarFieldEnum } from '../prisma/items-scalar-field.enum';
import { itemsScalarWhereWithAggregatesInput } from './items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class itemsGroupByArgs {

    @Field(() => itemsWhereInput, {nullable:true})
    @Type(() => itemsWhereInput)
    where?: itemsWhereInput;

    @Field(() => [itemsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<itemsOrderByWithAggregationInput>;

    @Field(() => [ItemsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ItemsScalarFieldEnum>;

    @Field(() => itemsScalarWhereWithAggregatesInput, {nullable:true})
    having?: itemsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
