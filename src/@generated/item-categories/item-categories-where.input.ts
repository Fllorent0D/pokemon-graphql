import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Item_pocketsRelationFilter } from '../prisma/item-pockets-relation-filter.input';
import { Item_category_proseListRelationFilter } from '../prisma/item-category-prose-list-relation-filter.input';
import { ItemsListRelationFilter } from '../prisma/items-list-relation-filter.input';

@InputType()
export class item_categoriesWhereInput {

    @Field(() => [item_categoriesWhereInput], {nullable:true})
    AND?: Array<item_categoriesWhereInput>;

    @Field(() => [item_categoriesWhereInput], {nullable:true})
    OR?: Array<item_categoriesWhereInput>;

    @Field(() => [item_categoriesWhereInput], {nullable:true})
    NOT?: Array<item_categoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pocket_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Item_pocketsRelationFilter, {nullable:true})
    item_pockets?: Item_pocketsRelationFilter;

    @Field(() => Item_category_proseListRelationFilter, {nullable:true})
    item_category_prose?: Item_category_proseListRelationFilter;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    items?: ItemsListRelationFilter;
}
