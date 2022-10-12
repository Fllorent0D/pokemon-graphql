import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesScalarWhereInput } from './generation-names-scalar-where.input';
import { Type } from 'class-transformer';
import { generation_namesUpdateManyMutationInput } from './generation-names-update-many-mutation.input';

@InputType()
export class generation_namesUpdateManyWithWhereWithoutGenerationsInput {

    @Field(() => generation_namesScalarWhereInput, {nullable:false})
    @Type(() => generation_namesScalarWhereInput)
    where!: generation_namesScalarWhereInput;

    @Field(() => generation_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => generation_namesUpdateManyMutationInput)
    data!: generation_namesUpdateManyMutationInput;
}
