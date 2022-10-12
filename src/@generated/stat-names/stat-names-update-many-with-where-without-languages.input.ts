import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesScalarWhereInput } from './stat-names-scalar-where.input';
import { Type } from 'class-transformer';
import { stat_namesUpdateManyMutationInput } from './stat-names-update-many-mutation.input';

@InputType()
export class stat_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => stat_namesScalarWhereInput, {nullable:false})
    @Type(() => stat_namesScalarWhereInput)
    where!: stat_namesScalarWhereInput;

    @Field(() => stat_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => stat_namesUpdateManyMutationInput)
    data!: stat_namesUpdateManyMutationInput;
}
