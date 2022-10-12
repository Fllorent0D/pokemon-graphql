import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';
import { berriesOrderByWithAggregationInput } from './berries-order-by-with-aggregation.input';
import { BerriesScalarFieldEnum } from '../prisma/berries-scalar-field.enum';
import { berriesScalarWhereWithAggregatesInput } from './berries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class berriesGroupByArgs {

    @Field(() => berriesWhereInput, {nullable:true})
    @Type(() => berriesWhereInput)
    where?: berriesWhereInput;

    @Field(() => [berriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<berriesOrderByWithAggregationInput>;

    @Field(() => [BerriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BerriesScalarFieldEnum>;

    @Field(() => berriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: berriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
