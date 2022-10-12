import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { contest_effects } from '../contest-effects/contest-effects.model';

@ObjectType()
export class contest_effect_prose {

    @Field(() => Int, {nullable:false})
    contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    flavor_text!: string | null;

    @Field(() => String, {nullable:true})
    effect!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => contest_effects, {nullable:false})
    contest_effects?: contest_effects;
}
