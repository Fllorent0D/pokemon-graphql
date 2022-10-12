import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { pokedexesOrderByWithRelationInput } from './pokedexes-order-by-with-relation.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokedexesScalarFieldEnum } from '../prisma/pokedexes-scalar-field.enum';

@ArgsType()
export class FindFirstpokedexesArgs {

    @Field(() => pokedexesWhereInput, {nullable:true})
    @Type(() => pokedexesWhereInput)
    where?: pokedexesWhereInput;

    @Field(() => [pokedexesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokedexesOrderByWithRelationInput>;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    cursor?: pokedexesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokedexesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PokedexesScalarFieldEnum>;
}
