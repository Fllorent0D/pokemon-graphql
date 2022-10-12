import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesScalarWhereInput } from './location-names-scalar-where.input';
import { Type } from 'class-transformer';
import { location_namesUpdateManyMutationInput } from './location-names-update-many-mutation.input';

@InputType()
export class location_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => location_namesScalarWhereInput, {nullable:false})
    @Type(() => location_namesScalarWhereInput)
    where!: location_namesScalarWhereInput;

    @Field(() => location_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => location_namesUpdateManyMutationInput)
    data!: location_namesUpdateManyMutationInput;
}
