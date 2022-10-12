import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Encounter_slotsCountAggregate } from './encounter-slots-count-aggregate.output';
import { Encounter_slotsAvgAggregate } from './encounter-slots-avg-aggregate.output';
import { Encounter_slotsSumAggregate } from './encounter-slots-sum-aggregate.output';
import { Encounter_slotsMinAggregate } from './encounter-slots-min-aggregate.output';
import { Encounter_slotsMaxAggregate } from './encounter-slots-max-aggregate.output';

@ObjectType()
export class AggregateEncounter_slots {

    @Field(() => Encounter_slotsCountAggregate, {nullable:true})
    _count?: Encounter_slotsCountAggregate;

    @Field(() => Encounter_slotsAvgAggregate, {nullable:true})
    _avg?: Encounter_slotsAvgAggregate;

    @Field(() => Encounter_slotsSumAggregate, {nullable:true})
    _sum?: Encounter_slotsSumAggregate;

    @Field(() => Encounter_slotsMinAggregate, {nullable:true})
    _min?: Encounter_slotsMinAggregate;

    @Field(() => Encounter_slotsMaxAggregate, {nullable:true})
    _max?: Encounter_slotsMaxAggregate;
}
