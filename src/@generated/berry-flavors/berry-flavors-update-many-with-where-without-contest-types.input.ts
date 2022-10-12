import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsScalarWhereInput } from './berry-flavors-scalar-where.input';
import { Type } from 'class-transformer';
import { berry_flavorsUpdateManyMutationInput } from './berry-flavors-update-many-mutation.input';

@InputType()
export class berry_flavorsUpdateManyWithWhereWithoutContest_typesInput {

    @Field(() => berry_flavorsScalarWhereInput, {nullable:false})
    @Type(() => berry_flavorsScalarWhereInput)
    where!: berry_flavorsScalarWhereInput;

    @Field(() => berry_flavorsUpdateManyMutationInput, {nullable:false})
    @Type(() => berry_flavorsUpdateManyMutationInput)
    data!: berry_flavorsUpdateManyMutationInput;
}
