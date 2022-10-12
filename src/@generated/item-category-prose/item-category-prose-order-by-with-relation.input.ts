import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { item_categoriesOrderByWithRelationInput } from '../item-categories/item-categories-order-by-with-relation.input';

@InputType()
export class item_category_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    item_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => item_categoriesOrderByWithRelationInput, {nullable:true})
    item_categories?: item_categoriesOrderByWithRelationInput;
}
