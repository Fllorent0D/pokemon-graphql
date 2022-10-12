import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Item_fling_effectsRelationFilter } from '../prisma/item-fling-effects-relation-filter.input';

@InputType()
export class item_fling_effect_proseWhereInput {

    @Field(() => [item_fling_effect_proseWhereInput], {nullable:true})
    AND?: Array<item_fling_effect_proseWhereInput>;

    @Field(() => [item_fling_effect_proseWhereInput], {nullable:true})
    OR?: Array<item_fling_effect_proseWhereInput>;

    @Field(() => [item_fling_effect_proseWhereInput], {nullable:true})
    NOT?: Array<item_fling_effect_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_fling_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    effect?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Item_fling_effectsRelationFilter, {nullable:true})
    item_fling_effects?: Item_fling_effectsRelationFilter;
}
