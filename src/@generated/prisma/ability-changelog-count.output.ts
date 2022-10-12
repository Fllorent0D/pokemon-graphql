import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Ability_changelogCount {

    @Field(() => Int, {nullable:false})
    ability_changelog_prose!: number;
}
