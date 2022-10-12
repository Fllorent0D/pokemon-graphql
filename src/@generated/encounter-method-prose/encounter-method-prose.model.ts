import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { encounter_methods } from '../encounter-methods/encounter-methods.model';

@ObjectType()
export class encounter_method_prose {

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => encounter_methods, {nullable:false})
    encounter_methods?: encounter_methods;
}
