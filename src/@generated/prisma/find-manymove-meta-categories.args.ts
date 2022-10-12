import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesWhereInput } from '../move-meta-categories/move-meta-categories-where.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesOrderByWithRelationInput } from '../move-meta-categories/move-meta-categories-order-by-with-relation.input';
import { move_meta_categoriesWhereUniqueInput } from '../move-meta-categories/move-meta-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_meta_categoriesScalarFieldEnum } from './move-meta-categories-scalar-field.enum';

@ArgsType()
export class FindManymoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesWhereInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereInput)
    where?: move_meta_categoriesWhereInput;

    @Field(() => [move_meta_categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_meta_categoriesOrderByWithRelationInput>;

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:true})
    cursor?: move_meta_categoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_meta_categoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_meta_categoriesScalarFieldEnum>;
}
