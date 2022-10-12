import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesWhereUniqueInput } from '../move-meta-categories/move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateInput } from '../move-meta-categories/move-meta-categories-create.input';
import { move_meta_categoriesUpdateInput } from '../move-meta-categories/move-meta-categories-update.input';

@ArgsType()
export class UpsertOnemoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    where!: move_meta_categoriesWhereUniqueInput;

    @Field(() => move_meta_categoriesCreateInput, {nullable:false})
    @Type(() => move_meta_categoriesCreateInput)
    create!: move_meta_categoriesCreateInput;

    @Field(() => move_meta_categoriesUpdateInput, {nullable:false})
    @Type(() => move_meta_categoriesUpdateInput)
    update!: move_meta_categoriesUpdateInput;
}
