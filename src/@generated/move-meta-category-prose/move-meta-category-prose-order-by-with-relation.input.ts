import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { move_meta_categoriesOrderByWithRelationInput } from '../move-meta-categories/move-meta-categories-order-by-with-relation.input';

@InputType()
export class move_meta_category_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_meta_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => move_meta_categoriesOrderByWithRelationInput, {nullable:true})
    move_meta_categories?: move_meta_categoriesOrderByWithRelationInput;
}
