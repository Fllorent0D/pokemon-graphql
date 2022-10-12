import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseWhereInput } from '../item-category-prose/item-category-prose-where.input';

@InputType()
export class Item_category_proseListRelationFilter {

    @Field(() => item_category_proseWhereInput, {nullable:true})
    every?: item_category_proseWhereInput;

    @Field(() => item_category_proseWhereInput, {nullable:true})
    some?: item_category_proseWhereInput;

    @Field(() => item_category_proseWhereInput, {nullable:true})
    none?: item_category_proseWhereInput;
}
