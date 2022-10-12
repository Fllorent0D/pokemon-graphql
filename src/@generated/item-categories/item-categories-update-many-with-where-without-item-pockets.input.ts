import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesScalarWhereInput } from './item-categories-scalar-where.input';
import { Type } from 'class-transformer';
import { item_categoriesUpdateManyMutationInput } from './item-categories-update-many-mutation.input';

@InputType()
export class item_categoriesUpdateManyWithWhereWithoutItem_pocketsInput {

    @Field(() => item_categoriesScalarWhereInput, {nullable:false})
    @Type(() => item_categoriesScalarWhereInput)
    where!: item_categoriesScalarWhereInput;

    @Field(() => item_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_categoriesUpdateManyMutationInput)
    data!: item_categoriesUpdateManyMutationInput;
}
