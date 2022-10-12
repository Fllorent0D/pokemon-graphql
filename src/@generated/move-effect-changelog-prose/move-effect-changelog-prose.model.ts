import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_effect_changelog } from '../move-effect-changelog/move-effect-changelog.model';

@ObjectType()
export class move_effect_changelog_prose {

    @Field(() => Int, {nullable:false})
    move_effect_changelog_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_effect_changelog, {nullable:false})
    move_effect_changelog?: move_effect_changelog;
}
