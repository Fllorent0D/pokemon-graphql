import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseScalarWhereInput } from './move-meta-category-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseUpdateManyMutationInput } from './move-meta-category-prose-update-many-mutation.input';

@InputType()
export class move_meta_category_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => move_meta_category_proseScalarWhereInput, {nullable:false})
    @Type(() => move_meta_category_proseScalarWhereInput)
    where!: move_meta_category_proseScalarWhereInput;

    @Field(() => move_meta_category_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_category_proseUpdateManyMutationInput)
    data!: move_meta_category_proseUpdateManyMutationInput;
}
