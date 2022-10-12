import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsWhereInput } from '../evolution-chains/evolution-chains-where.input';
import { Type } from 'class-transformer';
import { evolution_chainsOrderByWithAggregationInput } from '../evolution-chains/evolution-chains-order-by-with-aggregation.input';
import { Evolution_chainsScalarFieldEnum } from './evolution-chains-scalar-field.enum';
import { evolution_chainsScalarWhereWithAggregatesInput } from '../evolution-chains/evolution-chains-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByevolutionChainsArgs {

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    @Type(() => evolution_chainsWhereInput)
    where?: evolution_chainsWhereInput;

    @Field(() => [evolution_chainsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<evolution_chainsOrderByWithAggregationInput>;

    @Field(() => [Evolution_chainsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Evolution_chainsScalarFieldEnum>;

    @Field(() => evolution_chainsScalarWhereWithAggregatesInput, {nullable:true})
    having?: evolution_chainsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
