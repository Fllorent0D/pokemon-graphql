import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flagsOrderByWithRelationInput } from '../item-flags/item-flags-order-by-with-relation.input';
import { itemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';

@InputType()
export class item_flag_mapOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_flag_id?: keyof typeof SortOrder;

    @Field(() => item_flagsOrderByWithRelationInput, {nullable:true})
    item_flags?: item_flagsOrderByWithRelationInput;

    @Field(() => itemsOrderByWithRelationInput, {nullable:true})
    items?: itemsOrderByWithRelationInput;
}
