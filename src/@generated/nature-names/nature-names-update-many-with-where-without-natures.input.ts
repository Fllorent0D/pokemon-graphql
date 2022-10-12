import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesScalarWhereInput } from './nature-names-scalar-where.input';
import { Type } from 'class-transformer';
import { nature_namesUpdateManyMutationInput } from './nature-names-update-many-mutation.input';

@InputType()
export class nature_namesUpdateManyWithWhereWithoutNaturesInput {

    @Field(() => nature_namesScalarWhereInput, {nullable:false})
    @Type(() => nature_namesScalarWhereInput)
    where!: nature_namesScalarWhereInput;

    @Field(() => nature_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => nature_namesUpdateManyMutationInput)
    data!: nature_namesUpdateManyMutationInput;
}
