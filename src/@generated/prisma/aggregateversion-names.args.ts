import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesWhereInput } from '../version-names/version-names-where.input';
import { Type } from 'class-transformer';
import { version_namesOrderByWithRelationInput } from '../version-names/version-names-order-by-with-relation.input';
import { version_namesWhereUniqueInput } from '../version-names/version-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateversionNamesArgs {

    @Field(() => version_namesWhereInput, {nullable:true})
    @Type(() => version_namesWhereInput)
    where?: version_namesWhereInput;

    @Field(() => [version_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<version_namesOrderByWithRelationInput>;

    @Field(() => version_namesWhereUniqueInput, {nullable:true})
    cursor?: version_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
