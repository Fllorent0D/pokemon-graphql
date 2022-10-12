import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Encounter_method_proseCountAggregate } from './encounter-method-prose-count-aggregate.output';
import { Encounter_method_proseAvgAggregate } from './encounter-method-prose-avg-aggregate.output';
import { Encounter_method_proseSumAggregate } from './encounter-method-prose-sum-aggregate.output';
import { Encounter_method_proseMinAggregate } from './encounter-method-prose-min-aggregate.output';
import { Encounter_method_proseMaxAggregate } from './encounter-method-prose-max-aggregate.output';

@ObjectType()
export class Encounter_method_proseGroupBy {

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Encounter_method_proseCountAggregate, {nullable:true})
    _count?: Encounter_method_proseCountAggregate;

    @Field(() => Encounter_method_proseAvgAggregate, {nullable:true})
    _avg?: Encounter_method_proseAvgAggregate;

    @Field(() => Encounter_method_proseSumAggregate, {nullable:true})
    _sum?: Encounter_method_proseSumAggregate;

    @Field(() => Encounter_method_proseMinAggregate, {nullable:true})
    _min?: Encounter_method_proseMinAggregate;

    @Field(() => Encounter_method_proseMaxAggregate, {nullable:true})
    _max?: Encounter_method_proseMaxAggregate;
}
