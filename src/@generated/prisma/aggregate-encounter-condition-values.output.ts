import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Encounter_condition_valuesCountAggregate } from './encounter-condition-values-count-aggregate.output';
import { Encounter_condition_valuesAvgAggregate } from './encounter-condition-values-avg-aggregate.output';
import { Encounter_condition_valuesSumAggregate } from './encounter-condition-values-sum-aggregate.output';
import { Encounter_condition_valuesMinAggregate } from './encounter-condition-values-min-aggregate.output';
import { Encounter_condition_valuesMaxAggregate } from './encounter-condition-values-max-aggregate.output';

@ObjectType()
export class AggregateEncounter_condition_values {

    @Field(() => Encounter_condition_valuesCountAggregate, {nullable:true})
    _count?: Encounter_condition_valuesCountAggregate;

    @Field(() => Encounter_condition_valuesAvgAggregate, {nullable:true})
    _avg?: Encounter_condition_valuesAvgAggregate;

    @Field(() => Encounter_condition_valuesSumAggregate, {nullable:true})
    _sum?: Encounter_condition_valuesSumAggregate;

    @Field(() => Encounter_condition_valuesMinAggregate, {nullable:true})
    _min?: Encounter_condition_valuesMinAggregate;

    @Field(() => Encounter_condition_valuesMaxAggregate, {nullable:true})
    _max?: Encounter_condition_valuesMaxAggregate;
}
