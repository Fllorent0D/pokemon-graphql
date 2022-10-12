import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { version_groups } from '../version-groups/version-groups.model';
import { abilities } from '../abilities/abilities.model';

@ObjectType()
export class ability_flavor_text {

    @Field(() => Int, {nullable:false})
    ability_id!: number;

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

    @Field(() => abilities, {nullable:false})
    abilities?: abilities;
}
