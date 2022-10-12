import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyUpdateInput } from '../type-efficacy/type-efficacy-update.input';
import { Type } from 'class-transformer';
import { type_efficacyWhereUniqueInput } from '../type-efficacy/type-efficacy-where-unique.input';

@ArgsType()
export class UpdateOnetypeEfficacyArgs {

    @Field(() => type_efficacyUpdateInput, {nullable:false})
    @Type(() => type_efficacyUpdateInput)
    data!: type_efficacyUpdateInput;

    @Field(() => type_efficacyWhereUniqueInput, {nullable:false})
    @Type(() => type_efficacyWhereUniqueInput)
    where!: type_efficacyWhereUniqueInput;
}
