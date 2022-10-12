import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_pockets } from '../item-pockets/item-pockets.model';
import { item_category_prose } from '../item-category-prose/item-category-prose.model';
import { items } from '../items/items.model';
import { Item_categoriesCount } from '../prisma/item-categories-count.output';

@ObjectType()
export class item_categories {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    pocket_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_pockets, {nullable:false})
    item_pockets?: item_pockets;

    @Field(() => [item_category_prose], {nullable:true})
    item_category_prose?: Array<item_category_prose>;

    @Field(() => [items], {nullable:true})
    items?: Array<items>;

    @Field(() => Item_categoriesCount, {nullable:false})
    _count?: Item_categoriesCount;
}
