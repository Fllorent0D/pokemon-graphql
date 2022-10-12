import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesWhereInput } from '../move-meta-categories/move-meta-categories-where.input';

@InputType()
export class Move_meta_categoriesRelationFilter {

    @Field(() => move_meta_categoriesWhereInput, {nullable:true})
    is?: move_meta_categoriesWhereInput;

    @Field(() => move_meta_categoriesWhereInput, {nullable:true})
    isNot?: move_meta_categoriesWhereInput;
}
