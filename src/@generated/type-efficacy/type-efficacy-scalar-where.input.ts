import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class type_efficacyScalarWhereInput {

    @Field(() => [type_efficacyScalarWhereInput], {nullable:true})
    AND?: Array<type_efficacyScalarWhereInput>;

    @Field(() => [type_efficacyScalarWhereInput], {nullable:true})
    OR?: Array<type_efficacyScalarWhereInput>;

    @Field(() => [type_efficacyScalarWhereInput], {nullable:true})
    NOT?: Array<type_efficacyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    damage_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_factor?: IntFilter;
}
