import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { ability_changelog } from '../ability-changelog/ability-changelog.model';

@ObjectType()
export class ability_changelog_prose {

    @Field(() => Int, {nullable:false})
    ability_changelog_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => ability_changelog, {nullable:false})
    ability_changelog?: ability_changelog;
}
