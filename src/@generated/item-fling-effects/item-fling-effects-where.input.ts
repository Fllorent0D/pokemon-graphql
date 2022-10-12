import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Item_fling_effect_proseListRelationFilter } from '../prisma/item-fling-effect-prose-list-relation-filter.input';
import { ItemsListRelationFilter } from '../prisma/items-list-relation-filter.input';

@InputType()
export class item_fling_effectsWhereInput {

    @Field(() => [item_fling_effectsWhereInput], {nullable:true})
    AND?: Array<item_fling_effectsWhereInput>;

    @Field(() => [item_fling_effectsWhereInput], {nullable:true})
    OR?: Array<item_fling_effectsWhereInput>;

    @Field(() => [item_fling_effectsWhereInput], {nullable:true})
    NOT?: Array<item_fling_effectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => Item_fling_effect_proseListRelationFilter, {nullable:true})
    item_fling_effect_prose?: Item_fling_effect_proseListRelationFilter;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    items?: ItemsListRelationFilter;
}
