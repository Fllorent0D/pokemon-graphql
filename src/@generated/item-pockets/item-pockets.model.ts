import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { item_categories } from '../item-categories/item-categories.model';
import { item_pocket_names } from '../item-pocket-names/item-pocket-names.model';
import { Item_pocketsCount } from '../prisma/item-pockets-count.output';

@ObjectType()
export class item_pockets {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [item_categories], {nullable:true})
    item_categories?: Array<item_categories>;

    @Field(() => [item_pocket_names], {nullable:true})
    item_pocket_names?: Array<item_pocket_names>;

    @Field(() => Item_pocketsCount, {nullable:false})
    _count?: Item_pocketsCount;
}
