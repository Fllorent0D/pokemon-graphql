import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsWhereInput } from '../evolution-chains/evolution-chains-where.input';
import { Type } from 'class-transformer';
import { evolution_chainsOrderByWithRelationInput } from '../evolution-chains/evolution-chains-order-by-with-relation.input';
import { evolution_chainsWhereUniqueInput } from '../evolution-chains/evolution-chains-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Evolution_chainsScalarFieldEnum } from './evolution-chains-scalar-field.enum';

@ArgsType()
export class FindFirstevolutionChainsArgs {

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    @Type(() => evolution_chainsWhereInput)
    where?: evolution_chainsWhereInput;

    @Field(() => [evolution_chainsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<evolution_chainsOrderByWithRelationInput>;

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:true})
    cursor?: evolution_chainsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Evolution_chainsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Evolution_chainsScalarFieldEnum>;
}
