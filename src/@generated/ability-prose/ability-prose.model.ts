import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { abilities } from '../abilities/abilities.model';

@ObjectType()
export class ability_prose {

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    effect!: string | null;

    @Field(() => String, {nullable:true})
    short_effect!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => abilities, {nullable:false})
    abilities?: abilities;
}
