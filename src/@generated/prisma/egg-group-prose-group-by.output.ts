import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Egg_group_proseCountAggregate } from './egg-group-prose-count-aggregate.output';
import { Egg_group_proseAvgAggregate } from './egg-group-prose-avg-aggregate.output';
import { Egg_group_proseSumAggregate } from './egg-group-prose-sum-aggregate.output';
import { Egg_group_proseMinAggregate } from './egg-group-prose-min-aggregate.output';
import { Egg_group_proseMaxAggregate } from './egg-group-prose-max-aggregate.output';

@ObjectType()
export class Egg_group_proseGroupBy {

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Egg_group_proseCountAggregate, {nullable:true})
    _count?: Egg_group_proseCountAggregate;

    @Field(() => Egg_group_proseAvgAggregate, {nullable:true})
    _avg?: Egg_group_proseAvgAggregate;

    @Field(() => Egg_group_proseSumAggregate, {nullable:true})
    _sum?: Egg_group_proseSumAggregate;

    @Field(() => Egg_group_proseMinAggregate, {nullable:true})
    _min?: Egg_group_proseMinAggregate;

    @Field(() => Egg_group_proseMaxAggregate, {nullable:true})
    _max?: Egg_group_proseMaxAggregate;
}
