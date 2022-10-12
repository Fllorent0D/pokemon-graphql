import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ability_flavor_textCountAggregate } from './ability-flavor-text-count-aggregate.output';
import { Ability_flavor_textAvgAggregate } from './ability-flavor-text-avg-aggregate.output';
import { Ability_flavor_textSumAggregate } from './ability-flavor-text-sum-aggregate.output';
import { Ability_flavor_textMinAggregate } from './ability-flavor-text-min-aggregate.output';
import { Ability_flavor_textMaxAggregate } from './ability-flavor-text-max-aggregate.output';

@ObjectType()
export class Ability_flavor_textGroupBy {

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => Ability_flavor_textCountAggregate, {nullable:true})
    _count?: Ability_flavor_textCountAggregate;

    @Field(() => Ability_flavor_textAvgAggregate, {nullable:true})
    _avg?: Ability_flavor_textAvgAggregate;

    @Field(() => Ability_flavor_textSumAggregate, {nullable:true})
    _sum?: Ability_flavor_textSumAggregate;

    @Field(() => Ability_flavor_textMinAggregate, {nullable:true})
    _min?: Ability_flavor_textMinAggregate;

    @Field(() => Ability_flavor_textMaxAggregate, {nullable:true})
    _max?: Ability_flavor_textMaxAggregate;
}
