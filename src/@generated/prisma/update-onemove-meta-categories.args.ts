import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesUpdateInput } from '../move-meta-categories/move-meta-categories-update.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesWhereUniqueInput } from '../move-meta-categories/move-meta-categories-where-unique.input';

@ArgsType()
export class UpdateOnemoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesUpdateInput, {nullable:false})
    @Type(() => move_meta_categoriesUpdateInput)
    data!: move_meta_categoriesUpdateInput;

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    where!: move_meta_categoriesWhereUniqueInput;
}
