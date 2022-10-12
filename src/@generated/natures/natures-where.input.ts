import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Contest_typesRelationFilter } from '../prisma/contest-types-relation-filter.input';
import { StatsRelationFilter } from '../prisma/stats-relation-filter.input';
import { Nature_battle_style_preferencesListRelationFilter } from '../prisma/nature-battle-style-preferences-list-relation-filter.input';
import { Nature_namesListRelationFilter } from '../prisma/nature-names-list-relation-filter.input';
import { Nature_pokeathlon_statsListRelationFilter } from '../prisma/nature-pokeathlon-stats-list-relation-filter.input';

@InputType()
export class naturesWhereInput {

    @Field(() => [naturesWhereInput], {nullable:true})
    AND?: Array<naturesWhereInput>;

    @Field(() => [naturesWhereInput], {nullable:true})
    OR?: Array<naturesWhereInput>;

    @Field(() => [naturesWhereInput], {nullable:true})
    NOT?: Array<naturesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    decreased_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    increased_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    hates_flavor_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    likes_flavor_id?: IntFilter;

    @Field(() => Contest_typesRelationFilter, {nullable:true})
    contest_types_contest_typesTonatures_likes_flavor_id?: Contest_typesRelationFilter;

    @Field(() => Contest_typesRelationFilter, {nullable:true})
    contest_types_contest_typesTonatures_hates_flavor_id?: Contest_typesRelationFilter;

    @Field(() => StatsRelationFilter, {nullable:true})
    stats_natures_increased_stat_idTostats?: StatsRelationFilter;

    @Field(() => StatsRelationFilter, {nullable:true})
    stats_natures_decreased_stat_idTostats?: StatsRelationFilter;

    @Field(() => Nature_battle_style_preferencesListRelationFilter, {nullable:true})
    nature_battle_style_preferences?: Nature_battle_style_preferencesListRelationFilter;

    @Field(() => Nature_namesListRelationFilter, {nullable:true})
    nature_names?: Nature_namesListRelationFilter;

    @Field(() => Nature_pokeathlon_statsListRelationFilter, {nullable:true})
    nature_pokeathlon_stats?: Nature_pokeathlon_statsListRelationFilter;
}
