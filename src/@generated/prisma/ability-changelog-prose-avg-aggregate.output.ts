import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Ability_changelog_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    ability_changelog_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
