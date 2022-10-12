import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { movesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { movesOrderByWithAggregationInput } from './moves-order-by-with-aggregation.input';
import { MovesScalarFieldEnum } from '../prisma/moves-scalar-field.enum';
import { movesScalarWhereWithAggregatesInput } from './moves-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class movesGroupByArgs {

    @Field(() => movesWhereInput, {nullable:true})
    @Type(() => movesWhereInput)
    where?: movesWhereInput;

    @Field(() => [movesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<movesOrderByWithAggregationInput>;

    @Field(() => [MovesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MovesScalarFieldEnum>;

    @Field(() => movesScalarWhereWithAggregatesInput, {nullable:true})
    having?: movesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
