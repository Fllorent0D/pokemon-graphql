import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Contest_effect_proseCountAggregate } from './contest-effect-prose-count-aggregate.output';
import { Contest_effect_proseAvgAggregate } from './contest-effect-prose-avg-aggregate.output';
import { Contest_effect_proseSumAggregate } from './contest-effect-prose-sum-aggregate.output';
import { Contest_effect_proseMinAggregate } from './contest-effect-prose-min-aggregate.output';
import { Contest_effect_proseMaxAggregate } from './contest-effect-prose-max-aggregate.output';

@ObjectType()
export class Contest_effect_proseGroupBy {

    @Field(() => Int, {nullable:false})
    contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    flavor_text?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => Contest_effect_proseCountAggregate, {nullable:true})
    _count?: Contest_effect_proseCountAggregate;

    @Field(() => Contest_effect_proseAvgAggregate, {nullable:true})
    _avg?: Contest_effect_proseAvgAggregate;

    @Field(() => Contest_effect_proseSumAggregate, {nullable:true})
    _sum?: Contest_effect_proseSumAggregate;

    @Field(() => Contest_effect_proseMinAggregate, {nullable:true})
    _min?: Contest_effect_proseMinAggregate;

    @Field(() => Contest_effect_proseMaxAggregate, {nullable:true})
    _max?: Contest_effect_proseMaxAggregate;
}
