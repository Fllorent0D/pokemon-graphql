import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsScalarWhereInput } from './items-scalar-where.input';
import { Type } from 'class-transformer';
import { itemsUpdateManyMutationInput } from './items-update-many-mutation.input';

@InputType()
export class itemsUpdateManyWithWhereWithoutItem_categoriesInput {

    @Field(() => itemsScalarWhereInput, {nullable:false})
    @Type(() => itemsScalarWhereInput)
    where!: itemsScalarWhereInput;

    @Field(() => itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => itemsUpdateManyMutationInput)
    data!: itemsUpdateManyMutationInput;
}
