import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_namesWhereInput } from '../language-names/language-names-where.input';
import { Type } from 'class-transformer';
import { language_namesOrderByWithRelationInput } from '../language-names/language-names-order-by-with-relation.input';
import { language_namesWhereUniqueInput } from '../language-names/language-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatelanguageNamesArgs {

    @Field(() => language_namesWhereInput, {nullable:true})
    @Type(() => language_namesWhereInput)
    where?: language_namesWhereInput;

    @Field(() => [language_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<language_namesOrderByWithRelationInput>;

    @Field(() => language_namesWhereUniqueInput, {nullable:true})
    cursor?: language_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
