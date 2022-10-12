import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { contest_types } from '../contest-types/contest-types.model';

@ObjectType()
export class contest_type_names {

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    flavor!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => contest_types, {nullable:false})
    contest_types?: contest_types;
}
