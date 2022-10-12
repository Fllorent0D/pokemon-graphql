import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { evolution_triggers } from '../evolution-triggers/evolution-triggers.model';

@ObjectType()
export class evolution_trigger_prose {

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => evolution_triggers, {nullable:false})
    evolution_triggers?: evolution_triggers;
}
