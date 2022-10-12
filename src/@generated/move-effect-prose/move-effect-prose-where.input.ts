import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_effectsRelationFilter } from '../prisma/move-effects-relation-filter.input';

@InputType()
export class move_effect_proseWhereInput {

    @Field(() => [move_effect_proseWhereInput], {nullable:true})
    AND?: Array<move_effect_proseWhereInput>;

    @Field(() => [move_effect_proseWhereInput], {nullable:true})
    OR?: Array<move_effect_proseWhereInput>;

    @Field(() => [move_effect_proseWhereInput], {nullable:true})
    NOT?: Array<move_effect_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    short_effect?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_effectsRelationFilter, {nullable:true})
    move_effects?: Move_effectsRelationFilter;
}
