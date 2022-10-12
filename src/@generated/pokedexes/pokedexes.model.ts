import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { regions } from '../regions/regions.model';
import { generations } from '../generations/generations.model';
import { pokedex_prose } from '../pokedex-prose/pokedex-prose.model';
import { pokemon_dex_numbers } from '../pokemon-dex-numbers/pokemon-dex-numbers.model';
import { version_groups } from '../version-groups/version-groups.model';
import { PokedexesCount } from '../prisma/pokedexes-count.output';

@ObjectType()
export class pokedexes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id!: number | null;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => regions, {nullable:true})
    regions?: regions | null;

    @Field(() => [generations], {nullable:true})
    generations?: Array<generations>;

    @Field(() => [pokedex_prose], {nullable:true})
    pokedex_prose?: Array<pokedex_prose>;

    @Field(() => [pokemon_dex_numbers], {nullable:true})
    pokemon_dex_numbers?: Array<pokemon_dex_numbers>;

    @Field(() => [version_groups], {nullable:true})
    version_groups?: Array<version_groups>;

    @Field(() => PokedexesCount, {nullable:false})
    _count?: PokedexesCount;
}
