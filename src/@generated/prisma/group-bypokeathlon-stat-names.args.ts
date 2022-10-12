import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesOrderByWithAggregationInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-order-by-with-aggregation.input';
import { Pokeathlon_stat_namesScalarFieldEnum } from './pokeathlon-stat-names-scalar-field.enum';
import { pokeathlon_stat_namesScalarWhereWithAggregatesInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereInput)
    where?: pokeathlon_stat_namesWhereInput;

    @Field(() => [pokeathlon_stat_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokeathlon_stat_namesOrderByWithAggregationInput>;

    @Field(() => [Pokeathlon_stat_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokeathlon_stat_namesScalarFieldEnum>;

    @Field(() => pokeathlon_stat_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokeathlon_stat_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
