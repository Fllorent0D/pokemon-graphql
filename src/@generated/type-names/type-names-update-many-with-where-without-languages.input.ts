import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesScalarWhereInput } from './type-names-scalar-where.input';
import { Type } from 'class-transformer';
import { type_namesUpdateManyMutationInput } from './type-names-update-many-mutation.input';

@InputType()
export class type_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => type_namesScalarWhereInput, {nullable:false})
    @Type(() => type_namesScalarWhereInput)
    where!: type_namesScalarWhereInput;

    @Field(() => type_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => type_namesUpdateManyMutationInput)
    data!: type_namesUpdateManyMutationInput;
}
