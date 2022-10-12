import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseUpdateManyMutationInput } from '../move-meta-category-prose/move-meta-category-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseWhereInput } from '../move-meta-category-prose/move-meta-category-prose-where.input';

@ArgsType()
export class UpdateManymoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_category_proseUpdateManyMutationInput)
    data!: move_meta_category_proseUpdateManyMutationInput;

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    @Type(() => move_meta_category_proseWhereInput)
    where?: move_meta_category_proseWhereInput;
}
