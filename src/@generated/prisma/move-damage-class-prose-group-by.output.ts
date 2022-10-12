import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_damage_class_proseCountAggregate } from './move-damage-class-prose-count-aggregate.output';
import { Move_damage_class_proseAvgAggregate } from './move-damage-class-prose-avg-aggregate.output';
import { Move_damage_class_proseSumAggregate } from './move-damage-class-prose-sum-aggregate.output';
import { Move_damage_class_proseMinAggregate } from './move-damage-class-prose-min-aggregate.output';
import { Move_damage_class_proseMaxAggregate } from './move-damage-class-prose-max-aggregate.output';

@ObjectType()
export class Move_damage_class_proseGroupBy {

    @Field(() => Int, {nullable:false})
    move_damage_class_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Move_damage_class_proseCountAggregate, {nullable:true})
    _count?: Move_damage_class_proseCountAggregate;

    @Field(() => Move_damage_class_proseAvgAggregate, {nullable:true})
    _avg?: Move_damage_class_proseAvgAggregate;

    @Field(() => Move_damage_class_proseSumAggregate, {nullable:true})
    _sum?: Move_damage_class_proseSumAggregate;

    @Field(() => Move_damage_class_proseMinAggregate, {nullable:true})
    _min?: Move_damage_class_proseMinAggregate;

    @Field(() => Move_damage_class_proseMaxAggregate, {nullable:true})
    _max?: Move_damage_class_proseMaxAggregate;
}
