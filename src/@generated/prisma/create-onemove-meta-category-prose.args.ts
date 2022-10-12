import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseCreateInput } from '../move-meta-category-prose/move-meta-category-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseCreateInput, {nullable:false})
    @Type(() => move_meta_category_proseCreateInput)
    data!: move_meta_category_proseCreateInput;
}
