import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { languagesOrderByWithRelationInput } from './languages-order-by-with-relation.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguagesScalarFieldEnum } from '../prisma/languages-scalar-field.enum';

@ArgsType()
export class FindManylanguagesArgs {

    @Field(() => languagesWhereInput, {nullable:true})
    @Type(() => languagesWhereInput)
    where?: languagesWhereInput;

    @Field(() => [languagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<languagesOrderByWithRelationInput>;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    cursor?: languagesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LanguagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguagesScalarFieldEnum>;
}
