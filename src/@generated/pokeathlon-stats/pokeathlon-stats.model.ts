import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { nature_pokeathlon_stats } from '../nature-pokeathlon-stats/nature-pokeathlon-stats.model';
import { pokeathlon_stat_names } from '../pokeathlon-stat-names/pokeathlon-stat-names.model';
import { pokemon_form_pokeathlon_stats } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats.model';
import { Pokeathlon_statsCount } from '../prisma/pokeathlon-stats-count.output';

@ObjectType()
export class pokeathlon_stats {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [nature_pokeathlon_stats], {nullable:true})
    nature_pokeathlon_stats?: Array<nature_pokeathlon_stats>;

    @Field(() => [pokeathlon_stat_names], {nullable:true})
    pokeathlon_stat_names?: Array<pokeathlon_stat_names>;

    @Field(() => [pokemon_form_pokeathlon_stats], {nullable:true})
    pokemon_form_pokeathlon_stats?: Array<pokemon_form_pokeathlon_stats>;

    @Field(() => Pokeathlon_statsCount, {nullable:false})
    _count?: Pokeathlon_statsCount;
}
