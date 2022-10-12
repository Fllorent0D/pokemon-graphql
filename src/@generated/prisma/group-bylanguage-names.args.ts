import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesWhereInput } from '../language-names/language-names-where.input';
import { Type } from 'class-transformer';
import { language_namesOrderByWithAggregationInput } from '../language-names/language-names-order-by-with-aggregation.input';
import { Language_namesScalarFieldEnum } from './language-names-scalar-field.enum';
import { language_namesScalarWhereWithAggregatesInput } from '../language-names/language-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylanguageNamesArgs {

    @Field(() => language_namesWhereInput, {nullable:true})
    @Type(() => language_namesWhereInput)
    where?: language_namesWhereInput;

    @Field(() => [language_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<language_namesOrderByWithAggregationInput>;

    @Field(() => [Language_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Language_namesScalarFieldEnum>;

    @Field(() => language_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: language_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
