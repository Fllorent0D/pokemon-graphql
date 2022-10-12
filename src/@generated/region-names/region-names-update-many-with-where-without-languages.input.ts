import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesScalarWhereInput } from './region-names-scalar-where.input';
import { Type } from 'class-transformer';
import { region_namesUpdateManyMutationInput } from './region-names-update-many-mutation.input';

@InputType()
export class region_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => region_namesScalarWhereInput, {nullable:false})
    @Type(() => region_namesScalarWhereInput)
    where!: region_namesScalarWhereInput;

    @Field(() => region_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => region_namesUpdateManyMutationInput)
    data!: region_namesUpdateManyMutationInput;
}
