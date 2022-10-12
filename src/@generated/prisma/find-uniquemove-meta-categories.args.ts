import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesWhereUniqueInput } from '../move-meta-categories/move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    where!: move_meta_categoriesWhereUniqueInput;
}
