import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereInput } from '../evolution-trigger-prose/evolution-trigger-prose-where.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseOrderByWithAggregationInput } from '../evolution-trigger-prose/evolution-trigger-prose-order-by-with-aggregation.input';
import { Evolution_trigger_proseScalarFieldEnum } from './evolution-trigger-prose-scalar-field.enum';
import { evolution_trigger_proseScalarWhereWithAggregatesInput } from '../evolution-trigger-prose/evolution-trigger-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    @Type(() => evolution_trigger_proseWhereInput)
    where?: evolution_trigger_proseWhereInput;

    @Field(() => [evolution_trigger_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<evolution_trigger_proseOrderByWithAggregationInput>;

    @Field(() => [Evolution_trigger_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Evolution_trigger_proseScalarFieldEnum>;

    @Field(() => evolution_trigger_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: evolution_trigger_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
