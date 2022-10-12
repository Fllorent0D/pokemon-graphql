import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesCreateInput } from '../move-meta-categories/move-meta-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesCreateInput, {nullable:false})
    @Type(() => move_meta_categoriesCreateInput)
    data!: move_meta_categoriesCreateInput;
}
