import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsScalarWhereInput } from './locations-scalar-where.input';
import { Type } from 'class-transformer';
import { locationsUpdateManyMutationInput } from './locations-update-many-mutation.input';

@InputType()
export class locationsUpdateManyWithWhereWithoutRegionsInput {

    @Field(() => locationsScalarWhereInput, {nullable:false})
    @Type(() => locationsScalarWhereInput)
    where!: locationsScalarWhereInput;

    @Field(() => locationsUpdateManyMutationInput, {nullable:false})
    @Type(() => locationsUpdateManyMutationInput)
    data!: locationsUpdateManyMutationInput;
}
