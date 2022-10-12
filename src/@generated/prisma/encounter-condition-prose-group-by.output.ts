import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounter_condition_proseCountAggregate } from './encounter-condition-prose-count-aggregate.output';
import { Encounter_condition_proseAvgAggregate } from './encounter-condition-prose-avg-aggregate.output';
import { Encounter_condition_proseSumAggregate } from './encounter-condition-prose-sum-aggregate.output';
import { Encounter_condition_proseMinAggregate } from './encounter-condition-prose-min-aggregate.output';
import { Encounter_condition_proseMaxAggregate } from './encounter-condition-prose-max-aggregate.output';

@ObjectType()
export class Encounter_condition_proseGroupBy {

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Encounter_condition_proseCountAggregate, {nullable:true})
    _count?: Encounter_condition_proseCountAggregate;

    @Field(() => Encounter_condition_proseAvgAggregate, {nullable:true})
    _avg?: Encounter_condition_proseAvgAggregate;

    @Field(() => Encounter_condition_proseSumAggregate, {nullable:true})
    _sum?: Encounter_condition_proseSumAggregate;

    @Field(() => Encounter_condition_proseMinAggregate, {nullable:true})
    _min?: Encounter_condition_proseMinAggregate;

    @Field(() => Encounter_condition_proseMaxAggregate, {nullable:true})
    _max?: Encounter_condition_proseMaxAggregate;
}
