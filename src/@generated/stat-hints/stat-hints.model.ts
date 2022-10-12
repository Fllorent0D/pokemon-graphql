import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { stats } from '../stats/stats.model';
import { stat_hint_names } from '../stat-hint-names/stat-hint-names.model';
import { Stat_hintsCount } from '../prisma/stat-hints-count.output';

@ObjectType()
export class stat_hints {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => stats, {nullable:false})
    stats?: stats;

    @Field(() => [stat_hint_names], {nullable:true})
    stat_hint_names?: Array<stat_hint_names>;

    @Field(() => Stat_hintsCount, {nullable:false})
    _count?: Stat_hintsCount;
}
