import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StatsRelationFilter } from '../prisma/stats-relation-filter.input';
import { Stat_hint_namesListRelationFilter } from '../prisma/stat-hint-names-list-relation-filter.input';

@InputType()
export class stat_hintsWhereInput {

    @Field(() => [stat_hintsWhereInput], {nullable:true})
    AND?: Array<stat_hintsWhereInput>;

    @Field(() => [stat_hintsWhereInput], {nullable:true})
    OR?: Array<stat_hintsWhereInput>;

    @Field(() => [stat_hintsWhereInput], {nullable:true})
    NOT?: Array<stat_hintsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    gene_mod_5?: IntFilter;

    @Field(() => StatsRelationFilter, {nullable:true})
    stats?: StatsRelationFilter;

    @Field(() => Stat_hint_namesListRelationFilter, {nullable:true})
    stat_hint_names?: Stat_hint_namesListRelationFilter;
}
