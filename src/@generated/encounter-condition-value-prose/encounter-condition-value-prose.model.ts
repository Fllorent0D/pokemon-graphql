import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { encounter_condition_values } from '../encounter-condition-values/encounter-condition-values.model';

@ObjectType()
export class encounter_condition_value_prose {

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => encounter_condition_values, {nullable:false})
    encounter_condition_values?: encounter_condition_values;
}
