import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesScalarWhereInput } from './contest-type-names-scalar-where.input';
import { Type } from 'class-transformer';
import { contest_type_namesUpdateManyMutationInput } from './contest-type-names-update-many-mutation.input';

@InputType()
export class contest_type_namesUpdateManyWithWhereWithoutContest_typesInput {

    @Field(() => contest_type_namesScalarWhereInput, {nullable:false})
    @Type(() => contest_type_namesScalarWhereInput)
    where!: contest_type_namesScalarWhereInput;

    @Field(() => contest_type_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => contest_type_namesUpdateManyMutationInput)
    data!: contest_type_namesUpdateManyMutationInput;
}
