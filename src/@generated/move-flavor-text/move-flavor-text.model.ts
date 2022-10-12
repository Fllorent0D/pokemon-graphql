import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { version_groups } from '../version-groups/version-groups.model';
import { moves } from '../moves/moves.model';

@ObjectType()
export class move_flavor_text {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;

    @Field(() => moves, {nullable:false})
    moves?: moves;
}
