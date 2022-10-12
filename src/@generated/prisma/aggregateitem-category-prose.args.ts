import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseWhereInput } from '../item-category-prose/item-category-prose-where.input';
import { Type } from 'class-transformer';
import { item_category_proseOrderByWithRelationInput } from '../item-category-prose/item-category-prose-order-by-with-relation.input';
import { item_category_proseWhereUniqueInput } from '../item-category-prose/item-category-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemCategoryProseArgs {

    @Field(() => item_category_proseWhereInput, {nullable:true})
    @Type(() => item_category_proseWhereInput)
    where?: item_category_proseWhereInput;

    @Field(() => [item_category_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_category_proseOrderByWithRelationInput>;

    @Field(() => item_category_proseWhereUniqueInput, {nullable:true})
    cursor?: item_category_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
