import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounter_slotsCountAggregate } from './encounter-slots-count-aggregate.output';
import { Encounter_slotsAvgAggregate } from './encounter-slots-avg-aggregate.output';
import { Encounter_slotsSumAggregate } from './encounter-slots-sum-aggregate.output';
import { Encounter_slotsMinAggregate } from './encounter-slots-min-aggregate.output';
import { Encounter_slotsMaxAggregate } from './encounter-slots-max-aggregate.output';

@ObjectType()
export class Encounter_slotsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;

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
