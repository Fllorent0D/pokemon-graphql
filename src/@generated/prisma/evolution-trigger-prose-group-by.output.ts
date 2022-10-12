import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Evolution_trigger_proseCountAggregate } from './evolution-trigger-prose-count-aggregate.output';
import { Evolution_trigger_proseAvgAggregate } from './evolution-trigger-prose-avg-aggregate.output';
import { Evolution_trigger_proseSumAggregate } from './evolution-trigger-prose-sum-aggregate.output';
import { Evolution_trigger_proseMinAggregate } from './evolution-trigger-prose-min-aggregate.output';
import { Evolution_trigger_proseMaxAggregate } from './evolution-trigger-prose-max-aggregate.output';

@ObjectType()
export class Evolution_trigger_proseGroupBy {

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Evolution_trigger_proseCountAggregate, {nullable:true})
    _count?: Evolution_trigger_proseCountAggregate;

    @Field(() => Evolution_trigger_proseAvgAggregate, {nullable:true})
    _avg?: Evolution_trigger_proseAvgAggregate;

    @Field(() => Evolution_trigger_proseSumAggregate, {nullable:true})
    _sum?: Evolution_trigger_proseSumAggregate;

    @Field(() => Evolution_trigger_proseMinAggregate, {nullable:true})
    _min?: Evolution_trigger_proseMinAggregate;

    @Field(() => Evolution_trigger_proseMaxAggregate, {nullable:true})
    _max?: Evolution_trigger_proseMaxAggregate;
}
