import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Super_contest_effect_proseCountAggregate } from './super-contest-effect-prose-count-aggregate.output';
import { Super_contest_effect_proseAvgAggregate } from './super-contest-effect-prose-avg-aggregate.output';
import { Super_contest_effect_proseSumAggregate } from './super-contest-effect-prose-sum-aggregate.output';
import { Super_contest_effect_proseMinAggregate } from './super-contest-effect-prose-min-aggregate.output';
import { Super_contest_effect_proseMaxAggregate } from './super-contest-effect-prose-max-aggregate.output';

@ObjectType()
export class Super_contest_effect_proseGroupBy {

    @Field(() => Int, {nullable:false})
    super_contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => Super_contest_effect_proseCountAggregate, {nullable:true})
    _count?: Super_contest_effect_proseCountAggregate;

    @Field(() => Super_contest_effect_proseAvgAggregate, {nullable:true})
    _avg?: Super_contest_effect_proseAvgAggregate;

    @Field(() => Super_contest_effect_proseSumAggregate, {nullable:true})
    _sum?: Super_contest_effect_proseSumAggregate;

    @Field(() => Super_contest_effect_proseMinAggregate, {nullable:true})
    _min?: Super_contest_effect_proseMinAggregate;

    @Field(() => Super_contest_effect_proseMaxAggregate, {nullable:true})
    _max?: Super_contest_effect_proseMaxAggregate;
}
