import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_damage_classesCountAggregate } from './move-damage-classes-count-aggregate.output';
import { Move_damage_classesAvgAggregate } from './move-damage-classes-avg-aggregate.output';
import { Move_damage_classesSumAggregate } from './move-damage-classes-sum-aggregate.output';
import { Move_damage_classesMinAggregate } from './move-damage-classes-min-aggregate.output';
import { Move_damage_classesMaxAggregate } from './move-damage-classes-max-aggregate.output';

@ObjectType()
export class Move_damage_classesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Move_damage_classesCountAggregate, {nullable:true})
    _count?: Move_damage_classesCountAggregate;

    @Field(() => Move_damage_classesAvgAggregate, {nullable:true})
    _avg?: Move_damage_classesAvgAggregate;

    @Field(() => Move_damage_classesSumAggregate, {nullable:true})
    _sum?: Move_damage_classesSumAggregate;

    @Field(() => Move_damage_classesMinAggregate, {nullable:true})
    _min?: Move_damage_classesMinAggregate;

    @Field(() => Move_damage_classesMaxAggregate, {nullable:true})
    _max?: Move_damage_classesMaxAggregate;
}
