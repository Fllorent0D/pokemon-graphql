import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Encounter_conditionsCountAggregate } from './encounter-conditions-count-aggregate.output';
import { Encounter_conditionsAvgAggregate } from './encounter-conditions-avg-aggregate.output';
import { Encounter_conditionsSumAggregate } from './encounter-conditions-sum-aggregate.output';
import { Encounter_conditionsMinAggregate } from './encounter-conditions-min-aggregate.output';
import { Encounter_conditionsMaxAggregate } from './encounter-conditions-max-aggregate.output';

@ObjectType()
export class AggregateEncounter_conditions {

    @Field(() => Encounter_conditionsCountAggregate, {nullable:true})
    _count?: Encounter_conditionsCountAggregate;

    @Field(() => Encounter_conditionsAvgAggregate, {nullable:true})
    _avg?: Encounter_conditionsAvgAggregate;

    @Field(() => Encounter_conditionsSumAggregate, {nullable:true})
    _sum?: Encounter_conditionsSumAggregate;

    @Field(() => Encounter_conditionsMinAggregate, {nullable:true})
    _min?: Encounter_conditionsMinAggregate;

    @Field(() => Encounter_conditionsMaxAggregate, {nullable:true})
    _max?: Encounter_conditionsMaxAggregate;
}
