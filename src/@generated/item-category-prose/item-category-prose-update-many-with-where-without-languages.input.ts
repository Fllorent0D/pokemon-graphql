import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseScalarWhereInput } from './item-category-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { item_category_proseUpdateManyMutationInput } from './item-category-prose-update-many-mutation.input';

@InputType()
export class item_category_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => item_category_proseScalarWhereInput, {nullable:false})
    @Type(() => item_category_proseScalarWhereInput)
    where!: item_category_proseScalarWhereInput;

    @Field(() => item_category_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_category_proseUpdateManyMutationInput)
    data!: item_category_proseUpdateManyMutationInput;
}
