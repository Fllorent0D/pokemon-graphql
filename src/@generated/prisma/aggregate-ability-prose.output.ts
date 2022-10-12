import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Ability_proseCountAggregate } from './ability-prose-count-aggregate.output';
import { Ability_proseAvgAggregate } from './ability-prose-avg-aggregate.output';
import { Ability_proseSumAggregate } from './ability-prose-sum-aggregate.output';
import { Ability_proseMinAggregate } from './ability-prose-min-aggregate.output';
import { Ability_proseMaxAggregate } from './ability-prose-max-aggregate.output';

@ObjectType()
export class AggregateAbility_prose {

    @Field(() => Ability_proseCountAggregate, {nullable:true})
    _count?: Ability_proseCountAggregate;

    @Field(() => Ability_proseAvgAggregate, {nullable:true})
    _avg?: Ability_proseAvgAggregate;

    @Field(() => Ability_proseSumAggregate, {nullable:true})
    _sum?: Ability_proseSumAggregate;

    @Field(() => Ability_proseMinAggregate, {nullable:true})
    _min?: Ability_proseMinAggregate;

    @Field(() => Ability_proseMaxAggregate, {nullable:true})
    _max?: Ability_proseMaxAggregate;
}
