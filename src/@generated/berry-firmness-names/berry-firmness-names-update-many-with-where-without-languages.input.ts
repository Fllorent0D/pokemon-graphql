import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesScalarWhereInput } from './berry-firmness-names-scalar-where.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesUpdateManyMutationInput } from './berry-firmness-names-update-many-mutation.input';

@InputType()
export class berry_firmness_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => berry_firmness_namesScalarWhereInput, {nullable:false})
    @Type(() => berry_firmness_namesScalarWhereInput)
    where!: berry_firmness_namesScalarWhereInput;

    @Field(() => berry_firmness_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateManyMutationInput)
    data!: berry_firmness_namesUpdateManyMutationInput;
}
