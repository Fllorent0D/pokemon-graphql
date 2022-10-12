import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesWhereInput } from '../item-categories/item-categories-where.input';

@InputType()
export class Item_categoriesListRelationFilter {

    @Field(() => item_categoriesWhereInput, {nullable:true})
    every?: item_categoriesWhereInput;

    @Field(() => item_categoriesWhereInput, {nullable:true})
    some?: item_categoriesWhereInput;

    @Field(() => item_categoriesWhereInput, {nullable:true})
    none?: item_categoriesWhereInput;
}
