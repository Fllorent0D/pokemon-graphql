import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_categoriesCount {

    @Field(() => Int, {nullable:false})
    item_category_prose!: number;

    @Field(() => Int, {nullable:false})
    items!: number;
}
