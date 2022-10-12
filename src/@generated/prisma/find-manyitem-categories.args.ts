import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesWhereInput } from '../item-categories/item-categories-where.input';
import { Type } from 'class-transformer';
import { item_categoriesOrderByWithRelationInput } from '../item-categories/item-categories-order-by-with-relation.input';
import { item_categoriesWhereUniqueInput } from '../item-categories/item-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Item_categoriesScalarFieldEnum } from './item-categories-scalar-field.enum';

@ArgsType()
export class FindManyitemCategoriesArgs {

    @Field(() => item_categoriesWhereInput, {nullable:true})
    @Type(() => item_categoriesWhereInput)
    where?: item_categoriesWhereInput;

    @Field(() => [item_categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_categoriesOrderByWithRelationInput>;

    @Field(() => item_categoriesWhereUniqueInput, {nullable:true})
    cursor?: item_categoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Item_categoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Item_categoriesScalarFieldEnum>;
}
