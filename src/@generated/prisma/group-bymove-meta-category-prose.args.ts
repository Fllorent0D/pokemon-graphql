import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseWhereInput } from '../move-meta-category-prose/move-meta-category-prose-where.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseOrderByWithAggregationInput } from '../move-meta-category-prose/move-meta-category-prose-order-by-with-aggregation.input';
import { Move_meta_category_proseScalarFieldEnum } from './move-meta-category-prose-scalar-field.enum';
import { move_meta_category_proseScalarWhereWithAggregatesInput } from '../move-meta-category-prose/move-meta-category-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    @Type(() => move_meta_category_proseWhereInput)
    where?: move_meta_category_proseWhereInput;

    @Field(() => [move_meta_category_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_meta_category_proseOrderByWithAggregationInput>;

    @Field(() => [Move_meta_category_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_meta_category_proseScalarFieldEnum>;

    @Field(() => move_meta_category_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_meta_category_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
