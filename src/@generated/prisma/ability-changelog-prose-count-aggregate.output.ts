import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Ability_changelog_proseCountAggregate {

    @Field(() => Int, {nullable:false})
    ability_changelog_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => Int, {nullable:false})
    effect!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
