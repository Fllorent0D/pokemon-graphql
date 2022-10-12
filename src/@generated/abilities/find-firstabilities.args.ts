import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { abilitiesOrderByWithRelationInput } from './abilities-order-by-with-relation.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AbilitiesScalarFieldEnum } from '../prisma/abilities-scalar-field.enum';

@ArgsType()
export class FindFirstabilitiesArgs {

    @Field(() => abilitiesWhereInput, {nullable:true})
    @Type(() => abilitiesWhereInput)
    where?: abilitiesWhereInput;

    @Field(() => [abilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<abilitiesOrderByWithRelationInput>;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    cursor?: abilitiesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AbilitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AbilitiesScalarFieldEnum>;
}
