import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_effects } from '../move-effects/move-effects.model';

@ObjectType()
export class move_effect_prose {

    @Field(() => Int, {nullable:false})
    move_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    short_effect!: string | null;

    @Field(() => String, {nullable:true})
    effect!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_effects, {nullable:false})
    move_effects?: move_effects;
}
