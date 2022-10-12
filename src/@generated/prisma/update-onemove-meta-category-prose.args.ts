import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseUpdateInput } from '../move-meta-category-prose/move-meta-category-prose-update.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseWhereUniqueInput } from '../move-meta-category-prose/move-meta-category-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseUpdateInput, {nullable:false})
    @Type(() => move_meta_category_proseUpdateInput)
    data!: move_meta_category_proseUpdateInput;

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    where!: move_meta_category_proseWhereUniqueInput;
}
