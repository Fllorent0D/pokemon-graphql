import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { encounter_conditions } from '../encounter-conditions/encounter-conditions.model';

@ObjectType()
export class encounter_condition_prose {

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => encounter_conditions, {nullable:false})
    encounter_conditions?: encounter_conditions;
}
