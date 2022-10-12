import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyWhereInput } from '../type-efficacy/type-efficacy-where.input';
import { Type } from 'class-transformer';
import { type_efficacyOrderByWithRelationInput } from '../type-efficacy/type-efficacy-order-by-with-relation.input';
import { type_efficacyWhereUniqueInput } from '../type-efficacy/type-efficacy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Type_efficacyScalarFieldEnum } from './type-efficacy-scalar-field.enum';

@ArgsType()
export class FindManytypeEfficacyArgs {

    @Field(() => type_efficacyWhereInput, {nullable:true})
    @Type(() => type_efficacyWhereInput)
    where?: type_efficacyWhereInput;

    @Field(() => [type_efficacyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<type_efficacyOrderByWithRelationInput>;

    @Field(() => type_efficacyWhereUniqueInput, {nullable:true})
    cursor?: type_efficacyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Type_efficacyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Type_efficacyScalarFieldEnum>;
}
