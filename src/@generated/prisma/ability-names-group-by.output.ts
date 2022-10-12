import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ability_namesCountAggregate } from './ability-names-count-aggregate.output';
import { Ability_namesAvgAggregate } from './ability-names-avg-aggregate.output';
import { Ability_namesSumAggregate } from './ability-names-sum-aggregate.output';
import { Ability_namesMinAggregate } from './ability-names-min-aggregate.output';
import { Ability_namesMaxAggregate } from './ability-names-max-aggregate.output';

@ObjectType()
export class Ability_namesGroupBy {

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Ability_namesCountAggregate, {nullable:true})
    _count?: Ability_namesCountAggregate;

    @Field(() => Ability_namesAvgAggregate, {nullable:true})
    _avg?: Ability_namesAvgAggregate;

    @Field(() => Ability_namesSumAggregate, {nullable:true})
    _sum?: Ability_namesSumAggregate;

    @Field(() => Ability_namesMinAggregate, {nullable:true})
    _min?: Ability_namesMinAggregate;

    @Field(() => Ability_namesMaxAggregate, {nullable:true})
    _max?: Ability_namesMaxAggregate;
}
