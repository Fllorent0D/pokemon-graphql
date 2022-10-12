import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_effect_changelogCount {

    @Field(() => Int, {nullable:false})
    move_effect_changelog_prose!: number;
}
