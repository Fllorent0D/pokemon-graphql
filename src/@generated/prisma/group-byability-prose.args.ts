import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseWhereInput } from '../ability-prose/ability-prose-where.input';
import { Type } from 'class-transformer';
import { ability_proseOrderByWithAggregationInput } from '../ability-prose/ability-prose-order-by-with-aggregation.input';
import { Ability_proseScalarFieldEnum } from './ability-prose-scalar-field.enum';
import { ability_proseScalarWhereWithAggregatesInput } from '../ability-prose/ability-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByabilityProseArgs {

    @Field(() => ability_proseWhereInput, {nullable:true})
    @Type(() => ability_proseWhereInput)
    where?: ability_proseWhereInput;

    @Field(() => [ability_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ability_proseOrderByWithAggregationInput>;

    @Field(() => [Ability_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Ability_proseScalarFieldEnum>;

    @Field(() => ability_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: ability_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
