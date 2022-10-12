import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyWhereUniqueInput } from '../type-efficacy/type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import { type_efficacyCreateInput } from '../type-efficacy/type-efficacy-create.input';
import { type_efficacyUpdateInput } from '../type-efficacy/type-efficacy-update.input';

@ArgsType()
export class UpsertOnetypeEfficacyArgs {

    @Field(() => type_efficacyWhereUniqueInput, {nullable:false})
    @Type(() => type_efficacyWhereUniqueInput)
    where!: type_efficacyWhereUniqueInput;

    @Field(() => type_efficacyCreateInput, {nullable:false})
    @Type(() => type_efficacyCreateInput)
    create!: type_efficacyCreateInput;

    @Field(() => type_efficacyUpdateInput, {nullable:false})
    @Type(() => type_efficacyUpdateInput)
    update!: type_efficacyUpdateInput;
}
