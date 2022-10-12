import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersWhereInput } from '../evolution-triggers/evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { evolution_triggersOrderByWithAggregationInput } from '../evolution-triggers/evolution-triggers-order-by-with-aggregation.input';
import { Evolution_triggersScalarFieldEnum } from './evolution-triggers-scalar-field.enum';
import { evolution_triggersScalarWhereWithAggregatesInput } from '../evolution-triggers/evolution-triggers-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByevolutionTriggersArgs {

    @Field(() => evolution_triggersWhereInput, {nullable:true})
    @Type(() => evolution_triggersWhereInput)
    where?: evolution_triggersWhereInput;

    @Field(() => [evolution_triggersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<evolution_triggersOrderByWithAggregationInput>;

    @Field(() => [Evolution_triggersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Evolution_triggersScalarFieldEnum>;

    @Field(() => evolution_triggersScalarWhereWithAggregatesInput, {nullable:true})
    having?: evolution_triggersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
