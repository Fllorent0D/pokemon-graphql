import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseWhereUniqueInput } from '../move-meta-category-prose/move-meta-category-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    where!: move_meta_category_proseWhereUniqueInput;
}
