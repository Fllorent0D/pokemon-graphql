import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseWhereUniqueInput } from '../move-meta-category-prose/move-meta-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseCreateInput } from '../move-meta-category-prose/move-meta-category-prose-create.input';
import { move_meta_category_proseUpdateInput } from '../move-meta-category-prose/move-meta-category-prose-update.input';

@ArgsType()
export class UpsertOnemoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    where!: move_meta_category_proseWhereUniqueInput;

    @Field(() => move_meta_category_proseCreateInput, {nullable:false})
    @Type(() => move_meta_category_proseCreateInput)
    create!: move_meta_category_proseCreateInput;

    @Field(() => move_meta_category_proseUpdateInput, {nullable:false})
    @Type(() => move_meta_category_proseUpdateInput)
    update!: move_meta_category_proseUpdateInput;
}
