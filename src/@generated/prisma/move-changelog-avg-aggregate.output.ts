import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Move_changelogAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_id?: number;

    @Field(() => Float, {nullable:true})
    changed_in_version_group_id?: number;

    @Field(() => Float, {nullable:true})
    type_id?: number;

    @Field(() => Float, {nullable:true})
    effect_id?: number;

    @Field(() => Float, {nullable:true})
    effect_chance?: number;
}
