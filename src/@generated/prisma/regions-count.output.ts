import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RegionsCount {

    @Field(() => Int, {nullable:false})
    generations!: number;

    @Field(() => Int, {nullable:false})
    locations!: number;

    @Field(() => Int, {nullable:false})
    pokedexes!: number;

    @Field(() => Int, {nullable:false})
    region_names!: number;

    @Field(() => Int, {nullable:false})
    version_group_regions!: number;
}
