import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyWhereInput } from '../type-efficacy/type-efficacy-where.input';
import { Type } from 'class-transformer';
import { type_efficacyOrderByWithAggregationInput } from '../type-efficacy/type-efficacy-order-by-with-aggregation.input';
import { Type_efficacyScalarFieldEnum } from './type-efficacy-scalar-field.enum';
import { type_efficacyScalarWhereWithAggregatesInput } from '../type-efficacy/type-efficacy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBytypeEfficacyArgs {

    @Field(() => type_efficacyWhereInput, {nullable:true})
    @Type(() => type_efficacyWhereInput)
    where?: type_efficacyWhereInput;

    @Field(() => [type_efficacyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<type_efficacyOrderByWithAggregationInput>;

    @Field(() => [Type_efficacyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Type_efficacyScalarFieldEnum>;

    @Field(() => type_efficacyScalarWhereWithAggregatesInput, {nullable:true})
    having?: type_efficacyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
