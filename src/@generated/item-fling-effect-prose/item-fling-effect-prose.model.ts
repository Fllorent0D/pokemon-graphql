import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { item_fling_effects } from '../item-fling-effects/item-fling-effects.model';

@ObjectType()
export class item_fling_effect_prose {

    @Field(() => Int, {nullable:false})
    item_fling_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => item_fling_effects, {nullable:false})
    item_fling_effects?: item_fling_effects;
}
