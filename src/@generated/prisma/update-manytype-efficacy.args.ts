import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyUpdateManyMutationInput } from '../type-efficacy/type-efficacy-update-many-mutation.input';
import { Type } from 'class-transformer';
import { type_efficacyWhereInput } from '../type-efficacy/type-efficacy-where.input';

@ArgsType()
export class UpdateManytypeEfficacyArgs {

    @Field(() => type_efficacyUpdateManyMutationInput, {nullable:false})
    @Type(() => type_efficacyUpdateManyMutationInput)
    data!: type_efficacyUpdateManyMutationInput;

    @Field(() => type_efficacyWhereInput, {nullable:true})
    @Type(() => type_efficacyWhereInput)
    where?: type_efficacyWhereInput;
}
