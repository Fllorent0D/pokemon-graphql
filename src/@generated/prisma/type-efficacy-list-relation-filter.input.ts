import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_efficacyWhereInput } from '../type-efficacy/type-efficacy-where.input';

@InputType()
export class Type_efficacyListRelationFilter {

    @Field(() => type_efficacyWhereInput, {nullable:true})
    every?: type_efficacyWhereInput;

    @Field(() => type_efficacyWhereInput, {nullable:true})
    some?: type_efficacyWhereInput;

    @Field(() => type_efficacyWhereInput, {nullable:true})
    none?: type_efficacyWhereInput;
}
