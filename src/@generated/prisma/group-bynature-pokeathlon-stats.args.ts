import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsOrderByWithAggregationInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-order-by-with-aggregation.input';
import { Nature_pokeathlon_statsScalarFieldEnum } from './nature-pokeathlon-stats-scalar-field.enum';
import { nature_pokeathlon_statsScalarWhereWithAggregatesInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBynaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereInput)
    where?: nature_pokeathlon_statsWhereInput;

    @Field(() => [nature_pokeathlon_statsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<nature_pokeathlon_statsOrderByWithAggregationInput>;

    @Field(() => [Nature_pokeathlon_statsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Nature_pokeathlon_statsScalarFieldEnum>;

    @Field(() => nature_pokeathlon_statsScalarWhereWithAggregatesInput, {nullable:true})
    having?: nature_pokeathlon_statsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
