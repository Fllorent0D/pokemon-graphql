import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsWhereInput } from '../pokeathlon-stats/pokeathlon-stats-where.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsOrderByWithAggregationInput } from '../pokeathlon-stats/pokeathlon-stats-order-by-with-aggregation.input';
import { Pokeathlon_statsScalarFieldEnum } from './pokeathlon-stats-scalar-field.enum';
import { pokeathlon_statsScalarWhereWithAggregatesInput } from '../pokeathlon-stats/pokeathlon-stats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokeathlonStatsArgs {

    @Field(() => pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereInput)
    where?: pokeathlon_statsWhereInput;

    @Field(() => [pokeathlon_statsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokeathlon_statsOrderByWithAggregationInput>;

    @Field(() => [Pokeathlon_statsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokeathlon_statsScalarFieldEnum>;

    @Field(() => pokeathlon_statsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokeathlon_statsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
