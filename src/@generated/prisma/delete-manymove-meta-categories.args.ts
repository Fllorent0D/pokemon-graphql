import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesWhereInput } from '../move-meta-categories/move-meta-categories-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesWhereInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereInput)
    where?: move_meta_categoriesWhereInput;
}
