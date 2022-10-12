import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_flags } from '../move-flags/move-flags.model';

@ObjectType()
export class move_flag_prose {

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_flags, {nullable:false})
    move_flags?: move_flags;
}
