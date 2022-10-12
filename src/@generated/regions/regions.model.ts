import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { generations } from '../generations/generations.model';
import { locations } from '../locations/locations.model';
import { pokedexes } from '../pokedexes/pokedexes.model';
import { region_names } from '../region-names/region-names.model';
import { version_group_regions } from '../version-group-regions/version-group-regions.model';
import { RegionsCount } from '../prisma/regions-count.output';

@ObjectType()
export class regions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [generations], {nullable:true})
    generations?: Array<generations>;

    @Field(() => [locations], {nullable:true})
    locations?: Array<locations>;

    @Field(() => [pokedexes], {nullable:true})
    pokedexes?: Array<pokedexes>;

    @Field(() => [region_names], {nullable:true})
    region_names?: Array<region_names>;

    @Field(() => [version_group_regions], {nullable:true})
    version_group_regions?: Array<version_group_regions>;

    @Field(() => RegionsCount, {nullable:false})
    _count?: RegionsCount;
}
