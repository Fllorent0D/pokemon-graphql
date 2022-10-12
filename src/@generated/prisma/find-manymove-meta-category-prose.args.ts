import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseWhereInput } from '../move-meta-category-prose/move-meta-category-prose-where.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseOrderByWithRelationInput } from '../move-meta-category-prose/move-meta-category-prose-order-by-with-relation.input';
import { move_meta_category_proseWhereUniqueInput } from '../move-meta-category-prose/move-meta-category-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_meta_category_proseScalarFieldEnum } from './move-meta-category-prose-scalar-field.enum';

@ArgsType()
export class FindManymoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    @Type(() => move_meta_category_proseWhereInput)
    where?: move_meta_category_proseWhereInput;

    @Field(() => [move_meta_category_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_meta_category_proseOrderByWithRelationInput>;

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:true})
    cursor?: move_meta_category_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_meta_category_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_meta_category_proseScalarFieldEnum>;
}
