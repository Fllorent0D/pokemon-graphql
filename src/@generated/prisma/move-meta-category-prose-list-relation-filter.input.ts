import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseWhereInput } from '../move-meta-category-prose/move-meta-category-prose-where.input';

@InputType()
export class Move_meta_category_proseListRelationFilter {

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    every?: move_meta_category_proseWhereInput;

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    some?: move_meta_category_proseWhereInput;

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    none?: move_meta_category_proseWhereInput;
}
