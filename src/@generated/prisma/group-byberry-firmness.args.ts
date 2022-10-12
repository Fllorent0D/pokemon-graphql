import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessWhereInput } from '../berry-firmness/berry-firmness-where.input';
import { Type } from 'class-transformer';
import { berry_firmnessOrderByWithAggregationInput } from '../berry-firmness/berry-firmness-order-by-with-aggregation.input';
import { Berry_firmnessScalarFieldEnum } from './berry-firmness-scalar-field.enum';
import { berry_firmnessScalarWhereWithAggregatesInput } from '../berry-firmness/berry-firmness-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByberryFirmnessArgs {

    @Field(() => berry_firmnessWhereInput, {nullable:true})
    @Type(() => berry_firmnessWhereInput)
    where?: berry_firmnessWhereInput;

    @Field(() => [berry_firmnessOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<berry_firmnessOrderByWithAggregationInput>;

    @Field(() => [Berry_firmnessScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Berry_firmnessScalarFieldEnum>;

    @Field(() => berry_firmnessScalarWhereWithAggregatesInput, {nullable:true})
    having?: berry_firmnessScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
