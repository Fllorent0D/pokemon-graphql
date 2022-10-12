import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_categoriesUpdateManyMutationInput } from '../move-meta-categories/move-meta-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesWhereInput } from '../move-meta-categories/move-meta-categories-where.input';

@ArgsType()
export class UpdateManymoveMetaCategoriesArgs {

    @Field(() => move_meta_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_categoriesUpdateManyMutationInput)
    data!: move_meta_categoriesUpdateManyMutationInput;

    @Field(() => move_meta_categoriesWhereInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereInput)
    where?: move_meta_categoriesWhereInput;
}
