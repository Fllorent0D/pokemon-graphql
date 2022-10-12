import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsWhereInput } from '../berry-flavors/berry-flavors-where.input';
import { Type } from 'class-transformer';
import { berry_flavorsOrderByWithAggregationInput } from '../berry-flavors/berry-flavors-order-by-with-aggregation.input';
import { Berry_flavorsScalarFieldEnum } from './berry-flavors-scalar-field.enum';
import { berry_flavorsScalarWhereWithAggregatesInput } from '../berry-flavors/berry-flavors-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByberryFlavorsArgs {

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    @Type(() => berry_flavorsWhereInput)
    where?: berry_flavorsWhereInput;

    @Field(() => [berry_flavorsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<berry_flavorsOrderByWithAggregationInput>;

    @Field(() => [Berry_flavorsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Berry_flavorsScalarFieldEnum>;

    @Field(() => berry_flavorsScalarWhereWithAggregatesInput, {nullable:true})
    having?: berry_flavorsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
