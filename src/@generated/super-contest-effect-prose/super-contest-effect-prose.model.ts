import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { super_contest_effects } from '../super-contest-effects/super-contest-effects.model';

@ObjectType()
export class super_contest_effect_prose {

    @Field(() => Int, {nullable:false})
    super_contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => super_contest_effects, {nullable:false})
    super_contest_effects?: super_contest_effects;
}
