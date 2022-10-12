import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesWhereInput } from '../move-meta-categories/move-meta-categories-where.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesOrderByWithAggregationInput } from '../move-meta-categories/move-meta-categories-order-by-with-aggregation.input';
import { Move_meta_categoriesScalarFieldEnum } from './move-meta-categories-scalar-field.enum';
import { move_meta_categoriesScalarWhereWithAggregatesInput } from '../move-meta-categories/move-meta-categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesWhereInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereInput)
    where?: move_meta_categoriesWhereInput;

    @Field(() => [move_meta_categoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_meta_categoriesOrderByWithAggregationInput>;

    @Field(() => [Move_meta_categoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_meta_categoriesScalarFieldEnum>;

    @Field(() => move_meta_categoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_meta_categoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
