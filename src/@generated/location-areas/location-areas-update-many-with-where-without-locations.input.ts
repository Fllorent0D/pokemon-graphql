import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasScalarWhereInput } from './location-areas-scalar-where.input';
import { Type } from 'class-transformer';
import { location_areasUpdateManyMutationInput } from './location-areas-update-many-mutation.input';

@InputType()
export class location_areasUpdateManyWithWhereWithoutLocationsInput {

    @Field(() => location_areasScalarWhereInput, {nullable:false})
    @Type(() => location_areasScalarWhereInput)
    where!: location_areasScalarWhereInput;

    @Field(() => location_areasUpdateManyMutationInput, {nullable:false})
    @Type(() => location_areasUpdateManyMutationInput)
    data!: location_areasUpdateManyMutationInput;
}
