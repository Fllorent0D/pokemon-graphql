import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateNestedOneWithoutNatures_contest_typesTonatures_hates_flavor_idInput } from '../contest-types/contest-types-create-nested-one-without-natures-contest-types-tonatures-hates-flavor-id.input';
import { statsCreateNestedOneWithoutNatures_natures_increased_stat_idTostatsInput } from '../stats/stats-create-nested-one-without-natures-natures-increased-stat-id-tostats.input';
import { statsCreateNestedOneWithoutNatures_natures_decreased_stat_idTostatsInput } from '../stats/stats-create-nested-one-without-natures-natures-decreased-stat-id-tostats.input';
import { nature_battle_style_preferencesCreateNestedManyWithoutNaturesInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create-nested-many-without-natures.input';
import { nature_namesCreateNestedManyWithoutNaturesInput } from '../nature-names/nature-names-create-nested-many-without-natures.input';
import { nature_pokeathlon_statsCreateNestedManyWithoutNaturesInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-create-nested-many-without-natures.input';

@InputType()
export class naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => contest_typesCreateNestedOneWithoutNatures_contest_typesTonatures_hates_flavor_idInput, {nullable:false})
    contest_types_contest_typesTonatures_hates_flavor_id!: contest_typesCreateNestedOneWithoutNatures_contest_typesTonatures_hates_flavor_idInput;

    @Field(() => statsCreateNestedOneWithoutNatures_natures_increased_stat_idTostatsInput, {nullable:false})
    stats_natures_increased_stat_idTostats!: statsCreateNestedOneWithoutNatures_natures_increased_stat_idTostatsInput;

    @Field(() => statsCreateNestedOneWithoutNatures_natures_decreased_stat_idTostatsInput, {nullable:false})
    stats_natures_decreased_stat_idTostats!: statsCreateNestedOneWithoutNatures_natures_decreased_stat_idTostatsInput;

    @Field(() => nature_battle_style_preferencesCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesCreateNestedManyWithoutNaturesInput;

    @Field(() => nature_namesCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_names?: nature_namesCreateNestedManyWithoutNaturesInput;

    @Field(() => nature_pokeathlon_statsCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsCreateNestedManyWithoutNaturesInput;
}
