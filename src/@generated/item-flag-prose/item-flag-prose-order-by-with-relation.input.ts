import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { item_flagsOrderByWithRelationInput } from '../item-flags/item-flags-order-by-with-relation.input';

@InputType()
export class item_flag_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    item_flag_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => item_flagsOrderByWithRelationInput, {nullable:true})
    item_flags?: item_flagsOrderByWithRelationInput;
}
