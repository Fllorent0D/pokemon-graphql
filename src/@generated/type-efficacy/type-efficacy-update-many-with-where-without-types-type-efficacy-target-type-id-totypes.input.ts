import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_efficacyScalarWhereInput } from './type-efficacy-scalar-where.input';
import { Type } from 'class-transformer';
import { type_efficacyUpdateManyMutationInput } from './type-efficacy-update-many-mutation.input';

@InputType()
export class type_efficacyUpdateManyWithWhereWithoutTypes_type_efficacy_target_type_idTotypesInput {

    @Field(() => type_efficacyScalarWhereInput, {nullable:false})
    @Type(() => type_efficacyScalarWhereInput)
    where!: type_efficacyScalarWhereInput;

    @Field(() => type_efficacyUpdateManyMutationInput, {nullable:false})
    @Type(() => type_efficacyUpdateManyMutationInput)
    data!: type_efficacyUpdateManyMutationInput;
}
