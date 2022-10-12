import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { stat_hints } from '../stat-hints/stat-hints.model';

@ObjectType()
export class stat_hint_names {

    @Field(() => Int, {nullable:false})
    stat_hint_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => stat_hints, {nullable:false})
    stat_hints?: stat_hints;
}
