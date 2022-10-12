import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounter_condition_value_proseCountAggregate } from './encounter-condition-value-prose-count-aggregate.output';
import { Encounter_condition_value_proseAvgAggregate } from './encounter-condition-value-prose-avg-aggregate.output';
import { Encounter_condition_value_proseSumAggregate } from './encounter-condition-value-prose-sum-aggregate.output';
import { Encounter_condition_value_proseMinAggregate } from './encounter-condition-value-prose-min-aggregate.output';
import { Encounter_condition_value_proseMaxAggregate } from './encounter-condition-value-prose-max-aggregate.output';

@ObjectType()
export class Encounter_condition_value_proseGroupBy {

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Encounter_condition_value_proseCountAggregate, {nullable:true})
    _count?: Encounter_condition_value_proseCountAggregate;

    @Field(() => Encounter_condition_value_proseAvgAggregate, {nullable:true})
    _avg?: Encounter_condition_value_proseAvgAggregate;

    @Field(() => Encounter_condition_value_proseSumAggregate, {nullable:true})
    _sum?: Encounter_condition_value_proseSumAggregate;

    @Field(() => Encounter_condition_value_proseMinAggregate, {nullable:true})
    _min?: Encounter_condition_value_proseMinAggregate;

    @Field(() => Encounter_condition_value_proseMaxAggregate, {nullable:true})
    _max?: Encounter_condition_value_proseMaxAggregate;
}
