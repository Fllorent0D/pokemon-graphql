import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Contest_effectsRelationFilter } from '../prisma/contest-effects-relation-filter.input';

@InputType()
export class contest_effect_proseWhereInput {

    @Field(() => [contest_effect_proseWhereInput], {nullable:true})
    AND?: Array<contest_effect_proseWhereInput>;

    @Field(() => [contest_effect_proseWhereInput], {nullable:true})
    OR?: Array<contest_effect_proseWhereInput>;

    @Field(() => [contest_effect_proseWhereInput], {nullable:true})
    NOT?: Array<contest_effect_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    contest_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor_text?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Contest_effectsRelationFilter, {nullable:true})
    contest_effects?: Contest_effectsRelationFilter;
}
