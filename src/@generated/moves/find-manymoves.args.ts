import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { movesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { movesOrderByWithRelationInput } from './moves-order-by-with-relation.input';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MovesScalarFieldEnum } from '../prisma/moves-scalar-field.enum';

@ArgsType()
export class FindManymovesArgs {

    @Field(() => movesWhereInput, {nullable:true})
    @Type(() => movesWhereInput)
    where?: movesWhereInput;

    @Field(() => [movesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<movesOrderByWithRelationInput>;

    @Field(() => movesWhereUniqueInput, {nullable:true})
    cursor?: movesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MovesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MovesScalarFieldEnum>;
}
