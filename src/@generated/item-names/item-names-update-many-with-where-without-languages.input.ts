import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesScalarWhereInput } from './item-names-scalar-where.input';
import { Type } from 'class-transformer';
import { item_namesUpdateManyMutationInput } from './item-names-update-many-mutation.input';

@InputType()
export class item_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => item_namesScalarWhereInput, {nullable:false})
    @Type(() => item_namesScalarWhereInput)
    where!: item_namesScalarWhereInput;

    @Field(() => item_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_namesUpdateManyMutationInput)
    data!: item_namesUpdateManyMutationInput;
}
