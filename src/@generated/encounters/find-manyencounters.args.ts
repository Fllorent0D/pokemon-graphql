import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { encountersOrderByWithRelationInput } from './encounters-order-by-with-relation.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncountersScalarFieldEnum } from '../prisma/encounters-scalar-field.enum';

@ArgsType()
export class FindManyencountersArgs {

    @Field(() => encountersWhereInput, {nullable:true})
    @Type(() => encountersWhereInput)
    where?: encountersWhereInput;

    @Field(() => [encountersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encountersOrderByWithRelationInput>;

    @Field(() => encountersWhereUniqueInput, {nullable:true})
    cursor?: encountersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncountersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EncountersScalarFieldEnum>;
}
