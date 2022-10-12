import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesWhereInput } from '../item-categories/item-categories-where.input';

@InputType()
export class Item_categoriesRelationFilter {

    @Field(() => item_categoriesWhereInput, {nullable:true})
    is?: item_categoriesWhereInput;

    @Field(() => item_categoriesWhereInput, {nullable:true})
    isNot?: item_categoriesWhereInput;
}
