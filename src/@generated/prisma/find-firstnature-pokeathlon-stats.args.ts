import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsOrderByWithRelationInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-order-by-with-relation.input';
import { nature_pokeathlon_statsWhereUniqueInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Nature_pokeathlon_statsScalarFieldEnum } from './nature-pokeathlon-stats-scalar-field.enum';

@ArgsType()
export class FindFirstnaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereInput)
    where?: nature_pokeathlon_statsWhereInput;

    @Field(() => [nature_pokeathlon_statsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<nature_pokeathlon_statsOrderByWithRelationInput>;

    @Field(() => nature_pokeathlon_statsWhereUniqueInput, {nullable:true})
    cursor?: nature_pokeathlon_statsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Nature_pokeathlon_statsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Nature_pokeathlon_statsScalarFieldEnum>;
}
